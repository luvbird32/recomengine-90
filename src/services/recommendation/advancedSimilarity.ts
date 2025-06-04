
// Advanced similarity calculation algorithms

export interface SimilarityMetrics {
  cosine: number;
  jaccard: number;
  pearson: number;
  euclidean: number;
  manhattan: number;
}

// Cosine similarity
export const calculateCosineSimilarity = (vectorA: number[], vectorB: number[]): number => {
  if (vectorA.length !== vectorB.length) return 0;
  
  const dotProduct = vectorA.reduce((sum, a, i) => sum + a * vectorB[i], 0);
  const magnitudeA = Math.sqrt(vectorA.reduce((sum, a) => sum + a * a, 0));
  const magnitudeB = Math.sqrt(vectorB.reduce((sum, b) => sum + b * b, 0));
  
  if (magnitudeA === 0 || magnitudeB === 0) return 0;
  return dotProduct / (magnitudeA * magnitudeB);
};

// Jaccard similarity for sets
export const calculateJaccardSimilarity = (setA: string[], setB: string[]): number => {
  const intersection = setA.filter(item => setB.includes(item));
  const union = [...new Set([...setA, ...setB])];
  
  if (union.length === 0) return 0;
  return intersection.length / union.length;
};

// Pearson correlation coefficient
export const calculatePearsonCorrelation = (vectorA: number[], vectorB: number[]): number => {
  if (vectorA.length !== vectorB.length || vectorA.length === 0) return 0;
  
  const n = vectorA.length;
  const sumA = vectorA.reduce((sum, a) => sum + a, 0);
  const sumB = vectorB.reduce((sum, b) => sum + b, 0);
  const sumAB = vectorA.reduce((sum, a, i) => sum + a * vectorB[i], 0);
  const sumA2 = vectorA.reduce((sum, a) => sum + a * a, 0);
  const sumB2 = vectorB.reduce((sum, b) => sum + b * b, 0);
  
  const numerator = n * sumAB - sumA * sumB;
  const denominator = Math.sqrt((n * sumA2 - sumA * sumA) * (n * sumB2 - sumB * sumB));
  
  if (denominator === 0) return 0;
  return numerator / denominator;
};

// Euclidean distance (converted to similarity)
export const calculateEuclideanSimilarity = (vectorA: number[], vectorB: number[]): number => {
  if (vectorA.length !== vectorB.length) return 0;
  
  const distance = Math.sqrt(
    vectorA.reduce((sum, a, i) => sum + Math.pow(a - vectorB[i], 2), 0)
  );
  
  return 1 / (1 + distance); // Convert distance to similarity
};

// Manhattan distance (converted to similarity)
export const calculateManhattanSimilarity = (vectorA: number[], vectorB: number[]): number => {
  if (vectorA.length !== vectorB.length) return 0;
  
  const distance = vectorA.reduce((sum, a, i) => sum + Math.abs(a - vectorB[i]), 0);
  
  return 1 / (1 + distance); // Convert distance to similarity
};

// Comprehensive similarity calculation
export const calculateAllSimilarities = (
  vectorA: number[],
  vectorB: number[],
  setA?: string[],
  setB?: string[]
): SimilarityMetrics => {
  return {
    cosine: calculateCosineSimilarity(vectorA, vectorB),
    jaccard: setA && setB ? calculateJaccardSimilarity(setA, setB) : 0,
    pearson: calculatePearsonCorrelation(vectorA, vectorB),
    euclidean: calculateEuclideanSimilarity(vectorA, vectorB),
    manhattan: calculateManhattanSimilarity(vectorA, vectorB)
  };
};

// Weighted similarity score
export const calculateWeightedSimilarity = (
  metrics: SimilarityMetrics,
  weights: Partial<SimilarityMetrics> = {}
): number => {
  const defaultWeights = {
    cosine: 0.3,
    jaccard: 0.2,
    pearson: 0.2,
    euclidean: 0.15,
    manhattan: 0.15
  };
  
  const finalWeights = { ...defaultWeights, ...weights };
  
  return (
    metrics.cosine * finalWeights.cosine +
    metrics.jaccard * finalWeights.jaccard +
    metrics.pearson * finalWeights.pearson +
    metrics.euclidean * finalWeights.euclidean +
    metrics.manhattan * finalWeights.manhattan
  );
};

// Adaptive similarity based on data characteristics
export const calculateAdaptiveSimilarity = (
  dataA: any,
  dataB: any,
  context: 'user' | 'content' | 'behavior' = 'user'
): number => {
  switch (context) {
    case 'user':
      // For users, prioritize interests and behavior patterns
      const interestSimilarity = calculateJaccardSimilarity(
        dataA.interests || [],
        dataB.interests || []
      );
      const behaviorVector = [dataA.followers || 0, dataA.following || 0];
      const otherBehaviorVector = [dataB.followers || 0, dataB.following || 0];
      const behaviorSimilarity = calculateCosineSimilarity(behaviorVector, otherBehaviorVector);
      
      return interestSimilarity * 0.7 + behaviorSimilarity * 0.3;
      
    case 'content':
      // For content, focus on engagement and type
      const engagementVector = [dataA.views || 0, dataA.likes || 0];
      const otherEngagementVector = [dataB.views || 0, dataB.likes || 0];
      const engagementSimilarity = calculateCosineSimilarity(engagementVector, otherEngagementVector);
      const typeSimilarity = dataA.type === dataB.type ? 1 : 0;
      
      return engagementSimilarity * 0.6 + typeSimilarity * 0.4;
      
    case 'behavior':
      // For behavior, use time series analysis
      const timePattern = [dataA.timestamp ? new Date(dataA.timestamp).getHours() : 0];
      const otherTimePattern = [dataB.timestamp ? new Date(dataB.timestamp).getHours() : 0];
      
      return calculateCosineSimilarity(timePattern, otherTimePattern);
      
    default:
      return 0;
  }
};
