
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Brain, FileText, Shield, Upload } from "lucide-react";
import { EngagementMetrics } from "@/components/analytics/EngagementMetrics";
import { ContentManagement } from "@/components/content/ContentManagement";
import { DeveloperTools } from "@/components/developer/DeveloperTools";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { StatisticsOverview } from "@/components/dashboard/StatisticsOverview";
import { LocationAnalytics } from "@/components/analytics/LocationAnalytics";

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

const Dashboard = () => {
  return (
    <DashboardSidebar>
      <div className="container p-6 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Monitor your recommendation engine performance</p>
          </div>
          <div className="flex items-center space-x-2">
            <select className="bg-background border rounded-md px-3 py-1 text-sm">
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>Last 24 hours</option>
              <option>All time</option>
            </select>
            <button className="bg-primary text-primary-foreground rounded-md px-3 py-1 text-sm hover:bg-primary/90 transition-colors">
              Export Data
            </button>
          </div>
        </div>
        
        {/* Statistics Overview */}
        <section className="mb-8">
          <StatisticsOverview />
        </section>
        
        {/* Main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Key Metrics - First Row */}
          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle>User Growth Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockUserGrowthData}>
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2}/>
                      </linearGradient>
                      <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="users" 
                      stroke="#8884d8" 
                      name="Total Users"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                      fillOpacity={1}
                      fill="url(#colorUsers)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="activeUsers" 
                      stroke="#82ca9d" 
                      name="Active Users"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Location analytics */}
          <LocationAnalytics />
          
          {/* Second row */}
          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle>Recommendation Accuracy by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockAccuracyData}>
                    <defs>
                      <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar 
                      dataKey="accuracy" 
                      fill="url(#colorAccuracy)" 
                      name="Accuracy %" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-full lg:col-span-1">
            <CardHeader>
              <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span>API Services</span>
                  </div>
                  <span className="text-green-500 text-sm font-medium">Operational</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span>Recommendation Engine</span>
                  </div>
                  <span className="text-green-500 text-sm font-medium">Operational</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                    <span>Content Delivery</span>
                  </div>
                  <span className="text-amber-500 text-sm font-medium">Degraded</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span>Database</span>
                  </div>
                  <span className="text-green-500 text-sm font-medium">Operational</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span>Analytics Pipeline</span>
                  </div>
                  <span className="text-green-500 text-sm font-medium">Operational</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
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
              <CardTitle className="text-sm font-medium">AI Processing</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">accuracy rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Engagement Metrics */}
        <div className="mt-6 bg-card rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">Engagement Metrics</h2>
          <EngagementMetrics />
        </div>

        {/* Content Management Section */}
        <div className="mt-8 bg-card rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">Content Management</h2>
          <ContentManagement />
        </div>

        {/* Developer Tools Section */}
        <div className="mt-8 mb-12 bg-card rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">Developer Tools</h2>
          <DeveloperTools />
        </div>
      </div>
    </DashboardSidebar>
  );
};

export default Dashboard;
