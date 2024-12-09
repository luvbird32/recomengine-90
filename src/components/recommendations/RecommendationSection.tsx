import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RecommendationCard } from "./RecommendationCard";

// Demo data showcasing different types of recommendations
const mockRecommendations = {
  products: [
    {
      type: 'content' as const,
      title: 'Product Recommendations',
      description: 'Suggest relevant products based on user browsing history and purchase patterns',
      score: 0.92
    },
    {
      type: 'content' as const,
      title: 'Content Personalization',
      description: 'Deliver personalized content based on user preferences and behavior',
      score: 0.85
    }
  ],
  features: [
    {
      type: 'user' as const,
      title: 'Real-time Processing',
      description: 'Process user interactions in real-time for immediate recommendations',
      image: '/placeholder.svg',
      score: 0.89,
      location: 'Core Feature'
    },
    {
      type: 'user' as const,
      title: 'Machine Learning Models',
      description: 'Advanced ML models that improve with more user data',
      image: '/placeholder.svg',
      score: 0.75,
      location: 'ML Pipeline'
    }
  ],
  integrations: [
    {
      type: 'location' as const,
      title: 'Easy API Integration',
      description: 'Simple REST API endpoints for seamless integration',
      score: 0.88,
      location: 'Developer Tools'
    }
  ]
};

export function RecommendationSection() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Our Recommendation Engine Features</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Recommendation Types</h3>
            <div className="grid gap-4">
              {mockRecommendations.products.map((rec, index) => (
                <RecommendationCard key={`product-${index}`} {...rec} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Core Features</h3>
            <div className="grid gap-4">
              {mockRecommendations.features.map((rec, index) => (
                <RecommendationCard key={`feature-${index}`} {...rec} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Integration Options</h3>
            <div className="grid gap-4">
              {mockRecommendations.integrations.map((rec, index) => (
                <RecommendationCard key={`integration-${index}`} {...rec} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}