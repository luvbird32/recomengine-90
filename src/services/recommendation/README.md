
# Recommendation Algorithms Documentation

This directory contains the core recommendation algorithms and related utilities for the recommendation engine.

## 📁 Algorithm Files

### Core Algorithms

1. **`collaborativeFiltering.ts`** - User and item-based collaborative filtering
2. **`contentBasedRecommender.ts`** - Content-based recommendation algorithms
3. **`mutualRecommender.ts`** - Social and mutual interest recommendations
4. **`hybridRecommender.ts`** - Hybrid recommendation approaches
5. **`ensemble.ts`** - Ensemble methods and meta-algorithms
6. **`advancedSimilarity.ts`** - Mathematical similarity functions

### Support Files

- **`types.ts`** - TypeScript interfaces and type definitions
- **`mockData.ts`** - Test data generation utilities
- **`tracking.ts`** - User interaction tracking
- **`userRecommender.ts`** - User-specific recommendation logic

## 🤝 Collaborative Filtering

### User-Based Collaborative Filtering

Finds users with similar preferences and recommends items they liked.

```typescript
import { userBasedCollaborativeFiltering } from './collaborativeFiltering';

const recommendations = await userBasedCollaborativeFiltering({
  userId: 'user-123',
  neighbors: 50,              // Number of similar users to consider
  similarity: 'cosine',       // Similarity metric
  minCommonItems: 5,          // Minimum overlap for similarity calculation
  limit: 10
});
```

**Algorithm Steps:**
1. Calculate user-user similarities
2. Find k most similar users (neighbors)
3. Aggregate their ratings for unseen items
4. Rank by predicted rating

### Item-Based Collaborative Filtering

Recommends items similar to those the user has interacted with.

```typescript
import { itemBasedCollaborativeFiltering } from './collaborativeFiltering';

const recommendations = await itemBasedCollaborativeFiltering({
  userId: 'user-123',
  neighbors: 100,             // Number of similar items to consider
  similarity: 'pearson',      // Similarity metric
  userHistory: true,          // Consider user's interaction history
  limit: 10
});
```

**Algorithm Steps:**
1. Calculate item-item similarities
2. For each item in user's history, find similar items
3. Aggregate similarity scores
4. Rank unseen items by aggregated scores

### Matrix Factorization

Uses latent factor models to decompose the user-item interaction matrix.

```typescript
import { matrixFactorization } from './collaborativeFiltering';

const recommendations = await matrixFactorization({
  userId: 'user-123',
  factors: 50,                // Number of latent factors
  iterations: 100,            // Training iterations
  learningRate: 0.01,         // Learning rate for SGD
  regularization: 0.1,        // L2 regularization parameter
  limit: 10
});
```

**Supported Methods:**
- **SVD (Singular Value Decomposition)**
- **NMF (Non-negative Matrix Factorization)**
- **PMF (Probabilistic Matrix Factorization)**

## 📄 Content-Based Filtering

Recommends items based on content similarity and user preferences.

```typescript
import { contentBasedRecommendation } from './contentBasedRecommender';

const recommendations = await contentBasedRecommendation({
  userId: 'user-123',
  features: ['genre', 'director', 'actors', 'description'],
  similarity: 'cosine',
  tfidf: true,                // Use TF-IDF for text features
  featureWeights: {           // Custom feature importance
    genre: 0.4,
    director: 0.3,
    actors: 0.2,
    description: 0.1
  },
  limit: 10
});
```

### Feature Extraction

```typescript
import { extractFeatures, computeTFIDF } from './contentBasedRecommender';

// Extract features from item content
const features = extractFeatures(items, {
  textFields: ['title', 'description'],
  categoricalFields: ['genre', 'category'],
  numericalFields: ['price', 'rating']
});

// Compute TF-IDF for text features
const tfidfVectors = computeTFIDF(textFeatures, {
  maxFeatures: 5000,
  minDf: 2,
  maxDf: 0.95,
  stopWords: 'english'
});
```

### User Profile Building

```typescript
import { buildUserProfile } from './contentBasedRecommender';

const userProfile = buildUserProfile({
  userId: 'user-123',
  interactions: userInteractions,
  weightingStrategy: 'recency',  // 'uniform', 'rating', 'recency'
  decayFactor: 0.95              // For recency weighting
});
```

## 👥 Mutual Recommendations

Social-based recommendations using user connections and mutual interests.

```typescript
import { getMutualRecommendations } from './mutualRecommender';

const recommendations = await getMutualRecommendations({
  userId: 'user-123',
  socialGraph: {
    friends: ['user-456', 'user-789'],
    followers: ['user-101', 'user-202'],
    following: ['user-303', 'user-404']
  },
  mutualWeight: 0.7,          // Weight for mutual friends' preferences
  popularityWeight: 0.2,      // Weight for general popularity
  socialWeight: 0.1,          // Weight for social signals
  limit: 10
});
```

