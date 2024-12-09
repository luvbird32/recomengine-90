import { users } from './mockData';
import type { MutualScore } from './types';

export const getMutualRecommendations = (userId: string, limit: number = 5): MutualScore[] => {
  const currentUser = users.find(u => u.id === userId);
  if (!currentUser) return [];

  return users
    .filter(user => user.id !== userId)
    .map(user => {
      const sharedInterests = currentUser.interests.filter(interest => 
        user.interests.includes(interest)
      );

      const mutualScore = (
        (sharedInterests.length / Math.max(currentUser.interests.length, user.interests.length)) * 0.7 +
        (Math.min(user.followers, currentUser.followers) / 
         Math.max(user.followers, currentUser.followers)) * 0.3
      );

      return {
        userId: user.id,
        mutualScore,
        sharedInterests,
        sharedConnections: Math.floor(Math.random() * 10)
      };
    })
    .sort((a, b) => b.mutualScore - a.mutualScore)
    .slice(0, limit);
};