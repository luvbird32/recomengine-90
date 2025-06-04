
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Github, 
  Code, 
  Users, 
  Brain, 
  Shuffle, 
  GitBranch, 
  Zap,
  BookOpen,
  Star
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function OverviewSection() {
  const { toast } = useToast();

  const handleDownloadSource = () => {
    toast({
      title: "Source Code",
      description: "Visit our GitHub repository to download the complete source code.",
    });
  };

  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Collaborative Filtering",
      description: "User-based and item-based recommendations using community preferences",
      algorithms: ["User-based CF", "Item-based CF", "Matrix Factorization"]
    },
    {
      icon: <Brain className="h-8 w-8 text-green-500" />,
      title: "Content-Based Filtering", 
      description: "Feature-based recommendations using item characteristics and metadata",
      algorithms: ["Feature Similarity", "Advanced Metrics", "Text Analysis"]
    },
    {
      icon: <GitBranch className="h-8 w-8 text-purple-500" />,
      title: "Mutual Recommendations",
      description: "Connect users based on shared interests and mutual connections",
      algorithms: ["Interest Matching", "Social Connections", "Community Building"]
    },
    {
      icon: <Shuffle className="h-8 w-8 text-orange-500" />,
      title: "Hybrid Approaches",
      description: "Combine multiple algorithms for balanced, high-quality recommendations",
      algorithms: ["Weighted Hybrid", "Switching Hybrid", "Mixed Hybrid"]
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Ensemble Methods",
      description: "Advanced machine learning techniques for optimal performance",
      algorithms: ["Voting Ensemble", "Stacking", "Bootstrap Aggregating"]
    },
    {
      icon: <Code className="h-8 w-8 text-red-500" />,
      title: "Similarity Metrics",
      description: "Mathematical functions for precise similarity calculations",
      algorithms: ["Cosine", "Jaccard", "Pearson", "Euclidean", "Manhattan"]
    }
  ];

  const stats = [
    { label: "Recommendation Algorithms", value: "15+", icon: <Brain className="h-5 w-5" /> },
    { label: "Similarity Metrics", value: "5", icon: <Code className="h-5 w-5" /> },
    { label: "Integration Methods", value: "3", icon: <GitBranch className="h-5 w-5" /> },
    { label: "Open Source", value: "MIT", icon: <Github className="h-5 w-5" /> }
  ];

  return (
    <div className="container p-6 mx-auto max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Open Source Recommendation Engine</h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          A powerful, flexible recommendation system that integrates into any application. 
          No SDK required - just REST API calls to get intelligent recommendations.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button onClick={handleDownloadSource} className="gap-2">
            <Github className="h-4 w-4" />
            View on GitHub
          </Button>
          <Button variant="outline" className="gap-2">
            <BookOpen className="h-4 w-4" />
            Documentation
          </Button>
          <Button variant="outline" onClick={handleDownloadSource} className="gap-2">
            <Download className="h-4 w-4" />
            Download Source
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="flex items-center gap-3 p-4">
              {stat.icon}
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Recommendation Algorithms</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {feature.icon}
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {feature.algorithms.map((algo, algoIndex) => (
                    <Badge key={algoIndex} variant="secondary" className="text-xs">
                      {algo}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Integration Examples */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Quick Integration Example
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
            <pre className="text-sm">
              <code>{`// Simple REST API integration - no SDK needed
fetch('https://your-domain.com/api/recommendations', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-api-key'
  },
  body: JSON.stringify({
    userId: 'user-123',
    algorithm: 'hybrid',
    limit: 10
  })
})
.then(response => response.json())
.then(recommendations => {
  // Use recommendations in your application
  console.log(recommendations);
});`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Why Choose This Engine */}
      <Card>
        <CardHeader>
          <CardTitle>Why Choose Our Recommendation Engine?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 text-yellow-500 mt-1" />
                <div>
                  <h4 className="font-semibold">No Vendor Lock-in</h4>
                  <p className="text-sm text-muted-foreground">
                    Open source MIT license - use, modify, and distribute freely
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code className="h-5 w-5 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold">SDK-Free Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Simple REST API calls - integrate with any programming language
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Brain className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Multiple Algorithms</h4>
                  <p className="text-sm text-muted-foreground">
                    15+ recommendation algorithms from basic to advanced ML techniques
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shuffle className="h-5 w-5 text-purple-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Flexible Architecture</h4>
                  <p className="text-sm text-muted-foreground">
                    Use individual algorithms or combine them with hybrid approaches
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-orange-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Production Ready</h4>
                  <p className="text-sm text-muted-foreground">
                    Handles cold start, scalability, and real-world edge cases
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Well Documented</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive docs, examples, and integration guides
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
