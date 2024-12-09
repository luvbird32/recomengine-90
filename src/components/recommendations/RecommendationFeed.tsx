import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getRecommendedUsers, getRecommendedContent } from '@/services/recommendationService';
import { trackEvent } from '@/services/analyticsService';
import { UserPlus, Heart, Eye } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

export function RecommendationFeed() {
  const recommendedUsers = getRecommendedUsers();
  const recommendedContent = getRecommendedContent();
  const { toast } = useToast();
  const [viewStartTime, setViewStartTime] = useState<Date | null>(null);

  useEffect(() => {
    // Track feed view
    setViewStartTime(new Date());
    trackEvent({
      userId: 'current-user',
      eventType: 'view',
      targetId: 'feed',
      targetType: 'content',
      metadata: {
        location: {
          latitude: 37.7749, // Mock location for demo
          longitude: -122.4194,
          city: 'San Francisco',
          country: 'USA'
        }
      }
    });

    // Track time spent when component unmounts
    return () => {
      if (viewStartTime) {
        const duration = new Date().getTime() - viewStartTime.getTime();
        trackEvent({
          userId: 'current-user',
          eventType: 'timeSpent',
          targetId: 'feed',
          targetType: 'content',
          metadata: {
            duration: duration / 1000 // Convert to seconds
          }
        });
      }
    };
  }, []);

  const handleFollow = (userId: string) => {
    trackEvent({
      userId: 'current-user',
      eventType: 'follow',
      targetId: userId,
      targetType: 'user'
    });
    
    toast({
      title: "Followed User",
      description: "You are now following this user.",
    });
  };

  const handleLike = (contentId: string) => {
    trackEvent({
      userId: 'current-user',
      eventType: 'like',
      targetId: contentId,
      targetType: 'content'
    });
    
    toast({
      title: "Content Liked",
      description: "Thanks for your feedback!",
    });
  };

  const handleContentView = (contentId: string) => {
    trackEvent({
      userId: 'current-user',
      eventType: 'view',
      targetId: contentId,
      targetType: 'content',
      metadata: {
        location: {
          latitude: 37.7749,
          longitude: -122.4194,
          city: 'San Francisco',
          country: 'USA'
        }
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Recommended Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendedUsers.map(user => (
            <Card key={user.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-12 w-12">
                  <img src={user.avatar} alt={user.name} className="object-cover" />
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{user.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{user.bio}</p>
                </div>
                <Button 
                  size="sm" 
                  onClick={() => handleFollow(user.id)}
                  className="ml-auto"
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Follow
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{user.followers} followers</span>
                  <span>{user.following} following</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Recommended Content</h2>
        <div className="grid grid-cols-1 gap-4">
          {recommendedContent.map(content => (
            <Card key={content.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">{content.title}</CardTitle>
                  <span className="text-sm text-muted-foreground capitalize">{content.type}</span>
                </div>
                <p className="text-sm text-muted-foreground">By {content.creator}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm">
                      <Eye className="h-4 w-4" /> {content.views}
                    </span>
                    <span className="flex items-center gap-1 text-sm">
                      <Heart className="h-4 w-4" /> {content.likes}
                    </span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleLike(content.id)}
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Like
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
} // Added the missing closing curly brace here