import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Book, Terminal, Key } from "lucide-react";
import { ApiKeyGenerator } from "./ApiKeyGenerator";

export function DeveloperTools() {
  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Developer Tools</h2>
        <p className="text-gray-600">Everything you need to integrate our recommendation engine</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            Get Your API Key
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ApiKeyGenerator />
        </CardContent>
      </Card>

      <Tabs defaultValue="sdk" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="sdk" className="flex items-center gap-2">
            <Code className="h-4 w-4" /> SDK
          </TabsTrigger>
          <TabsTrigger value="api" className="flex items-center gap-2">
            <Terminal className="h-4 w-4" /> API Reference
          </TabsTrigger>
          <TabsTrigger value="guides" className="flex items-center gap-2">
            <Book className="h-4 w-4" /> Integration Guides
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sdk">
          <Card>
            <CardHeader>
              <CardTitle>Quick Start with our SDK</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-900 text-gray-100 p-4 rounded-md">
                  <pre className="text-sm">
                    <code>{`npm install @recommend-engine/sdk

import { RecommendEngine } from '@recommend-engine/sdk';

const engine = new RecommendEngine({
  apiKey: 'your-api-key'
});

// Get personalized recommendations
const recommendations = await engine.getRecommendations({
  userId: 'user-123',
  limit: 5
});`}</code>
                  </pre>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Real-time Updates</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Our SDK automatically handles real-time updates and caching for optimal performance.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Type Safety</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Full TypeScript support with comprehensive type definitions for all SDK methods.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>REST API Reference</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">GET /recommendations</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Fetch personalized recommendations for a user
                  </p>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-md">
                    <pre className="text-sm">
                      <code>{`curl -X GET "https://api.recommendengine.com/v1/recommendations" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"userId": "user-123", "limit": 5}'`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guides">
          <Card>
            <CardHeader>
              <CardTitle>Integration Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Getting Started</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Complete guide to setting up and integrating our recommendation engine.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Best Practices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Learn how to optimize recommendation performance and user engagement.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}