### Social Graph Analysis

```typescript
import { analyzeSocialGraph, findMutualConnections } from './mutualRecommender';

// Find mutual connections
const mutualFriends = findMutualConnections(userId1, userId2, socialGraph);

// Analyze social influence
const influence = analyzeSocialGraph({
  userId: 'user-123',
  socialGraph,
  influenceMetrics: ['betweenness', 'closeness', 'pagerank']
});
```

## 🔄 Hybrid Recommendations

Combines multiple algorithms for improved accuracy and coverage.

### Weighted Hybrid

```typescript
import { weightedHybrid } from './hybridRecommender';

const recommendations = await weightedHybrid({
  userId: 'user-123',
  algorithms: {
    collaborative: { 
      weight: 0.5, 
      options: { method: 'user-based', neighbors: 50 } 
    },
    contentBased: { 
      weight: 0.3, 
      options: { features: ['genre', 'director'] } 
    },
    popularity: { 
      weight: 0.2, 
      options: { timeWindow: '7d' } 
    }
  },
  normalization: 'min-max',     // Score normalization method
  limit: 10
});
```

### Switching Hybrid

Dynamically switches between algorithms based on user or item characteristics.

```typescript
import { switchingHybrid } from './hybridRecommender';

const recommendations = await switchingHybrid({
  userId: 'user-123',
  switchingCriteria: {
    newUser: 'popularity',          // For users with < 5 interactions
    fewRatings: 'contentBased',     // For users with 5-20 interactions
    coldItem: 'contentBased',       // For items with < 10 interactions
    default: 'collaborative'        // For regular cases
  },
  thresholds: {
    newUserInteractions: 5,
    fewRatingsThreshold: 20,
    coldItemThreshold: 10
  },
  limit: 10
});
```

### Mixed Hybrid

Presents recommendations from multiple algorithms simultaneously.

```typescript
import { mixedHybrid } from './hybridRecommender';

const recommendations = await mixedHybrid({
  userId: 'user-123',
  algorithms: ['collaborative', 'contentBased', 'trending'],
  distribution: [0.6, 0.3, 0.1],   // Proportion from each algorithm
  interleaving: 'round-robin',      // How to mix recommendations
  limit: 10
});
```

## 🎭 Ensemble Methods

Advanced ensemble techniques for combining multiple algorithms.

### Voting Ensemble

```typescript
import { votingEnsemble } from './ensemble';

const recommendations = await votingEnsemble({
  userId: 'user-123',
  algorithms: [
    'collaborative',
    'contentBased',
    'hybrid',
    'deepLearning'
  ],
  votingMethod: 'rank',           // 'score', 'rank', 'borda'
  weights: [0.3, 0.25, 0.25, 0.2], // Algorithm weights
  consensusThreshold: 0.6,        // Minimum agreement for inclusion
  limit: 10
});
```

### Stacking Ensemble

Uses a meta-learner to combine base algorithm predictions.

```typescript
import { stackingEnsemble } from './ensemble';

const recommendations = await stackingEnsemble({
  userId: 'user-123',
  baseAlgorithms: [
    'collaborative',
    'contentBased',
    'factorization'
  ],
  metaLearner: 'logisticRegression', // 'randomForest', 'neuralNetwork'
  features: [
    'userProfile',
    'itemFeatures',
    'contextual',
    'temporal'
  ],
  crossValidation: 5,             // For meta-learner training
  limit: 10
});
```

### Bagging Ensemble

Creates multiple variations of algorithms and aggregates their predictions.

```typescript
import { baggingEnsemble } from './ensemble';

const recommendations = await baggingEnsemble({
  userId: 'user-123',
  baseAlgorithm: 'collaborative',
  numEstimators: 10,              // Number of variations
  samplingRatio: 0.8,             // Data sampling ratio
  featureSampling: 0.9,           // Feature sampling ratio
  aggregationMethod: 'average',   // 'median', 'weighted'
  limit: 10
});
```

## 📐 Similarity Functions

Mathematical functions for computing similarities between users, items, or vectors.

```typescript
import {
  cosineSimilarity,
  pearsonCorrelation,
  jaccardSimilarity,
  euclideanDistance,
  manhattanDistance,
  hammingDistance
} from './advancedSimilarity';

// Cosine similarity (0 to 1, higher = more similar)
const cosine = cosineSimilarity(vector1, vector2);

// Pearson correlation (-1 to 1, higher = more similar)
const pearson = pearsonCorrelation(ratings1, ratings2);

// Jaccard similarity for binary/categorical data
const jaccard = jaccardSimilarity(set1, set2);

// Distance metrics (lower = more similar)
const euclidean = euclideanDistance(vector1, vector2);
const manhattan = manhattanDistance(vector1, vector2);
const hamming = hammingDistance(binary1, binary2);
```

