
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BookOpen, Code2, Zap, Users, Github, Download, Play, Settings, Database, BarChart3, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Everything you need to build powerful recommendation systems
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link to="/dashboard">
                <Play className="mr-2 h-5 w-5" />
                Try Live Demo
              </Link>
            </Button>
            <Button variant="outline">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Quick Start */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="backdrop-blur-md bg-white/30 border border-white/30">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-6 w-6 text-yellow-500" />
                Quick Start
              </CardTitle>
              <CardDescription>Get up and running in minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Install</h3>
                  <p className="text-sm text-muted-foreground">Clone the repository and install dependencies</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">2. Configure</h3>
                  <p className="text-sm text-muted-foreground">Set up your algorithms and data sources</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">3. Deploy</h3>
                  <p className="text-sm text-muted-foreground">Start generating recommendations</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Documentation Tabs */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="api" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="api">API Reference</TabsTrigger>
              <TabsTrigger value="algorithms">Algorithms</TabsTrigger>
              <TabsTrigger value="deployment">Deployment</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>

            <TabsContent value="api" className="space-y-6">
              <Card className="backdrop-blur-md bg-white/30 border border-white/30">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code2 className="mr-2 h-6 w-6" />
                    API Reference
                  </CardTitle>
                  <CardDescription>Complete API documentation for all endpoints</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Core Endpoints</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                          <span className="font-mono text-sm">GET /recommendations</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">GET</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                          <span className="font-mono text-sm">POST /track</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">POST</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                          <span className="font-mono text-sm">GET /analytics</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">GET</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Authentication</h4>
                      <div className="p-4 bg-white/50 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-2">No API keys required! All endpoints are open for local deployment.</p>
                        <code className="text-xs bg-gray-100 p-2 rounded block">
                          curl -X GET "http://localhost:3000/api/recommendations?userId=123"
                        </code>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="algorithms" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="backdrop-blur-md bg-white/30 border border-white/30">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-6 w-6 text-blue-600" />
                      Collaborative Filtering
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• User-based collaborative filtering</li>
                      <li>• Item-based collaborative filtering</li>
                      <li>• Matrix factorization (SVD, NMF)</li>
                      <li>• Neighborhood methods</li>
                    </ul>
                    <Button size="sm" variant="outline" className="mt-4">
                      View Code <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-md bg-white/30 border border-white/30">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="mr-2 h-6 w-6 text-green-600" />
                      Content-Based
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Feature similarity matching</li>
                      <li>• TF-IDF vectorization</li>
                      <li>• Cosine similarity</li>
                      <li>• Content analysis</li>
                    </ul>
                    <Button size="sm" variant="outline" className="mt-4">
                      View Code <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-md bg-white/30 border border-white/30">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="mr-2 h-6 w-6 text-purple-600" />
                      Hybrid Methods
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Weighted combination</li>
                      <li>• Switching hybrid</li>
                      <li>• Mixed recommendations</li>
                      <li>• Ensemble methods</li>
                    </ul>
                    <Button size="sm" variant="outline" className="mt-4">
                      View Code <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-md bg-white/30 border border-white/30">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="mr-2 h-6 w-6 text-orange-600" />
                      Advanced Techniques
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Deep learning integration</li>
                      <li>• Real-time learning</li>
                      <li>• Context-aware recommendations</li>
                      <li>• Multi-armed bandits</li>
                    </ul>
                    <Button size="sm" variant="outline" className="mt-4">
                      View Code <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="deployment" className="space-y-6">
              <Card className="backdrop-blur-md bg-white/30 border border-white/30">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="mr-2 h-6 w-6" />
                    Deployment Options
                  </CardTitle>
                  <CardDescription>Multiple ways to deploy your recommendation engine</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 border rounded-lg bg-white/50">
                      <h4 className="font-semibold mb-2">Docker</h4>
                      <p className="text-sm text-muted-foreground mb-4">Containerized deployment for any environment</p>
                      <code className="text-xs bg-gray-100 p-2 rounded block mb-2">
                        docker build -t rec-engine .
                      </code>
                      <code className="text-xs bg-gray-100 p-2 rounded block">
                        docker run -p 3000:3000 rec-engine
                      </code>
                    </div>
                    <div className="p-4 border rounded-lg bg-white/50">
                      <h4 className="font-semibold mb-2">Cloud</h4>
                      <p className="text-sm text-muted-foreground mb-4">Deploy to Vercel, Netlify, or AWS</p>
                      <code className="text-xs bg-gray-100 p-2 rounded block mb-2">
                        vercel --prod
                      </code>
                      <code className="text-xs bg-gray-100 p-2 rounded block">
                        netlify deploy --prod
                      </code>
                    </div>
                    <div className="p-4 border rounded-lg bg-white/50">
                      <h4 className="font-semibold mb-2">Self-Hosted</h4>
                      <p className="text-sm text-muted-foreground mb-4">Run on your own infrastructure</p>
                      <code className="text-xs bg-gray-100 p-2 rounded block mb-2">
                        npm run build
                      </code>
                      <code className="text-xs bg-gray-100 p-2 rounded block">
                        npm run preview
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="examples" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="backdrop-blur-md bg-white/30 border border-white/30">
                  <CardHeader>
                    <CardTitle>E-commerce Example</CardTitle>
                    <CardDescription>Product recommendations for online stores</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-white/50 rounded">
                        <code className="text-sm">
                          getRecommendations(&#123;<br/>
                          &nbsp;&nbsp;userId: 'customer-123',<br/>
                          &nbsp;&nbsp;algorithm: 'hybrid',<br/>
                          &nbsp;&nbsp;context: 'product-page'<br/>
                          &#125;)
                        </code>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        <Link to="/dashboard" className="flex items-center">
                          View Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-md bg-white/30 border border-white/30">
                  <CardHeader>
                    <CardTitle>Streaming Platform</CardTitle>
                    <CardDescription>Content recommendations for media platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-white/50 rounded">
                        <code className="text-sm">
                          getRecommendations(&#123;<br/>
                          &nbsp;&nbsp;userId: 'viewer-456',<br/>
                          &nbsp;&nbsp;algorithm: 'collaborative',<br/>
                          &nbsp;&nbsp;filters: &#123; genre: 'drama' &#125;<br/>
                          &#125;)
                        </code>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        <Link to="/dashboard" className="flex items-center">
                          View Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Community Section */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <Card className="backdrop-blur-md bg-white/30 border border-white/30">
            <CardHeader>
              <CardTitle>Join Our Community</CardTitle>
              <CardDescription>Get help, share ideas, and contribute to the project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub Discussions
                </Button>
                <Button variant="outline">
                  <Users className="mr-2 h-5 w-5" />
                  Discord Community
                </Button>
                <Button variant="outline">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Contributing Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
