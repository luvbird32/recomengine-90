
# Services Documentation

This directory contains all business logic, API services, and core functionality for the recommendation engine.

## 📁 Directory Structure

```
services/
├── recommendation/          # Core recommendation algorithms
│   ├── collaborativeFiltering.ts    # User/Item-based collaborative filtering
│   ├── contentBasedRecommender.ts   # Content-based algorithms
│   ├── mutualRecommender.ts         # Social/mutual recommendations
│   ├── hybridRecommender.ts         # Hybrid approaches
│   ├── ensemble.ts                  # Ensemble methods
│   ├── advancedSimilarity.ts        # Similarity functions
│   ├── types.ts                     # TypeScript interfaces
│   ├── mockData.ts                  # Test data generation
│   ├── tracking.ts                  # User interaction tracking
│   └── userRecommender.ts           # User-specific logic
├── recommendationService.ts   # Main service API
└── analyticsService.ts       # Analytics and metrics
```

## 🎯 Core Services

### Recommendation Service (`recommendationService.ts`)

The main entry point for all recommendation functionality.

```typescript
import { getRecommendations } from './services/recommendationService';

// Basic usage
const recommendations = await getRecommendations({
  userId: 'user-123',
  limit: 10,
  algorithm: 'collaborative'
});

// Advanced options
const advancedRecommendations = await getRecommendations({
  userId: 'user-123',
  limit: 5,
  algorithm: 'hybrid',
  options: {
    collaborative: { method: 'user-based', neighbors: 50 },
    contentBased: { features: ['genre', 'category'], similarity: 'cosine' },
    weights: { collaborative: 0.7, contentBased: 0.3 }
  },
  filters: {
    categories: ['electronics', 'books'],
    priceRange: { min: 10, max: 100 },
    excludeViewed: true
  }
});
```

### Analytics Service (`analyticsService.ts`)

Handles metrics collection, performance tracking, and analytics.

```typescript
import { trackRecommendationView, getAnalytics } from './services/analyticsService';

// Track user interactions
await trackRecommendationView({
  userId: 'user-123',
  itemId: 'item-456',
  algorithm: 'collaborative',
  position: 1,
  timestamp: Date.now()
});

// Get analytics data
const analytics = await getAnalytics({
  timeRange: '7d',
  metrics: ['ctr', 'precision', 'diversity'],
  groupBy: 'algorithm'
});
```

## 🧠 Recommendation Algorithms

### Collaborative Filtering (`recommendation/collaborativeFiltering.ts`)

Implements user-based and item-based collaborative filtering algorithms.

**User-Based Collaborative Filtering:**
```typescript
import { userBasedCollaborativeFiltering } from './recommendation/collaborativeFiltering';

const recommendations = await userBasedCollaborativeFiltering({
  userId: 'user-123',
  neighbors: 50,
  similarity: 'cosine',
  limit: 10
});
```

**Item-Based Collaborative Filtering:**
```typescript
import { itemBasedCollaborativeFiltering } from './recommendation/collaborativeFiltering';

const recommendations = await itemBasedCollaborativeFiltering({
  userId: 'user-123',
  itemSimilarity: 'pearson',
  neighbors: 100,
  limit: 10
});
```

**Matrix Factorization:**
```typescript
import { matrixFactorization } from './recommendation/collaborativeFiltering';

const recommendations = await matrixFactorization({
  userId: 'user-123',
  factors: 50,
  iterations: 100,
  learningRate: 0.01,
  regularization: 0.1
});
```

### Content-Based Filtering (`recommendation/contentBasedRecommender.ts`)

Recommends items based on content similarity and user preferences.

```typescript
import { contentBasedRecommendation } from './recommendation/contentBasedRecommender';

const recommendations = await contentBasedRecommendation({
  userId: 'user-123',
  features: ['genre', 'director', 'actors', 'tags'],
  similarity: 'cosine',
  tfidf: true,
  limit: 10
});
```

