
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2, Book } from "lucide-react";
import { ApiKeyGenerator } from "@/components/developer/ApiKeyGenerator";
import { OpenApiDocs } from "@/components/developer/OpenApiDocs";

export function DeveloperSection() {
  return (
    <div className="container p-6 mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Developer Tools</h1>
          <p className="text-muted-foreground">APIs, documentation, and development resources</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <a href="https://github.com/luvbird32/recomengine-90.git" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View on GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/luvbird32/recomengine-90.git/blob/main/README.md" target="_blank" rel="noopener noreferrer">
              <Book className="h-4 w-4 mr-2" />
              Documentation
            </a>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              Repository Access
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Access the complete source code, contribute to the project, or fork it for your own use.
            </p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://github.com/luvbird32/recomengine-90.git" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Source Code
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://github.com/luvbird32/recomengine-90.git/issues" target="_blank" rel="noopener noreferrer">
                  <Code2 className="h-4 w-4 mr-2" />
                  Report Issues
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://github.com/luvbird32/recomengine-90.git/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                  <Book className="h-4 w-4 mr-2" />
                  Contributing Guide
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ApiKeyGenerator />
        <OpenApiDocs />
      </div>
    </div>
  );
}
