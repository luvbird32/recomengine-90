import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RecommendationCard } from "./RecommendationCard";

// Mock data - replace with real data when backend is integrated
const mockRecommendations = {
  users: [
    {
      type: 'user' as const,
      title: 'Sarah Johnson',
      description: 'UX Designer | 89% interest match based on your interactions',
      image: '/placeholder.svg',
      score: 0.89,
      location: 'San Francisco, CA'
    },
    {
      type: 'user' as const,
      title: 'Mike Chen',
      description: 'Tech Enthusiast | 75% interest match based on mutual connections',
      image: '/placeholder.svg',
      score: 0.75,
      location: 'New York, NY'
    }
  ],
  content: [
    {
      type: 'content' as const,
      title: 'UI Design Trends 2024',
      description: 'Recommended based on your recent activity in design topics',
      score: 0.92
    },
    {
      type: 'content' as const,
      title: 'Machine Learning Basics',
      description: 'Popular among users with similar interests',
      score: 0.85
    }
  ],
  locations: [
    {
      type: 'location' as const,
      title: 'Tech Meetup Group',
      description: 'Active community near you with 500+ members',
      score: 0.88,
      location: 'Downtown Tech Hub'
    }
  ]
};

export function RecommendationSection() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Recommended for You</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">People You Might Know</h3>
            <div className="grid gap-4">
              {mockRecommendations.users.map((rec, index) => (
                <RecommendationCard key={`user-${index}`} {...rec} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Content You Might Like</h3>
            <div className="grid gap-4">
              {mockRecommendations.content.map((rec, index) => (
                <RecommendationCard key={`content-${index}`} {...rec} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Near You</h3>
            <div className="grid gap-4">
              {mockRecommendations.locations.map((rec, index) => (
                <RecommendationCard key={`location-${index}`} {...rec} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}