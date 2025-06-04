
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BookOpen, Code2, Users, Github, Download, BarChart3, Brain, Cpu, TrendingUp } from "lucide-react";
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
            Complete guide to our open source recommendation engine dashboard
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link to="/dashboard">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Dashboard
              </Link>
            </Button>
            <Button variant="outline">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>
        </div>

        {/* What This Project Does */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="backdrop-blur-md bg-white/30 border border-white/30">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="mr-2 h-6 w-6 text-purple-500" />
                What This Project Provides
              </CardTitle>
              <CardDescription>A comprehensive recommendation engine dashboard with multiple algorithms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Interactive Dashboard</h3>
                  <p className="text-sm text-muted-foreground">Monitor recommendation performance with real-time analytics</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Multiple Algorithms</h3>
                  <p className="text-sm text-muted-foreground">Collaborative, content-based, and hybrid recommendation systems</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Industry Templates</h3>
                  <p className="text-sm text-muted-foreground">Pre-configured setups for e-commerce, streaming, and more</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Documentation Tabs */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="algorithms">Algorithms</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card className="backdrop-blur-md bg-white/30 border border-white/30">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-6 w-6" />
                    Project Overview
                  </CardTitle>
                  <CardDescription>Understanding the recommendation engine dashboard</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Key Features</h4>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                          <BarChart3 className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div>
                            <span className="font-medium">Analytics Dashboard</span>
                            <p className="text-sm text-muted-foreground">Real-time metrics and performance tracking</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                          <Users className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <span className="font-medium">User Management</span>
                            <p className="text-sm text-muted-foreground">Comprehensive user analytics and segmentation</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                          <Brain className="h-5 w-5 text-purple-600 mt-0.5" />
                          <div>
                            <span className="font-medium">Algorithm Showcase</span>
                            <p className="text-sm text-muted-foreground">Visual demonstration of recommendation algorithms</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Technology Stack</h4>
                      <div className="p-4 bg-white/50 rounded-lg">
                        <ul className="space-y-2 text-sm">
                          <li><strong>Frontend:</strong> React, TypeScript, Vite</li>
                          <li><strong>UI:</strong> Tailwind CSS, shadcn/ui</li>
                          <li><strong>Charts:</strong> Recharts</li>
                          <li><strong>State:</strong> TanStack Query</li>
                          <li><strong>Icons:</strong> Lucide React</li>
                        </ul>
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
                      <li>• Matrix factorization techniques</li>
                      <li>• Similarity calculations</li>
                    </ul>
                    <div className="mt-4 p-3 bg-white/50 rounded text-xs">
                      <code>collaborativeFiltering.ts</code> - Implementation available in services
                    </div>
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
                    <div className="mt-4 p-3 bg-white/50 rounded text-xs">
                      <code>contentBasedRecommender.ts</code> - Implementation available
                    </div>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-md bg-white/30 border border-white/30">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="mr-2 h-6 w-6 text-purple-600" />
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
                    <div className="mt-4 p-3 bg-white/50 rounded text-xs">
                      <code>hybridRecommender.ts</code> - Implementation available
                    </div>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-md bg-white/30 border border-white/30">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="mr-2 h-6 w-6 text-orange-600" />
                      Advanced Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Mutual recommendations</li>
                      <li>• User behavior tracking</li>
                      <li>• Advanced similarity metrics</li>
                      <li>• Performance analytics</li>
                    </ul>
                    <div className="mt-4 p-3 bg-white/50 rounded text-xs">
                      <code>ensemble.ts</code> - Advanced implementations
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="dashboard" className="space-y-6">
              <Card className="backdrop-blur-md bg-white/30 border border-white/30">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2 h-6 w-6" />
                    Dashboard Features
                  </CardTitle>
                  <CardDescription>Explore the comprehensive analytics and management interface</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Analytics & Monitoring</h4>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg bg-white/50">
                          <h5 className="font-medium mb-1">Real-time Metrics</h5>
                          <p className="text-sm text-muted-foreground">Track user engagement, click-through rates, and recommendation performance</p>
                        </div>
                        <div className="p-3 border rounded-lg bg-white/50">
                          <h5 className="font-medium mb-1">User Analytics</h5>
                          <p className="text-sm text-muted-foreground">Comprehensive user behavior analysis and segmentation</p>
                        </div>
                        <div className="p-3 border rounded-lg bg-white/50">
                          <h5 className="font-medium mb-1">Algorithm Performance</h5>
                          <p className="text-sm text-muted-foreground">Compare accuracy and effectiveness of different algorithms</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Management Tools</h4>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg bg-white/50">
                          <h5 className="font-medium mb-1">Industry Templates</h5>
                          <p className="text-sm text-muted-foreground">Pre-configured setups for e-commerce, streaming, news, and social platforms</p>
                        </div>
                        <div className="p-3 border rounded-lg bg-white/50">
                          <h5 className="font-medium mb-1">User Management</h5>
                          <p className="text-sm text-muted-foreground">Manage user profiles, preferences, and recommendation history</p>
                        </div>
                        <div className="p-3 border rounded-lg bg-white/50">
                          <h5 className="font-medium mb-1">Algorithm Showcase</h5>
                          <p className="text-sm text-muted-foreground">Interactive demonstrations of how different algorithms work</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <Button asChild>
                      <Link to="/dashboard" className="flex items-center">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Explore Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Contributing Section */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <Card className="backdrop-blur-md bg-white/30 border border-white/30">
            <CardHeader>
              <CardTitle>Contributing</CardTitle>
              <CardDescription>Help improve this open source recommendation engine</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub Repository
                </Button>
                <Button variant="outline">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Contributing Guide
                </Button>
                <Button variant="outline">
                  <Code2 className="mr-2 h-5 w-5" />
                  Report Issues
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
