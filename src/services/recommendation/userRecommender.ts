import { users, contents } from './mockData';
import type { User, Content } from './types';

export const getRecommendedUsers = (currentUserInterests: string[] = ['technology', 'programming']): User[] => {
  return users
    .filter(user => user.interests.some(interest => currentUserInterests.includes(interest)))
    .sort((a, b) => b.followers - a.followers);
};

export const getRecommendedContent = (userInterests: string[] = ['technology', 'programming']): Content[] => {
  return contents.sort((a, b) => {
    const scoreA = (a.views * 0.3) + (a.likes * 0.7);
    const scoreB = (b.views * 0.3) + (b.likes * 0.7);
    return scoreB - scoreA;
  });
};