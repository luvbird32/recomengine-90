
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, FileText, Folder, ExternalLink, Download, CheckCircle, Github, GitFork, Star, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DeveloperSection() {
  const [copiedItem, setCopiedItem] = useState<string>("");
  const { toast } = useToast();

  const algorithmFiles = [
    {
      name: "collaborativeFiltering.ts",
      description: "User-based, Item-based, Matrix Factorization algorithms",
      path: "src/services/recommendation/collaborativeFiltering.ts",
      status: "active"
    },
    {
      name: "contentBasedRecommender.ts", 
      description: "Content similarity and feature-based algorithms",
      path: "src/services/recommendation/contentBasedRecommender.ts",
      status: "active"
    },
    {
      name: "mutualRecommender.ts",
      description: "Social connection and mutual interest algorithms", 
      path: "src/services/recommendation/mutualRecommender.ts",
      status: "active"
    },
    {
      name: "hybridRecommender.ts",
      description: "Hybrid approaches (weighted, switching, mixed)",
      path: "src/services/recommendation/hybridRecommender.ts",
      status: "beta"
    },
    {
      name: "ensemble.ts",
      description: "Ensemble methods (voting, stacking, bagging)",
      path: "src/services/recommendation/ensemble.ts",
      status: "experimental"
    },
    {
      name: "advancedSimilarity.ts",
      description: "Mathematical similarity functions (Cosine, Jaccard, Pearson)",
      path: "src/services/recommendation/advancedSimilarity.ts",
      status: "active"
    }
  ];

  const contributionAreas = [
    {
      title: "Algorithm Development",
      description: "Implement new recommendation algorithms or improve existing ones",
      difficulty: "Advanced",
      files: ["src/services/recommendation/"]
    },
    {
      title: "UI/UX Improvements", 
      description: "Enhance the dashboard interface and user experience",
      difficulty: "Intermediate",
      files: ["src/components/dashboard/", "src/pages/"]
    },
    {
      title: "Documentation",
      description: "Improve code documentation, README, and API guides",
      difficulty: "Beginner",
      files: ["README.md", "docs/"]
    },
    {
      title: "Testing",
      description: "Add unit tests, integration tests, and performance benchmarks",
      difficulty: "Intermediate", 
      files: ["src/**/*.test.ts", "tests/"]
    },
    {
      title: "Performance Optimization",
      description: "Optimize algorithm performance and reduce memory usage",
      difficulty: "Advanced",
      files: ["src/services/recommendation/"]
    }
  ];

  const handleCopyPath = async (path: string, itemName?: string) => {
    try {
      await navigator.clipboard.writeText(path);
      setCopiedItem(itemName || path);
      
      setTimeout(() => setCopiedItem(""), 2000);
      
      toast({
        title: "Copied to clipboard",
        description: `Path copied: ${path}`,
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Failed to copy to clipboard. Please try again.",
        variant: "destructive"
      });
    }
  };

  const downloadOpenApiSpec = () => {
    const openApiSpec = {
      openapi: "3.0.0",
      info: {
        title: "Recommendation Engine API",
        version: "1.0.0",
        description: "Open source recommendation engine - no authentication required"
      },
      paths: {
        "/recommendations": {
          get: {
            summary: "Get recommendations",
            description: "Retrieve personalized recommendations for a user",
            parameters: [
              {
                name: "userId",
                in: "query",
                required: true,
                schema: { type: "string" }
              },
              {
                name: "limit",
                in: "query",
                schema: { type: "integer", default: 10 }
              }
            ],
            responses: {
              "200": {
                description: "Successful response",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        recommendations: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              id: { type: "string" },
                              title: { type: "string" },
                              score: { type: "number" },
                              type: { type: "string" }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    
    const dataStr = JSON.stringify(openApiSpec, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'recommendation-engine-api.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download started",
      description: "OpenAPI specification downloaded successfully.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 border-green-200";
      case "beta": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "experimental": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="container p-6 mx-auto max-w-7xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Developer Resources</h1>
        <p className="text-muted-foreground">
          Access algorithm source files, documentation, and development tools for the open-source recommendation engine.
        </p>
      </div>

      <div className="space-y-6">
        {/* GitHub Open Source Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              Open Source Community
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Join our open source community and contribute to the recommendation engine
            </p>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="getting-started" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="contribute">How to Contribute</TabsTrigger>
                <TabsTrigger value="areas">Contribution Areas</TabsTrigger>
                <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
              </TabsList>
              
              <TabsContent value="getting-started" className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-md">
                    <div className="flex items-center gap-3">
                      <Github className="h-6 w-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">Repository</h3>
                        <p className="text-sm text-muted-foreground">github.com/your-org/recommendation-engine</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        1.2k
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        245
                      </Badge>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on GitHub
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Quick Setup</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleCopyPath(`# Clone the repository
git clone https://github.com/your-org/recommendation-engine.git
cd recommendation-engine

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test`, "Setup Commands")}
                      >
                        {copiedItem === "Setup Commands" ? (
                          <>
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            Copied
                          </>
                        ) : (
                          "Copy"
                        )}
                      </Button>
                    </div>
                    <pre className="text-sm overflow-x-auto">
                      <code>{`# Clone the repository
git clone https://github.com/your-org/recommendation-engine.git
cd recommendation-engine

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test`}</code>
                    </pre>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="contribute" className="space-y-4">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <GitFork className="h-4 w-4" />
                      1. Fork & Clone
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Fork the repository and clone it to your local machine
                    </p>
                    <div className="bg-gray-100 p-2 rounded text-sm font-mono">
                      git clone https://github.com/your-username/recommendation-engine.git
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      2. Create Branch
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Create a feature branch for your changes
                    </p>
                    <div className="bg-gray-100 p-2 rounded text-sm font-mono">
                      git checkout -b feature/your-feature-name
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      3. Submit PR
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Push your changes and create a pull request with a clear description
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="areas" className="space-y-4">
                <div className="grid gap-4">
                  {contributionAreas.map((area, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold">{area.title}</h3>
                        <Badge variant="outline" className={`text-xs ${getDifficultyColor(area.difficulty)}`}>
                          {area.difficulty}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{area.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {area.files.map((file, fileIndex) => (
                          <Badge key={fileIndex} variant="secondary" className="text-xs font-mono">
                            {file}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="guidelines" className="space-y-4">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Code Standards
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Follow TypeScript best practices</li>
                      <li>• Maintain 80%+ test coverage</li>
                      <li>• Use meaningful variable and function names</li>
                      <li>• Add JSDoc comments for public APIs</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Pull Request Guidelines</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Clear, descriptive titles and descriptions</li>
                      <li>• Reference related issues</li>
                      <li>• Include tests for new features</li>
                      <li>• Ensure all CI checks pass</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Community Guidelines</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Be respectful and inclusive</li>
                      <li>• Help newcomers get started</li>
                      <li>• Use GitHub Discussions for questions</li>
                      <li>• Follow our Code of Conduct</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Algorithm Files */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Algorithm Source Files
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Core algorithm implementations are located in the recommendation service directory
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
                <Folder className="h-4 w-4 text-blue-600" />
                <code className="text-sm font-mono">src/services/recommendation/</code>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleCopyPath("src/services/recommendation/", "Base Path")}
                >
                  {copiedItem === "Base Path" ? (
                    <>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Copied
                    </>
                  ) : (
                    "Copy"
                  )}
                </Button>
              </div>
              
              <div className="grid gap-3">
                {algorithmFiles.map((file) => (
                  <div key={file.name} className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <div>
                        <div className="font-mono text-sm font-medium">{file.name}</div>
                        <div className="text-xs text-muted-foreground">{file.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={`text-xs ${getStatusColor(file.status)}`}>
                        {file.status}
                      </Badge>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleCopyPath(file.path, file.name)}
                      >
                        {copiedItem === file.name ? (
                          <>
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            Copied
                          </>
                        ) : (
                          "Copy Path"
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Documentation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              Interactive Documentation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="examples" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="examples">Code Examples</TabsTrigger>
                <TabsTrigger value="api">API Reference</TabsTrigger>
                <TabsTrigger value="download">Download</TabsTrigger>
              </TabsList>
              
              <TabsContent value="examples" className="space-y-4">
                <div className="bg-gray-900 text-gray-100 p-4 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Quick Start Example</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleCopyPath(`// Import recommendation service
import { getRecommendations } from './services/recommendationService';

// Get personalized recommendations (no API key required)
const recommendations = await getRecommendations({
  userId: 'user-123',
  limit: 5,
  algorithm: 'collaborative'
});

console.log(recommendations);`, "Quick Start")}
                    >
                      {copiedItem === "Quick Start" ? (
                        <>
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Copied
                        </>
                      ) : (
                        "Copy"
                      )}
                    </Button>
                  </div>
                  <pre className="text-sm overflow-x-auto">
                    <code>{`// Import recommendation service
import { getRecommendations } from './services/recommendationService';

// Get personalized recommendations (no API key required)
const recommendations = await getRecommendations({
  userId: 'user-123',
  limit: 5,
  algorithm: 'collaborative'
});

console.log(recommendations);`}</code>
                  </pre>
                </div>
              </TabsContent>
              
              <TabsContent value="api" className="space-y-4">
                <div className="grid gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      GET /api/recommendations
                      <Badge variant="outline">Open Access</Badge>
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Fetch personalized recommendations for a user (no authentication required)
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleCopyPath('curl -X GET "https://api.recommendengine.com/v1/recommendations?userId=user-123&limit=5" -H "Content-Type: application/json"', "API Example")}
                    >
                      {copiedItem === "API Example" ? "Copied!" : "Copy cURL"}
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="download" className="space-y-4">
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Download comprehensive API documentation and specifications
                  </p>
                  <Button onClick={downloadOpenApiSpec} className="gap-2">
                    <Download className="h-4 w-4" />
                    Download OpenAPI Spec
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
