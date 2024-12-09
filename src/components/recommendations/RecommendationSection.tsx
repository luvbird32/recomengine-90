import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RecommendationCard } from "./RecommendationCard";

// Demo data showcasing different types of recommendations for a SaaS recommendation engine
const mockRecommendations = {
  features: [
    {
      type: 'content' as const,
      title: 'Real-time Recommendations',
      description: 'Process and deliver personalized recommendations in real-time based on user behavior',
      score: 0.95
    },
    {
      type: 'content' as const,
      title: 'Multi-channel Support',
      description: 'Deploy recommendations across web, mobile, and email channels seamlessly',
      score: 0.88
    }
  ],
  integrations: [
    {
      type: 'content' as const,
      title: 'REST API Integration',
      description: 'Easy-to-use REST APIs for seamless integration with your existing systems',
      score: 0.92,
      location: 'API Documentation'
    },
    {
      type: 'content' as const,
      title: 'Webhook Support',
      description: 'Real-time data synchronization through configurable webhooks',
      score: 0.85,
      location: 'Integration Guide'
    }
  ],
  analytics: [
    {
      type: 'content' as const,
      title: 'Advanced Analytics Dashboard',
      description: 'Comprehensive analytics to track recommendation performance and user engagement',
      score: 0.90,
      location: 'Analytics Suite'
    },
    {
      type: 'content' as const,
      title: 'A/B Testing',
      description: 'Built-in A/B testing capabilities to optimize recommendation strategies',
      score: 0.87,
      location: 'Testing Tools'
    }
  ]
};

export function RecommendationSection() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Recommendation Engine Features</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
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
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Analytics & Testing</h3>
            <div className="grid gap-4">
              {mockRecommendations.analytics.map((rec, index) => (
                <RecommendationCard key={`analytics-${index}`} {...rec} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}