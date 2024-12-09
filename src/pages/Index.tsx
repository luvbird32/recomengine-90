import { RecommendationSection } from "@/components/recommendations/RecommendationSection";
import { RecommendationFeed } from "@/components/recommendations/RecommendationFeed";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with enhanced design */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Intelligent Recommendations for Modern Applications
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Build Smarter Recommendations
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Deploy powerful, personalized recommendation systems that grow with your business
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View Documentation
            </Button>
          </div>
          
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl bg-purple-50">
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Real-time Processing</h3>
              <p className="text-muted-foreground">Instant recommendations based on user behavior</p>
            </div>
            <div className="p-6 rounded-xl bg-blue-50">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">User-Centric</h3>
              <p className="text-muted-foreground">Personalized suggestions for each user</p>
            </div>
            <div className="p-6 rounded-xl bg-indigo-50">
              <Sparkles className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">AI-Powered</h3>
              <p className="text-muted-foreground">Advanced algorithms for better accuracy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content with smooth transitions */}
      <div className="space-y-24 pb-16 bg-gray-50">
        <section className="container mx-auto px-4 py-16 animate-fade-in [--animate-delay:200ms]">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Personalized Recommendations</h2>
            <p className="text-muted-foreground">
              Discover how our recommendation engine adapts to your users' preferences
            </p>
          </div>
          <RecommendationFeed />
        </section>

        <section className="container mx-auto px-4 py-16 animate-fade-in [--animate-delay:400ms]">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground">
              Everything you need to build a world-class recommendation system
            </p>
          </div>
          <RecommendationSection />
        </section>
      </div>
    </div>
  );
};

export default Index;