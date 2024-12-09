import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getRecommendedContent } from '@/services/recommendationService';
import { trackEvent } from '@/services/analyticsService';
import { BookOpen, Code, Sparkles, ArrowRight } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

export function RecommendationFeed() {
  const recommendedContent = getRecommendedContent();
  const { toast } = useToast();
  const [viewStartTime, setViewStartTime] = useState<Date | null>(null);

  useEffect(() => {
    setViewStartTime(new Date());
    trackEvent({
      userId: 'current-user',
      eventType: 'view',
      targetId: 'feed',
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

    return () => {
      if (viewStartTime) {
        const duration = new Date().getTime() - viewStartTime.getTime();
        trackEvent({
          userId: 'current-user',
          eventType: 'timeSpent',
          targetId: 'feed',
          targetType: 'content',
          metadata: {
            duration: duration / 1000
          }
        });
      }
    };
  }, []);

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
        <h2 className="text-2xl font-bold mb-4">Recommended Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-500" />
                Advanced Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Get deeper insights into your recommendation engine's performance with our advanced analytics suite.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Explore Analytics <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Code className="h-5 w-5 text-green-500" />
                API Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Seamlessly integrate our recommendation engine into your existing applications.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                View Documentation <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
        <div className="grid grid-cols-1 gap-4">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-purple-500" />
                Getting Started Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn how to implement and optimize our recommendation engine for your use case.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">15 min read</span>
                <Button variant="outline" size="sm">
                  Read Guide <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Code className="h-5 w-5 text-orange-500" />
                Code Examples
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Explore practical examples and implementation patterns for common use cases.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">10+ examples</span>
                <Button variant="outline" size="sm">
                  View Examples <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}