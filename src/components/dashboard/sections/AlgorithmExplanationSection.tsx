
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Brain, Shuffle, GitBranch, Zap } from "lucide-react";

export function AlgorithmExplanationSection() {
  const algorithms = [
    {
      id: "collaborative",
      name: "Collaborative Filtering",
      icon: <Users className="h-5 w-5" />,
      description: "Recommends items based on similar users' preferences",
      methods: [
        {
          name: "User-based CF",
          explanation: "Finds users with similar preferences and recommends items they liked",
          useCase: "Great for discovering new content based on community preferences",
          example: "Users who liked items A, B, C also liked item D"
        },
        {
          name: "Item-based CF", 
          explanation: "Recommends items similar to ones the user has interacted with",
          useCase: "Perfect for 'more like this' recommendations",
          example: "People who viewed this product also viewed..."
        },
        {
          name: "Matrix Factorization",
          explanation: "Uses mathematical decomposition to find hidden patterns in user-item interactions",
          useCase: "Handles sparse data well, great for large datasets",
          example: "Discovers latent factors like genre preferences, price sensitivity"
        }
      ],
      code: `import { getUserBasedRecommendations } from './collaborativeFiltering';

// Get recommendations based on similar users
const recommendations = getUserBasedRecommendations('user-123', 5);
// Returns: [{ id: 'item-1', score: 0.85, reason: 'Similar to John (technology, programming)' }]`
    },
    {
      id: "content-based",
      name: "Content-Based Filtering",
      icon: <Brain className="h-5 w-5" />,
      description: "Analyzes item features to find similar content",
      methods: [
        {
          name: "Feature Similarity",
          explanation: "Compares item attributes like tags, categories, metadata",
          useCase: "Works well when you have rich item descriptions",
          example: "Recommends articles with similar topics, complexity, and style"
        },
        {
          name: "Advanced Similarity Metrics",
          explanation: "Uses cosine, Jaccard, Pearson correlation for precise matching",
          useCase: "Fine-tuned recommendations based on multiple similarity measures",
          example: "Combines text similarity, categorical matches, and numerical proximity"
        }
      ],
      code: `import { getContentBasedRecommendations } from './contentBasedRecommender';

// Get items similar to current content
const similar = getContentBasedRecommendations('article-123', 5);
// Returns: [{ id: 'article-456', similarity: 0.92, features: ['javascript', 'tutorial'] }]`
    },
    {
      id: "mutual",
      name: "Mutual-Based Recommendations", 
      icon: <GitBranch className="h-5 w-5" />,
      description: "Connects users based on shared interests and mutual connections",
      methods: [
        {
          name: "Interest Matching",
          explanation: "Finds users with overlapping interests and shared connections",
          useCase: "Social networking, professional connections, community building",
          example: "Connect with people who share 3+ interests and have 2+ mutual connections"
        }
      ],
      code: `import { getMutualRecommendations } from './mutualRecommender';

// Find users with shared interests
const mutuals = getMutualRecommendations('user-123', 5);
// Returns: [{ userId: 'user-456', mutualScore: 0.78, sharedInterests: ['react', 'nodejs'] }]`
    },
    {
      id: "hybrid",
      name: "Hybrid Approaches",
      icon: <Shuffle className="h-5 w-5" />,
      description: "Combines multiple algorithms for better recommendations",
      methods: [
        {
          name: "Weighted Hybrid",
          explanation: "Combines scores from multiple algorithms with different weights",
          useCase: "Balances strengths of different approaches",
          example: "70% collaborative + 20% content-based + 10% popularity"
        },
        {
          name: "Switching Hybrid",
          explanation: "Chooses the best algorithm based on context (new users, popular content, etc.)",
          useCase: "Handles cold start problems and different user scenarios",
          example: "Use popularity for new users, collaborative for active users"
        },
        {
          name: "Mixed Hybrid",
          explanation: "Presents results from multiple algorithms in different sections",
          useCase: "Diverse recommendation sections like 'Trending', 'Similar Users', 'For You'",
          example: "Homepage with multiple recommendation carousels"
        }
      ],
      code: `import { getWeightedHybridRecommendations } from './hybridRecommender';

// Combine multiple algorithms
const hybrid = getWeightedHybridRecommendations('user-123', 'content-456', 10);
// Returns: [{ id: 'item-1', score: 0.89, algorithms: ['User-based CF', 'Content-based'], confidence: 0.92 }]`
    },
    {
      id: "ensemble",
      name: "Ensemble Methods",
      icon: <Zap className="h-5 w-5" />,
      description: "Advanced techniques that combine multiple models for optimal performance",
      methods: [
        {
          name: "Voting Ensemble",
          explanation: "Multiple algorithms vote on recommendations, consensus determines final ranking",
          useCase: "High-confidence recommendations when multiple algorithms agree",
          example: "Item recommended by 4/5 algorithms gets higher final score"
        },
        {
          name: "Stacking Ensemble",
          explanation: "Uses a meta-learner to intelligently combine algorithm outputs",
          useCase: "Learns optimal combination patterns from historical performance",
          example: "Meta-model learns when to trust collaborative vs content-based more"
        },
        {
          name: "Bagging Ensemble",
          explanation: "Bootstrap aggregating - trains multiple variants and averages results",
          useCase: "Reduces overfitting and improves robustness",
          example: "Multiple models trained on different data samples, results averaged"
        }
      ],
      code: `import { getEnsembleRecommendations } from './ensemble';

// Advanced ensemble with confidence scoring
const ensemble = getEnsembleRecommendations('user-123', 'content-456', 10);
// Returns: [{ id: 'item-1', score: 0.91, confidence: 0.88, diversity: 0.75, algorithms: ['User-CF', 'Content', 'Matrix'] }]`
    },
    {
      id: "similarity",
      name: "Advanced Similarity Metrics",
      icon: <Code className="h-5 w-5" />,
      description: "Mathematical functions for precise similarity calculation",
      methods: [
        {
          name: "Cosine Similarity",
          explanation: "Measures angle between vectors, great for text and sparse data",
          useCase: "Document similarity, user preference vectors",
          example: "Compare user rating vectors or document term frequencies"
        },
        {
          name: "Jaccard Similarity", 
          explanation: "Measures overlap between sets, perfect for categorical data",
          useCase: "Tag similarity, interest overlap, binary preferences",
          example: "Compare sets of user interests or content categories"
        },
        {
          name: "Pearson Correlation",
          explanation: "Measures linear correlation between rating patterns", 
          useCase: "User rating similarity, finding users with similar taste patterns",
          example: "Users who rate items similarly (accounting for individual rating scales)"
        }
      ],
      code: `import { calculateAllSimilarities } from './advancedSimilarity';

// Calculate multiple similarity metrics
const metrics = calculateAllSimilarities(userVector1, userVector2, interests1, interests2);
// Returns: { cosine: 0.85, jaccard: 0.72, pearson: 0.78, euclidean: 0.81, manhattan: 0.79 }`
    }
  ];

  return (
    <div className="container p-6 mx-auto max-w-7xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Recommendation Algorithms</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our open source recommendation engine provides multiple algorithms that you can integrate into any application. 
          Each algorithm serves different use cases and can be combined for optimal results.
        </p>
      </div>

      <Tabs defaultValue="collaborative" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
          {algorithms.map((algo) => (
            <TabsTrigger key={algo.id} value={algo.id} className="flex items-center gap-1 text-xs">
              {algo.icon}
              <span className="hidden sm:inline">{algo.name.split(' ')[0]}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {algorithms.map((algo) => (
          <TabsContent key={algo.id} value={algo.id}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {algo.icon}
                  {algo.name}
                </CardTitle>
                <p className="text-muted-foreground">{algo.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <h3 className="text-lg font-semibold">Available Methods</h3>
                  {algo.methods.map((method, index) => (
                    <Card key={index} className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{method.name}</Badge>
                        </div>
                        <p className="text-sm">{method.explanation}</p>
                        <div className="text-xs text-muted-foreground">
                          <strong>Use Case:</strong> {method.useCase}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <strong>Example:</strong> {method.example}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Code Example</h3>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
                    <pre className="text-sm">
                      <code>{algo.code}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Integration Guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Quick Start</h4>
              <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                <li>Choose the algorithm(s) that fit your use case</li>
                <li>Install the recommendation engine in your project</li>
                <li>Configure with your data structure</li>
                <li>Make API calls to get recommendations</li>
                <li>Track user interactions for improved accuracy</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Best Practices</h4>
              <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                <li>Start with hybrid approaches for best results</li>
                <li>Use ensemble methods for high-stakes applications</li>
                <li>Track recommendation performance and user feedback</li>
                <li>Consider cold start strategies for new users/items</li>
                <li>Balance accuracy with diversity and serendipity</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
