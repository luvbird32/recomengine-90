
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, FileText, Folder, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DeveloperSection() {
  const algorithmFiles = [
    {
      name: "collaborativeFiltering.ts",
      description: "User-based, Item-based, Matrix Factorization algorithms",
      path: "src/services/recommendation/collaborativeFiltering.ts"
    },
    {
      name: "contentBasedRecommender.ts", 
      description: "Content similarity and feature-based algorithms",
      path: "src/services/recommendation/contentBasedRecommender.ts"
    },
    {
      name: "mutualRecommender.ts",
      description: "Social connection and mutual interest algorithms", 
      path: "src/services/recommendation/mutualRecommender.ts"
    },
    {
      name: "hybridRecommender.ts",
      description: "Hybrid approaches (weighted, switching, mixed)",
      path: "src/services/recommendation/hybridRecommender.ts"
    },
    {
      name: "ensemble.ts",
      description: "Ensemble methods (voting, stacking, bagging)",
      path: "src/services/recommendation/ensemble.ts"
    },
    {
      name: "advancedSimilarity.ts",
      description: "Mathematical similarity functions (Cosine, Jaccard, Pearson)",
      path: "src/services/recommendation/advancedSimilarity.ts"
    }
  ];

  const handleCopyPath = (path: string) => {
    navigator.clipboard.writeText(path);
    console.log(`Copied path: ${path}`);
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
                  onClick={() => handleCopyPath("src/services/recommendation/")}
                >
                  Copy
                </Button>
              </div>
              
              <div className="grid gap-3">
                {algorithmFiles.map((file) => (
                  <div key={file.name} className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <div>
                        <div className="font-mono text-sm font-medium">{file.name}</div>
                        <div className="text-xs text-muted-foreground">{file.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {file.name.split('.')[0]}
                      </Badge>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleCopyPath(file.path)}
                      >
                        Copy Path
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              Entry Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <div className="font-mono text-sm font-medium">recommendationService.ts</div>
                  <div className="text-xs text-muted-foreground">Main service export - imports all algorithms</div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleCopyPath("src/services/recommendationService.ts")}
                >
                  Copy Path
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <div className="font-mono text-sm font-medium">algorithmData.ts</div>
                  <div className="text-xs text-muted-foreground">Algorithm documentation and examples</div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleCopyPath("src/components/dashboard/sections/algorithm/algorithmData.ts")}
                >
                  Copy Path
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Import Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-md">
              <pre className="text-sm">
                <code>{`// Import all algorithms
import * as Recommenders from './services/recommendationService';

// Import specific algorithms
import { collaborativeFiltering } from './services/recommendation/collaborativeFiltering';
import { contentBasedRecommender } from './services/recommendation/contentBasedRecommender';
import { mutualRecommender } from './services/recommendation/mutualRecommender';

// Import similarity functions
import { 
  calculateCosineSimilarity, 
  calculateJaccardSimilarity 
} from './services/recommendation/advancedSimilarity';`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
