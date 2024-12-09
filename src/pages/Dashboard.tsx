import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Users, TrendingUp, Activity, Target, Brain, Zap, BarChart2, Gauge, FileText, Shield, Upload } from "lucide-react";
import { EngagementMetrics } from "@/components/analytics/EngagementMetrics";
import { ContentManagement } from "@/components/content/ContentManagement";

const mockUserGrowthData = [
  { name: 'Jan', users: 1200, activeUsers: 800 },
  { name: 'Feb', users: 1800, activeUsers: 1200 },
  { name: 'Mar', users: 2400, activeUsers: 1600 },
  { name: 'Apr', users: 3200, activeUsers: 2400 },
  { name: 'May', users: 4000, activeUsers: 3000 },
];

const mockAccuracyData = [
  { category: 'Product Recs', accuracy: 92 },
  { category: 'Content Recs', accuracy: 88 },
  { category: 'Search Recs', accuracy: 85 },
  { category: 'Email Recs', accuracy: 90 },
];

const mockContentPerformance = [
  { type: 'Product Pages', engagement: 85, conversion: 12 },
  { type: 'Blog Posts', engagement: 78, conversion: 8 },
  { type: 'Email Content', engagement: 72, conversion: 15 },
  { type: 'Search Results', engagement: 90, conversion: 18 },
];

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Content</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Moderation Queue</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Items pending review</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <Upload className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">456 GB</div>
            <p className="text-xs text-muted-foreground">of 1 TB limit</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">API Usage</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4M</div>
            <p className="text-xs text-muted-foreground">calls this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Content Management Section */}
      <div className="mb-8">
        <ContentManagement />
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>User Growth Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockUserGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="users" stroke="#8884d8" name="Total Users" />
                  <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" name="Active Users" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommendation Accuracy by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockAccuracyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="accuracy" fill="#8884d8" name="Accuracy %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Engagement Metrics */}
      <div className="mt-6">
        <EngagementMetrics />
      </div>
    </div>
  );
};

export default Dashboard;
