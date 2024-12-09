import { RecommendationSection } from "@/components/recommendations/RecommendationSection";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Intelligent Recommendation Engine
        </h1>
        <p className="text-lg text-gray-600">
          Build powerful, personalized recommendation systems for your applications
        </p>
      </div>
      <RecommendationSection />
    </div>
  );
};

export default Index;