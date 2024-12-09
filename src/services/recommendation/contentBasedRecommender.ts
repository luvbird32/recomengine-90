import { contentFeatures } from './mockData';
import type { ContentFeatures } from './types';

export const getContentBasedRecommendations = (
  contentId: string,
  limit: number = 5
): { id: string; similarity: number; features: string[] }[] => {
  const targetContent = contentFeatures.find(c => c.id === contentId);
  if (!targetContent) return [];

  const recommendations = contentFeatures
    .filter(content => content.id !== contentId)
    .map(content => {
      const similarity = calculateContentSimilarity(targetContent, content);
      const sharedFeatures = content.features.filter(f => 
        targetContent.features.includes(f)
      );

      return {
        id: content.id,
        similarity,
        features: sharedFeatures
      };
    })
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, limit);

  return recommendations;
};

const calculateContentSimilarity = (content1: ContentFeatures, content2: ContentFeatures): number => {
  // Calculate feature similarity
  const sharedFeatures = content2.features.filter(f => 
    content1.features.includes(f)
  );
  
  // Calculate tag similarity
  const sharedTags = content2.tags.filter(t => 
    content1.tags.includes(t)
  );

  // Calculate metadata similarity using weighted Euclidean distance
  const metadataSimilarity = 1 - Math.sqrt(
    (Math.pow(content2.metadata.complexity - content1.metadata.complexity, 2) * 0.3) +
    (Math.pow(content2.metadata.popularity - content1.metadata.popularity, 2) * 0.4) +
    (Math.pow(content2.metadata.recency - content1.metadata.recency, 2) * 0.3)
  );

  // Calculate overall similarity score (weighted average)
  return (
    (sharedFeatures.length / Math.max(content2.features.length, content1.features.length) * 0.4) +
    (sharedTags.length / Math.max(content2.tags.length, content1.tags.length) * 0.3) +
    (metadataSimilarity * 0.3)
  );
};