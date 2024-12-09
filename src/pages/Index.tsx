import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Brain, LineChart, Key, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Smart Social Recommendations
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover relevant content and connect with like-minded people through our
            advanced recommendation engine.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Smart User Recommendations</CardTitle>
              <CardDescription>
                Connect with users based on mutual interests and behavior patterns
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Trending Content</CardTitle>
              <CardDescription>
                Discover what's popular and trending in your network
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Brain className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Behavioral Analysis</CardTitle>
              <CardDescription>
                Get insights based on user interactions and preferences
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <LineChart className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>
                Comprehensive metrics and performance analytics
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Key className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Developer Tools</CardTitle>
              <CardDescription>
                API access and integration capabilities
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <BookOpen className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Documentation</CardTitle>
              <CardDescription>
                Detailed guides and API documentation
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;