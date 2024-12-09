import { RecommendationSection } from "@/components/recommendations/RecommendationSection";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Discover Your Network
      </h1>
      <RecommendationSection />
    </div>
  );
};

export default Index;