
import { getUserBasedRecommendations, getItemBasedRecommendations, getMatrixFactorizationRecommendations } from './collaborativeFiltering';
import { getContentBasedRecommendations } from './contentBasedRecommender';
import { getMutualRecommendations } from './mutualRecommender';
import { getWeightedHybridRecommendations } from './hybridRecommender';

export interface EnsembleRecommendation {
  id: string;
  score: number;
  confidence: number;
  diversity: number;
  algorithms: string[];
  explanation: string;
}

// Ensemble method using voting
export const getEnsembleRecommendations = (
  userId: string,
  contentId?: string,
  limit: number = 10
): EnsembleRecommendation[] => {
  const algorithmResults = new Map<string, {
    votes: number;
    totalScore: number;
    algorithms: string[];
    maxScore: number;
  }>();

  // Collect recommendations from all algorithms
  const algorithms = [
    { name: 'User-based CF', results: getUserBasedRecommendations(userId, 20) },
    { name: 'Matrix Factorization', results: getMatrixFactorizationRecommendations(userId, 20) },
    { name: 'Mutual Connections', results: getMutualRecommendations(userId, 20).map(r => ({ id: r.userId, score: r.mutualScore, reason: 'Mutual' })) }
  ];

  if (contentId) {
    algorithms.push(
      { name: 'Content-based', results: getContentBasedRecommendations(contentId, 20).map(r => ({ id: r.id, score: r.similarity, reason: 'Content' })) },
      { name: 'Item-based CF', results: getItemBasedRecommendations(contentId, 20) }
    );
  }

  // Voting and score aggregation
  algorithms.forEach(({ name, results }) => {
    results.forEach((rec, index) => {
      const id = rec.id;
      const normalizedScore = rec.score / Math.max(...results.map(r => r.score));
      const positionWeight = 1 - (index / results.length); // Higher weight for top positions
      
      if (!algorithmResults.has(id)) {
        algorithmResults.set(id, {
          votes: 0,
          totalScore: 0,
          algorithms: [],
          maxScore: 0
        });
      }
      
      const entry = algorithmResults.get(id)!;
      entry.votes += 1;
      entry.totalScore += normalizedScore * positionWeight;
      entry.algorithms.push(name);
      entry.maxScore = Math.max(entry.maxScore, normalizedScore);
    });
  });

  // Calculate final scores and diversity
  return Array.from(algorithmResults.entries())
    .map(([id, data]) => {
      const confidence = Math.min(data.votes / algorithms.length, 1);
      const avgScore = data.totalScore / data.votes;
      const diversity = calculateDiversityScore(data.algorithms);
      
      return {
        id,
        score: avgScore * confidence,
        confidence,
        diversity,
        algorithms: [...new Set(data.algorithms)],
        explanation: generateExplanation(data.algorithms, data.votes, algorithms.length)
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
};

// Stacking ensemble - use one algorithm to combine others
export const getStackingEnsemble = (
  userId: string,
  contentId?: string,
  limit: number = 10
): EnsembleRecommendation[] => {
  // Get base recommendations
  const baseRecommendations = getWeightedHybridRecommendations(userId, contentId, limit * 2);
  
  // Apply meta-learning (simplified)
  return baseRecommendations.map(rec => {
    // Simulate meta-learner adjustments
    const diversityBonus = rec.algorithms.length > 2 ? 0.1 : 0;
    const confidenceWeight = rec.confidence > 0.8 ? 1.1 : rec.confidence < 0.5 ? 0.9 : 1;
    
    return {
      id: rec.id,
      score: rec.score * confidenceWeight + diversityBonus,
      confidence: rec.confidence,
      diversity: calculateDiversityScore(rec.algorithms),
      algorithms: rec.algorithms,
      explanation: `Stacked prediction from ${rec.algorithms.length} algorithms`
    };
  })
  .sort((a, b) => b.score - a.score)
  .slice(0, limit);
};

// Bagging ensemble - bootstrap aggregating
export const getBaggingEnsemble = (
  userId: string,
  iterations: number = 5,
  limit: number = 10
): EnsembleRecommendation[] => {
  const allPredictions = new Map<string, number[]>();
  
  // Bootstrap sampling and prediction
  for (let i = 0; i < iterations; i++) {
    // Simulate bootstrap sampling by adding randomness
    const randomWeight = 0.8 + Math.random() * 0.4; // 0.8 to 1.2
    
    const userBased = getUserBasedRecommendations(userId, 15);
    const matrixFact = getMatrixFactorizationRecommendations(userId, 15);
    
    [...userBased, ...matrixFact].forEach(rec => {
      const adjustedScore = rec.score * randomWeight;
      if (!allPredictions.has(rec.id)) {
        allPredictions.set(rec.id, []);
      }
      allPredictions.get(rec.id)!.push(adjustedScore);
    });
  }
  
  // Aggregate predictions
  return Array.from(allPredictions.entries())
    .map(([id, scores]) => {
      const avgScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
      const variance = scores.reduce((sum, score) => sum + Math.pow(score - avgScore, 2), 0) / scores.length;
      const confidence = 1 - Math.min(variance, 0.5); // Lower variance = higher confidence
      
      return {
        id,
        score: avgScore,
        confidence,
        diversity: 0.5, // Moderate diversity for bagging
        algorithms: ['Bootstrap Aggregating'],
        explanation: `Averaged from ${scores.length} bootstrap samples`
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
};

function calculateDiversityScore(algorithms: string[]): number {
  const uniqueAlgorithms = new Set(algorithms);
  const maxDiversity = 5; // Assuming max 5 different algorithm types
  return Math.min(uniqueAlgorithms.size / maxDiversity, 1);
}

function generateExplanation(algorithms: string[], votes: number, totalAlgorithms: number): string {
  const uniqueAlgorithms = [...new Set(algorithms)];
  const agreement = votes / totalAlgorithms;
  
  if (agreement >= 0.8) {
    return `Strong consensus from ${uniqueAlgorithms.join(', ')}`;
  } else if (agreement >= 0.6) {
    return `Good agreement across ${uniqueAlgorithms.length} algorithms`;
  } else {
    return `Mixed signals from ${uniqueAlgorithms.join(', ')}`;
  }
}