**Feature Engineering:**
```typescript
import { extractFeatures, computeTFIDF } from './recommendation/contentBasedRecommender';

// Extract features from content
const features = extractFeatures(items, ['title', 'description', 'category']);

// Compute TF-IDF vectors
const tfidfVectors = computeTFIDF(features);
```

### Mutual Recommendations (`recommendation/mutualRecommender.ts`)

Social-based recommendations using user connections and mutual interests.

```typescript
import { getMutualRecommendations } from './recommendation/mutualRecommender';

const recommendations = await getMutualRecommendations({
  userId: 'user-123',
  socialGraph: userConnections,
  mutualWeight: 0.8,
  popularityWeight: 0.2,
  limit: 10
});
```

### Hybrid Recommendations (`recommendation/hybridRecommender.ts`)

Combines multiple algorithms for improved accuracy and coverage.

**Weighted Hybrid:**
```typescript
import { weightedHybrid } from './recommendation/hybridRecommender';

const recommendations = await weightedHybrid({
  userId: 'user-123',
  algorithms: {
    collaborative: { weight: 0.5, options: { method: 'user-based' } },
    contentBased: { weight: 0.3, options: { features: ['genre'] } },
    popularity: { weight: 0.2, options: { timeWindow: '7d' } }
  },
  limit: 10
});
```

**Switching Hybrid:**
```typescript
import { switchingHybrid } from './recommendation/hybridRecommender';

const recommendations = await switchingHybrid({
  userId: 'user-123',
  switchingCriteria: {
    newUser: 'popularity',
    fewRatings: 'contentBased',
    default: 'collaborative'
  },
  limit: 10
});
```

### Ensemble Methods (`recommendation/ensemble.ts`)

Advanced ensemble techniques for combining multiple algorithms.

```typescript
import { votingEnsemble, stackingEnsemble } from './recommendation/ensemble';

// Voting ensemble
const votingRecommendations = await votingEnsemble({
  userId: 'user-123',
  algorithms: ['collaborative', 'contentBased', 'hybrid'],
  votingMethod: 'rank',
  limit: 10
});

// Stacking ensemble with meta-learner
const stackingRecommendations = await stackingEnsemble({
  userId: 'user-123',
  baseAlgorithms: ['collaborative', 'contentBased'],
  metaLearner: 'logisticRegression',
  features: ['userProfile', 'itemFeatures', 'context'],
  limit: 10
});
```

## 🔢 Similarity Functions (`recommendation/advancedSimilarity.ts`)

Mathematical similarity functions for computing user and item similarities.

```typescript
import { 
  cosineSimilarity, 
  pearsonCorrelation, 
  jaccardSimilarity,
  euclideanDistance 
} from './recommendation/advancedSimilarity';

// Cosine similarity
const similarity = cosineSimilarity(userVector1, userVector2);

// Pearson correlation
const correlation = pearsonCorrelation(ratings1, ratings2);

// Jaccard similarity for binary data
const jaccard = jaccardSimilarity(set1, set2);

// Euclidean distance
const distance = euclideanDistance(vector1, vector2);
```

## 📊 Data Types and Interfaces

### Core Types (`recommendation/types.ts`)

```typescript
interface User {
  id: string;
  profile: UserProfile;
  interactions: Interaction[];
  preferences: UserPreferences;
}

interface Item {
  id: string;
  features: ItemFeatures;
  metadata: ItemMetadata;
  statistics: ItemStatistics;
}

interface Recommendation {
  itemId: string;
  score: number;
  confidence: number;
  explanation: string;
  algorithm: string;
}

interface RecommendationRequest {
  userId: string;
  algorithm: AlgorithmType;
  limit: number;
  options?: AlgorithmOptions;
  filters?: RecommendationFilters;
  context?: RecommendationContext;
}
```

### Algorithm Options

