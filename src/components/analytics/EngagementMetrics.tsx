import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContentEngagementMetrics, getUserEngagementMetrics, getLocationAnalytics } from "@/services/analyticsService";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export function EngagementMetrics() {
  const contentMetrics = getContentEngagementMetrics('all');
  const userMetrics = getUserEngagementMetrics('current-user');
  const locationData = getLocationAnalytics();

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Content Engagement Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-background rounded-lg border">
              <p className="text-sm font-medium text-muted-foreground">Total Views</p>
              <h3 className="text-2xl font-bold">{contentMetrics.views}</h3>
            </div>
            <div className="p-4 bg-background rounded-lg border">
              <p className="text-sm font-medium text-muted-foreground">Total Likes</p>
              <h3 className="text-2xl font-bold">{contentMetrics.likes}</h3>
            </div>
            <div className="p-4 bg-background rounded-lg border">
              <p className="text-sm font-medium text-muted-foreground">Avg Time Spent</p>
              <h3 className="text-2xl font-bold">{contentMetrics.averageTimeSpent.toFixed(1)}s</h3>
            </div>
            <div className="p-4 bg-background rounded-lg border">
              <p className="text-sm font-medium text-muted-foreground">Total Engagements</p>
              <h3 className="text-2xl font-bold">{contentMetrics.totalEngagements}</h3>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Location-based Engagement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={locationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="location" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="engagementCount" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>User Engagement Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-background rounded-lg border">
              <p className="text-sm font-medium text-muted-foreground">Followers</p>
              <h3 className="text-2xl font-bold">{userMetrics.followers}</h3>
            </div>
            <div className="p-4 bg-background rounded-lg border">
              <p className="text-sm font-medium text-muted-foreground">Content Views</p>
              <h3 className="text-2xl font-bold">{userMetrics.contentViews}</h3>
            </div>
            <div className="p-4 bg-background rounded-lg border">
              <p className="text-sm font-medium text-muted-foreground">Content Likes</p>
              <h3 className="text-2xl font-bold">{userMetrics.contentLikes}</h3>
            </div>
            <div className="p-4 bg-background rounded-lg border">
              <p className="text-sm font-medium text-muted-foreground">Avg Time per Content</p>
              <h3 className="text-2xl font-bold">{userMetrics.averageTimePerContent.toFixed(1)}s</h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}