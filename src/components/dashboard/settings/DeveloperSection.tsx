import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, FileText, Folder, ExternalLink, Download, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DeveloperSection() {
  const [apiKey, setApiKey] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [keyGenerated, setKeyGenerated] = useState(false);
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

  const generateApiKey = async () => {
    setIsGenerating(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const key = 'rec_' + Array.from(crypto.getRandomValues(new Uint8Array(32)))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
      .slice(0, 32);
    
    setApiKey(key);
    setKeyGenerated(true);
    setIsGenerating(false);
    
    toast({
      title: "API Key Generated",
      description: "Your new API key has been generated successfully.",
    });
  };

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
        description: "API for generating and managing personalized recommendations"
      },
      // ... rest of the spec would be here
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

  return (
    <div className="container p-6 mx-auto max-w-7xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Developer Resources</h1>
        <p className="text-muted-foreground">
          Access algorithm source files, documentation, and development tools for the recommendation engine.
        </p>
      </div>

      <div className="space-y-6">
        {/* API Key Generation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              API Key Management
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Generate and manage your API keys for accessing the recommendation engine
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Button 
                onClick={generateApiKey} 
                disabled={isGenerating}
                className="gap-2"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Code className="h-4 w-4" />
                    Generate New API Key
                  </>
                )}
              </Button>
              {keyGenerated && (
                <Badge variant="outline" className="gap-1">
                  <CheckCircle className="h-3 w-3" />
                  Key Ready
                </Badge>
              )}
            </div>
            
            {apiKey && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Input
                    value={apiKey}
                    readOnly
                    className="font-mono text-sm bg-gray-50"
                  />
                  <Button 
                    variant="outline" 
                    onClick={() => handleCopyPath(apiKey, "API Key")}
                    className="gap-1"
                  >
                    {copiedItem === "API Key" ? (
                      <>
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Copied
                      </>
                    ) : (
                      "Copy"
                    )}
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-amber-600">
                  <AlertCircle className="h-4 w-4" />
                  Store this key securely. It won't be shown again.
                </div>
              </div>
            )}
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

// Get personalized recommendations
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

// Get personalized recommendations
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
                      <Badge variant="outline">Active</Badge>
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Fetch personalized recommendations for a user
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleCopyPath('curl -X GET "https://api.recommendengine.com/v1/recommendations?userId=user-123&limit=5" -H "Authorization: Bearer YOUR_API_KEY"', "API Example")}
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