```typescript
interface CollaborativeFilteringOptions {
  method: 'user-based' | 'item-based' | 'matrix-factorization';
  similarity: 'cosine' | 'pearson' | 'jaccard';
  neighbors: number;
  minCommonItems?: number;
}

interface ContentBasedOptions {
  features: string[];
  similarity: 'cosine' | 'euclidean' | 'manhattan';
  tfidf: boolean;
  featureWeights?: Record<string, number>;
}

interface HybridOptions {
  algorithms: Record<string, { weight: number; options: any }>;
  combiningMethod: 'weighted' | 'switching' | 'mixed';
  switchingCriteria?: SwitchingCriteria;
}
```

## 🎭 Mock Data (`recommendation/mockData.ts`)

Test data generation for development and testing.

```typescript
import { generateMockUsers, generateMockItems, generateMockInteractions } from './recommendation/mockData';

// Generate test data
const users = generateMockUsers(1000);
const items = generateMockItems(5000);
const interactions = generateMockInteractions(users, items, 50000);
```

## 📈 Performance Optimization

### Caching Strategy

```typescript
// In-memory caching for frequently accessed data
const cache = new Map<string, any>();

// Redis caching for production
import Redis from 'ioredis';
const redis = new Redis(process.env.REDIS_URL);
```

### Batch Processing

```typescript
// Batch recommendation generation
const batchRecommendations = await generateBatchRecommendations({
  userIds: ['user1', 'user2', 'user3'],
  algorithm: 'collaborative',
  batchSize: 100
});
```

### Lazy Loading

```typescript
// Lazy load recommendation models
const getModel = async (algorithm: string) => {
  if (!modelCache.has(algorithm)) {
    const model = await loadModel(algorithm);
    modelCache.set(algorithm, model);
  }
  return modelCache.get(algorithm);
};
```

## 🔄 Real-time Updates

### User Interaction Tracking

```typescript
import { trackInteraction } from './recommendation/tracking';

// Track user interactions in real-time
await trackInteraction({
  userId: 'user-123',
  itemId: 'item-456',
  type: 'view' | 'like' | 'purchase' | 'share',
  timestamp: Date.now(),
  context: { source: 'homepage', position: 3 }
});
```

### Model Updates

```typescript
// Incremental model updates
await updateUserProfile(userId, newInteractions);
await updateItemStatistics(itemId, newInteractions);
await retrainModel('collaborative', { incremental: true });
```

## 🧪 Testing

### Unit Tests

```typescript
import { describe, test, expect } from 'vitest';
import { cosineSimilarity } from './advancedSimilarity';

describe('Similarity Functions', () => {
  test('cosine similarity calculation', () => {
    const vector1 = [1, 2, 3];
    const vector2 = [4, 5, 6];
    const similarity = cosineSimilarity(vector1, vector2);
    expect(similarity).toBeCloseTo(0.974, 3);
  });
});
```

### Integration Tests

```typescript
import { test, expect } from 'vitest';
import { getRecommendations } from './recommendationService';

test('recommendation service integration', async () => {
  const recommendations = await getRecommendations({
    userId: 'test-user',
    algorithm: 'collaborative',
    limit: 5
  });
  
  expect(recommendations).toHaveLength(5);
  expect(recommendations[0]).toHaveProperty('itemId');
  expect(recommendations[0]).toHaveProperty('score');
});
```

## 📋 Best Practices

### Error Handling

```typescript
try {
  const recommendations = await getRecommendations(request);
  return recommendations;
} catch (error) {
  console.error('Recommendation error:', error);
  // Fallback to popular items
  return getPopularItems(request.limit);
}
```

### Input Validation

```typescript
const validateRequest = (request: RecommendationRequest) => {
  if (!request.userId) {
    throw new Error('User ID is required');
  }
  if (request.limit < 1 || request.limit > 100) {
    throw new Error('Limit must be between 1 and 100');
  }
};
```

### Performance Monitoring

```typescript
const startTime = Date.now();
const recommendations = await getRecommendations(request);
const duration = Date.now() - startTime;

console.log(`Recommendation generated in ${duration}ms`);
```

## 🔗 Related Documentation

- [Algorithm Performance Benchmarks](../docs/benchmarks.md)
- [API Reference](../docs/api.md)
- [Component Documentation](../components/README.md)
