
import { users, contents } from './mockData';
import type { User, Content } from './types';

// User-based collaborative filtering
export const getUserBasedRecommendations = (
  userId: string, 
  limit: number = 5
): { id: string; score: number; reason: string }[] => {
  const targetUser = users.find(u => u.id === userId);
  if (!targetUser) return [];

  // Find similar users based on shared interests
  const similarUsers = users
    .filter(u => u.id !== userId)
    .map(user => {
      const sharedInterests = user.interests.filter(interest => 
        targetUser.interests.includes(interest)
      );
      const similarity = sharedInterests.length / 
        Math.max(user.interests.length, targetUser.interests.length);
      
      return { user, similarity, sharedInterests };
    })
    .filter(({ similarity }) => similarity > 0.2)
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 10);

  // Get content liked by similar users
  const recommendations = new Map<string, { score: number; reasons: string[] }>();
  
  similarUsers.forEach(({ user, similarity, sharedInterests }) => {
    // Simulate content preferences based on user interests
    contents.forEach(content => {
      if (user.interests.some(interest => 
        content.title.toLowerCase().includes(interest.toLowerCase())
      )) {
        const contentId = content.id;
        const currentScore = recommendations.get(contentId)?.score || 0;
        const newScore = currentScore + (similarity * 0.8);
        const reasons = recommendations.get(contentId)?.reasons || [];
        reasons.push(`Similar to ${user.name} (${sharedInterests.join(', ')})`);
        
        recommendations.set(contentId, { score: newScore, reasons });
      }
    });
  });

  return Array.from(recommendations.entries())
    .map(([id, { score, reasons }]) => ({
      id,
      score,
      reason: reasons[0] || 'Based on similar users'
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
};

// Item-based collaborative filtering
export const getItemBasedRecommendations = (
  contentId: string,
  limit: number = 5
): { id: string; score: number; reason: string }[] => {
  const targetContent = contents.find(c => c.id === contentId);
  if (!targetContent) return [];

  // Calculate item similarity based on user interactions
  const itemSimilarities = contents
    .filter(c => c.id !== contentId)
    .map(content => {
      // Simulate similarity based on content type and engagement
      const typeSimilarity = content.type === targetContent.type ? 0.3 : 0;
      const engagementSimilarity = Math.abs(content.likes - targetContent.likes) / 
        Math.max(content.likes, targetContent.likes, 1);
      const viewsSimilarity = Math.abs(content.views - targetContent.views) / 
        Math.max(content.views, targetContent.views, 1);
      
      const totalSimilarity = typeSimilarity + 
        (1 - engagementSimilarity) * 0.4 + 
        (1 - viewsSimilarity) * 0.3;

      return {
        id: content.id,
        score: totalSimilarity,
        reason: `Similar ${content.type} content with comparable engagement`
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return itemSimilarities;
};

// Matrix factorization simulation
export const getMatrixFactorizationRecommendations = (
  userId: string,
  limit: number = 5
): { id: string; score: number; reason: string }[] => {
  const targetUser = users.find(u => u.id === userId);
  if (!targetUser) return [];

  // Simulate latent factor model
  const userFactors = targetUser.interests.map(interest => 
    interest.length * Math.random()
  );

  const recommendations = contents.map(content => {
    // Simulate item factors based on content characteristics
    const itemFactors = [
      content.views / 1000,
      content.likes / 100,
      content.title.length / 10,
      content.type === 'video' ? 2 : content.type === 'article' ? 1.5 : 1
    ];

    // Calculate dot product (simplified matrix factorization)
    const score = userFactors.slice(0, itemFactors.length)
      .reduce((sum, factor, index) => sum + factor * itemFactors[index], 0);

    return {
      id: content.id,
      score: Math.max(0, score),
      reason: 'Based on latent factor analysis'
    };
  })
  .sort((a, b) => b.score - a.score)
  .slice(0, limit);

  return recommendations;
};
