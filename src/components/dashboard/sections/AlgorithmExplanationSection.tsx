
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Brain, Shuffle, GitBranch, Zap, Target } from "lucide-react";

export function AlgorithmExplanationSection() {
  const algorithmCategories = [
    {
      id: "user-behavior",
      name: "User Behavior Based",
      icon: <Users className="h-5 w-5" />,
      description: "Algorithms that analyze user interactions and preferences to find patterns",
      color: "bg-blue-50 border-blue-200",
      algorithms: [
        {
          name: "User-based Collaborative Filtering",
          explanation: "Finds users with similar preferences and recommends items they liked",
          useCase: "Great for discovering new content based on community preferences",
          example: "Users who liked items A, B, C also liked item D",
          code: `// Find similar users and recommend their preferences
const recommendations = getUserBasedRecommendations('user-123', 5);
// Returns: [{ id: 'item-1', score: 0.85, reason: 'Similar to John' }]`
        },
        {
          name: "Matrix Factorization",
          explanation: "Uses mathematical decomposition to find hidden patterns in user-item interactions",
          useCase: "Handles sparse data well, great for large datasets",
          example: "Discovers latent factors like genre preferences, price sensitivity",
          code: `// Advanced pattern discovery in user behavior
const recommendations = getMatrixFactorizationRecommendations('user-123', 5);
// Returns: [{ id: 'item-1', score: 0.91, reason: 'Latent factor analysis' }]`
        }
      ]
    },
    {
      id: "content-analysis",
      name: "Content Analysis Based",
      icon: <Brain className="h-5 w-5" />,
      description: "Algorithms that analyze item features, metadata, and characteristics",
      color: "bg-green-50 border-green-200",
      algorithms: [
        {
          name: "Item-based Collaborative Filtering",
          explanation: "Recommends items similar to ones the user has interacted with",
          useCase: "Perfect for 'more like this' recommendations",
          example: "People who viewed this product also viewed...",
          code: `// Find items similar to user's previous interactions
const similar = getItemBasedRecommendations('content-456', 5);
// Returns: [{ id: 'item-2', score: 0.88, reason: 'Similar content type' }]`
        },
        {
          name: "Feature-based Content Filtering",
          explanation: "Compares item attributes like tags, categories, metadata",
          useCase: "Works well when you have rich item descriptions",
          example: "Recommends articles with similar topics, complexity, and style",
          code: `// Analyze content features for similarity
const similar = getContentBasedRecommendations('article-123', 5);
// Returns: [{ id: 'article-456', similarity: 0.92, features: ['javascript'] }]`
        }
      ]
    },
    {
      id: "social-connections",
      name: "Social & Connection Based",
      icon: <GitBranch className="h-5 w-5" />,
      description: "Algorithms that leverage social connections and shared interests",
      color: "bg-purple-50 border-purple-200",
      algorithms: [
        {
          name: "Mutual Interest Matching",
          explanation: "Finds users with overlapping interests and shared connections",
          useCase: "Social networking, professional connections, community building",
          example: "Connect with people who share 3+ interests and have 2+ mutual connections",
          code: `// Find users with shared interests and connections
const mutuals = getMutualRecommendations('user-123', 5);
// Returns: [{ userId: 'user-456', mutualScore: 0.78, sharedInterests: ['react'] }]`
        }
      ]
    },
    {
      id: "mathematical-metrics",
      name: "Mathematical Similarity",
      icon: <Target className="h-5 w-5" />,
      description: "Precise mathematical functions for calculating similarity between entities",
      color: "bg-orange-50 border-orange-200",
      algorithms: [
        {
          name: "Cosine Similarity",
          explanation: "Measures angle between vectors, excellent for text and sparse data",
          useCase: "Document similarity, user preference vectors",
          example: "Compare user rating vectors or document term frequencies",
          code: `// Calculate cosine similarity between vectors
const similarity = calculateCosineSimilarity(userVector1, userVector2);
// Returns: 0.85 (high similarity)`
        },
        {
          name: "Jaccard Similarity",
          explanation: "Measures overlap between sets, perfect for categorical data",
          useCase: "Tag similarity, interest overlap, binary preferences",
          example: "Compare sets of user interests or content categories",
          code: `// Calculate overlap between two sets
const overlap = calculateJaccardSimilarity(interests1, interests2);
// Returns: 0.72 (good overlap)`
        },
        {
          name: "Pearson Correlation",
          explanation: "Measures linear correlation between rating patterns",
          useCase: "User rating similarity, finding users with similar taste patterns",
          example: "Users who rate items similarly (accounting for individual scales)",
          code: `// Find correlation in rating patterns
const correlation = calculatePearsonCorrelation(ratings1, ratings2);
// Returns: 0.78 (strong positive correlation)`
        }
      ]
    },
    {
      id: "hybrid-advanced",
      name: "Hybrid & Advanced",
      icon: <Shuffle className="h-5 w-5" />,
      description: "Advanced techniques that combine multiple approaches for optimal results",
      color: "bg-indigo-50 border-indigo-200",
      algorithms: [
        {
          name: "Weighted Hybrid",
          explanation: "Combines scores from multiple algorithms with different weights",
          useCase: "Balances strengths of different approaches",
          example: "70% collaborative + 20% content-based + 10% popularity",
          code: `// Combine multiple algorithms with weights
const hybrid = getWeightedHybridRecommendations('user-123', 'content-456', 10);
// Returns: [{ id: 'item-1', score: 0.89, algorithms: ['User-CF', 'Content'] }]`
        },
        {
          name: "Switching Hybrid",
          explanation: "Chooses the best algorithm based on context (new users, popular content)",
          useCase: "Handles cold start problems and different user scenarios",
          example: "Use popularity for new users, collaborative for active users",
          code: `// Intelligently switch between algorithms
const adaptive = getSwitchingHybridRecommendations('user-123', context);
// Automatically selects best algorithm for situation`
        }
      ]
    },
    {
      id: "ensemble-ml",
      name: "Ensemble & Machine Learning",
      icon: <Zap className="h-5 w-5" />,
      description: "Advanced machine learning techniques for maximum accuracy and robustness",
      color: "bg-yellow-50 border-yellow-200",
      algorithms: [
        {
          name: "Voting Ensemble",
          explanation: "Multiple algorithms vote on recommendations, consensus determines ranking",
          useCase: "High-confidence recommendations when multiple algorithms agree",
          example: "Item recommended by 4/5 algorithms gets higher final score",
          code: `// Combine votes from multiple algorithms
const ensemble = getVotingEnsembleRecommendations('user-123', 10);
// Returns: [{ id: 'item-1', score: 0.91, confidence: 0.88, votes: 4 }]`
        },
        {
          name: "Stacking Ensemble",
          explanation: "Uses a meta-learner to intelligently combine algorithm outputs",
          useCase: "Learns optimal combination patterns from historical performance",
          example: "Meta-model learns when to trust collaborative vs content-based more",
          code: `// Advanced meta-learning approach
const stacked = getStackingEnsembleRecommendations('user-123', 10);
// Returns: [{ id: 'item-1', score: 0.93, confidence: 0.91, metalearned: true }]`
        },
        {
          name: "Bootstrap Aggregating (Bagging)",
          explanation: "Trains multiple variants and averages results for robustness",
          useCase: "Reduces overfitting and improves robustness",
          example: "Multiple models trained on different data samples, results averaged",
          code: `// Bootstrap multiple models for stability
const bagged = getBaggingEnsembleRecommendations('user-123', 10);
// Returns: [{ id: 'item-1', score: 0.87, variance: 0.12, models: 5 }]`
        }
      ]
    }
  ];

  return (
    <div className="container p-6 mx-auto max-w-7xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Recommendation Algorithm Categories</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our recommendation engine organizes algorithms into clear categories based on their approach and use cases. 
          Each category serves different scenarios and can be combined for optimal results.
        </p>
      </div>

      <Tabs defaultValue="user-behavior" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
          {algorithmCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-1 text-xs">
              {category.icon}
              <span className="hidden sm:inline">{category.name.split(' ')[0]}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {algorithmCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <Card className={category.color}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category.icon}
                  {category.name}
                </CardTitle>
                <p className="text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <h3 className="text-lg font-semibold">Available Algorithms</h3>
                  {category.algorithms.map((algorithm, index) => (
                    <Card key={index} className="p-4 bg-white border">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="font-medium">{algorithm.name}</Badge>
                        </div>
                        <p className="text-sm font-medium">{algorithm.explanation}</p>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <div><strong>Best Use Case:</strong> {algorithm.useCase}</div>
                          <div><strong>Example:</strong> {algorithm.example}</div>
                        </div>
                        <div className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto">
                          <pre className="text-xs">
                            <code>{algorithm.code}</code>
                          </pre>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Algorithm Selection Guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">When to Use Each Category</h4>
              <div className="space-y-2 text-sm">
                <div><strong>User Behavior:</strong> When you have rich user interaction data</div>
                <div><strong>Content Analysis:</strong> When items have detailed metadata/features</div>
                <div><strong>Social Connections:</strong> For social platforms and community features</div>
                <div><strong>Mathematical Similarity:</strong> For precise, customizable matching</div>
                <div><strong>Hybrid & Advanced:</strong> For balanced, production-ready systems</div>
                <div><strong>Ensemble & ML:</strong> For maximum accuracy in high-stakes applications</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Progressive Implementation</h4>
              <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                <li>Start with mathematical similarity for quick setup</li>
                <li>Add user behavior analysis as data grows</li>
                <li>Implement content analysis for rich metadata</li>
                <li>Combine with hybrid approaches for balance</li>
                <li>Scale to ensemble methods for optimization</li>
                <li>Add social features for community building</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
