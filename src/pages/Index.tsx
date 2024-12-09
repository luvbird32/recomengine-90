import { RecommendationSection } from "@/components/recommendations/RecommendationSection";
import { DeveloperTools } from "@/components/developer/DeveloperTools";
import { RecommendationFeed } from "@/components/recommendations/RecommendationFeed";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with animation */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Intelligent Recommendation Engine
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Build powerful, personalized recommendation systems for your applications
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
        </div>
      </div>

      {/* Main content with smooth transitions */}
      <div className="space-y-24 pb-16">
        <section className="animate-fade-in [--animate-delay:200ms]">
          <RecommendationFeed />
        </section>

        <section className="animate-fade-in [--animate-delay:400ms]">
          <RecommendationSection />
        </section>

        <section className="animate-fade-in [--animate-delay:600ms]">
          <DeveloperTools />
        </section>
      </div>
    </div>
  );
};

export default Index;