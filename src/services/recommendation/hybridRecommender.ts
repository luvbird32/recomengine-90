
import { getContentBasedRecommendations } from './contentBasedRecommender';
import { getUserBasedRecommendations, getItemBasedRecommendations, getMatrixFactorizationRecommendations } from './collaborativeFiltering';
import { getMutualRecommendations } from './mutualRecommender';

export interface HybridRecommendation {
  id: string;
  score: number;
  algorithms: string[];
  confidence: number;
  reason: string;
}

// Weighted hybrid approach
export const getWeightedHybridRecommendations = (
  userId: string,
  contentId?: string,
  limit: number = 10
): HybridRecommendation[] => {
  const recommendations = new Map<string, {
    scores: number[];
    algorithms: string[];
    reasons: string[];
  }>();

  // Get recommendations from different algorithms
  const userBased = getUserBasedRecommendations(userId, 15);
  const matrixFactorization = getMatrixFactorizationRecommendations(userId, 15);
  const mutual = getMutualRecommendations(userId, 15);

  // Add content-based if contentId is provided
  let contentBased: any[] = [];
  let itemBased: any[] = [];
  if (contentId) {
    contentBased = getContentBasedRecommendations(contentId, 15);
    itemBased = getItemBasedRecommendations(contentId, 15);
  }

  // Combine results with weights
  const algorithmWeights = {
    userBased: 0.25,
    contentBased: 0.2,
    itemBased: 0.2,
    matrixFactorization: 0.2,
    mutual: 0.15
  };

  // Process user-based recommendations
  userBased.forEach(rec => {
    updateRecommendationMap(recommendations, rec.id, rec.score * algorithmWeights.userBased, 'User-based CF', rec.reason);
  });

  // Process matrix factorization recommendations
  matrixFactorization.forEach(rec => {
    updateRecommendationMap(recommendations, rec.id, rec.score * algorithmWeights.matrixFactorization, 'Matrix Factorization', rec.reason);
  });

  // Process mutual recommendations
  mutual.forEach(rec => {
    updateRecommendationMap(recommendations, rec.userId, rec.mutualScore * algorithmWeights.mutual, 'Mutual Connections', `${rec.sharedInterests.length} shared interests`);
  });

  // Process content-based recommendations if available
  contentBased.forEach(rec => {
    updateRecommendationMap(recommendations, rec.id, rec.similarity * algorithmWeights.contentBased, 'Content-based', `${rec.features.length} shared features`);
  });

  // Process item-based recommendations if available
  itemBased.forEach(rec => {
    updateRecommendationMap(recommendations, rec.id, rec.score * algorithmWeights.itemBased, 'Item-based CF', rec.reason);
  });

  // Convert to final format and calculate confidence
  return Array.from(recommendations.entries())
    .map(([id, data]) => {
      const avgScore = data.scores.reduce((sum, score) => sum + score, 0) / data.scores.length;
      const confidence = Math.min(data.algorithms.length / 3, 1); // More algorithms = higher confidence
      
      return {
        id,
        score: avgScore,
        algorithms: data.algorithms,
        confidence,
        reason: data.reasons[0] || 'Multi-algorithm recommendation'
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
};

// Switching hybrid approach - choose best algorithm based on context
export const getSwitchingHybridRecommendations = (
  userId: string,
  context: 'cold_start' | 'regular' | 'popular_content' = 'regular',
  limit: number = 5
): HybridRecommendation[] => {
  switch (context) {
    case 'cold_start':
      // For new users, prefer content-based and popular content
      const popularContent = getMatrixFactorizationRecommendations(userId, limit);
      return popularContent.map(rec => ({
        id: rec.id,
        score: rec.score,
        algorithms: ['Popularity-based'],
        confidence: 0.6,
        reason: 'Popular content for new users'
      }));

    case 'popular_content':
      // Focus on trending content
      const trending = getMatrixFactorizationRecommendations(userId, limit);
      return trending.map(rec => ({
        id: rec.id,
        score: rec.score,
        algorithms: ['Trending'],
        confidence: 0.8,
        reason: 'Trending content'
      }));

    default:
      // Regular users get collaborative filtering
      const userBased = getUserBasedRecommendations(userId, limit);
      return userBased.map(rec => ({
        id: rec.id,
        score: rec.score,
        algorithms: ['User-based CF'],
        confidence: 0.85,
        reason: rec.reason
      }));
  }
};

// Mixed hybrid approach - present results from multiple algorithms
export const getMixedHybridRecommendations = (
  userId: string,
  limit: number = 12
): { category: string; recommendations: HybridRecommendation[] }[] => {
  const categories = [
    {
      category: 'Based on Similar Users',
      recommendations: getUserBasedRecommendations(userId, 4).map(rec => ({
        id: rec.id,
        score: rec.score,
        algorithms: ['User-based CF'],
        confidence: 0.8,
        reason: rec.reason
      }))
    },
    {
      category: 'Trending Content',
      recommendations: getMatrixFactorizationRecommendations(userId, 4).map(rec => ({
        id: rec.id,
        score: rec.score,
        algorithms: ['Matrix Factorization'],
        confidence: 0.7,
        reason: rec.reason
      }))
    },
    {
      category: 'People You May Know',
      recommendations: getMutualRecommendations(userId, 4).map(rec => ({
        id: rec.userId,
        score: rec.mutualScore,
        algorithms: ['Mutual Connections'],
        confidence: 0.9,
        reason: `${rec.sharedInterests.length} shared interests`
      }))
    }
  ];

  return categories;
};

function updateRecommendationMap(
  map: Map<string, { scores: number[]; algorithms: string[]; reasons: string[] }>,
  id: string,
  score: number,
  algorithm: string,
  reason: string
) {
  if (!map.has(id)) {
    map.set(id, { scores: [], algorithms: [], reasons: [] });
  }
  const entry = map.get(id)!;
  entry.scores.push(score);
  entry.algorithms.push(algorithm);
  entry.reasons.push(reason);
}