### Custom Similarity Functions

```typescript
import { customSimilarity } from './advancedSimilarity';

// Define custom similarity function
const customSim = customSimilarity({
  numericalFields: ['rating', 'price'],
  categoricalFields: ['genre', 'category'],
  textFields: ['description'],
  weights: {
    numerical: 0.4,
    categorical: 0.4,
    text: 0.2
  },
  metrics: {
    numerical: 'cosine',
    categorical: 'jaccard',
    text: 'tfidf-cosine'
  }
});
```

## 🎯 Algorithm Selection Guide

### Choose Based on Data Characteristics

| Data Type | Recommended Algorithm | Use Cases |
|-----------|----------------------|-----------|
| Rich user interactions | Collaborative Filtering | E-commerce, Streaming |
| Rich item content | Content-Based | News, Documents |
| Social connections | Mutual Recommendations | Social Networks |
| Mixed data types | Hybrid Approaches | General purpose |
| Large-scale | Matrix Factorization | High-volume systems |

### Choose Based on Business Goals

| Goal | Recommended Approach | Considerations |
|------|---------------------|----------------|
| Accuracy | Ensemble Methods | Higher complexity |
| Diversity | Mixed Hybrid | Avoid filter bubbles |
| Novelty | Content-Based + Popularity | Exploration vs. exploitation |
| Serendipity | Random injection + CF | Unexpected discoveries |
| Coverage | Hybrid approaches | Handle cold start |

### Performance Considerations

| Algorithm | Time Complexity | Space Complexity | Scalability |
|-----------|----------------|------------------|-------------|
| User-based CF | O(n²m) | O(n²) | Poor |
| Item-based CF | O(m²n) | O(m²) | Better |
| Matrix Factorization | O(knm) | O(k(n+m)) | Excellent |
| Content-Based | O(md) | O(md) | Good |
| Hybrid | Varies | Varies | Depends |

Where:
- n = number of users
- m = number of items  
- k = number of factors
- d = feature dimensions

## 🔧 Configuration Examples

### Production Configuration

```typescript
const productionConfig = {
  collaborative: {
    method: 'item-based',
    neighbors: 100,
    similarity: 'cosine',
    minCommonItems: 3,
    cache: true,
    cacheExpiry: 3600 // 1 hour
  },
  contentBased: {
    features: ['category', 'brand', 'description'],
    similarity: 'cosine',
    tfidf: true,
    maxFeatures: 10000,
    preprocessing: ['lowercase', 'removeStopwords']
  },
  hybrid: {
    algorithms: {
      collaborative: 0.6,
      contentBased: 0.3,
      popularity: 0.1
    },
    fallbackStrategy: 'popularity'
  }
};
```

### Development/Testing Configuration

```typescript
const developmentConfig = {
  collaborative: {
    method: 'user-based',
    neighbors: 20,
    similarity: 'pearson',
    minCommonItems: 2
  },
  contentBased: {
    features: ['category', 'title'],
    similarity: 'cosine',
    maxFeatures: 1000
  },
  debug: true,
  mockData: true,
  verbose: true
};
```

## 📊 Performance Monitoring

### Metrics to Track

```typescript
interface AlgorithmMetrics {
  // Accuracy metrics
  precision: number;      // Relevant items / Recommended items
  recall: number;         // Relevant items / All relevant items
  f1Score: number;        // Harmonic mean of precision and recall
  ndcg: number;          // Normalized Discounted Cumulative Gain
  
  // Diversity metrics
  intraListDiversity: number;  // Diversity within recommendations
  coverage: number;            // Catalog coverage
  novelty: number;             // Average item popularity
  
  // Business metrics
  clickThroughRate: number;    // CTR
  conversionRate: number;      // Purchase/engagement rate
  userSatisfaction: number;    // User ratings/feedback
  
  // Performance metrics
  responseTime: number;        // Algorithm execution time
  throughput: number;          // Recommendations per second
  memoryUsage: number;         // Memory consumption
}
```

### A/B Testing Framework

```typescript
import { runABTest } from './testing';

const abTestResults = await runABTest({
  testName: 'collaborative-vs-hybrid',
  algorithms: {
    control: 'collaborative',
    treatment: 'hybrid'
  },
  trafficSplit: 0.5,
  duration: '7d',
  metrics: ['ctr', 'precision', 'diversity'],
  significanceLevel: 0.05
});
```

## 🔗 Related Files

- [`../recommendationService.ts`](../recommendationService.ts) - Main service API
- [`../analyticsService.ts`](../analyticsService.ts) - Analytics and metrics
- [`../../components/dashboard/sections/AlgorithmExplanationSection.tsx`](../../components/dashboard/sections/AlgorithmExplanationSection.tsx) - UI documentation
- [`./types.ts`](./types.ts) - TypeScript definitions
- [`./mockData.ts`](./mockData.ts) - Test data utilities
