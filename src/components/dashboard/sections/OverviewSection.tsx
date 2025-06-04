
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Brain, FileText, Shield, Upload, Download } from "lucide-react";
import { StatisticsOverview } from "@/components/dashboard/StatisticsOverview";
import { LocationAnalytics } from "@/components/analytics/LocationAnalytics";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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

export function OverviewSection() {
  const [timePeriod, setTimePeriod] = useState("last30days");
  const [systemStatuses, setSystemStatuses] = useState({
    apiServices: { status: 'operational', label: 'API Services' },
    recommendationEngine: { status: 'operational', label: 'Recommendation Engine' },
    contentDelivery: { status: 'degraded', label: 'Content Delivery' },
    database: { status: 'operational', label: 'Database' },
    analyticsPipeline: { status: 'operational', label: 'Analytics Pipeline' }
  });
  const { toast } = useToast();

  const handleExportData = () => {
    // Simulate data export
    const dataToExport = {
      userGrowth: mockUserGrowthData,
      accuracy: mockAccuracyData,
      timePeriod,
      exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(dataToExport, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `analytics-data-${timePeriod}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    toast({
      title: "Data Exported",
      description: `Analytics data for ${timePeriod} has been downloaded.`,
    });
  };

  const refreshSystemStatus = () => {
    // Simulate system status refresh
    setSystemStatuses(prev => ({
      ...prev,
      contentDelivery: { 
        ...prev.contentDelivery, 
        status: Math.random() > 0.5 ? 'operational' : 'degraded' 
      }
    }));
    
    toast({
      title: "System Status Refreshed",
      description: "Latest system status has been fetched.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-green-500';
      case 'degraded': return 'bg-amber-500';
      case 'outage': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational': return 'Operational';
      case 'degraded': return 'Degraded';
      case 'outage': return 'Outage';
      default: return 'Unknown';
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-500';
      case 'degraded': return 'text-amber-500';
      case 'outage': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="container p-6 mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Monitor your recommendation engine performance</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={timePeriod} onValueChange={setTimePeriod}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last24hours">Last 24 hours</SelectItem>
              <SelectItem value="last7days">Last 7 days</SelectItem>
              <SelectItem value="last30days">Last 30 days</SelectItem>
              <SelectItem value="alltime">All time</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleExportData} className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
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
            <CardTitle>User Growth Trends ({timePeriod})</CardTitle>
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
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>System Status</CardTitle>
            <Button variant="ghost" size="sm" onClick={refreshSystemStatus}>
              Refresh
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              {Object.entries(systemStatuses).map(([key, service]) => (
                <div key={key} className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${getStatusColor(service.status)}`}></div>
                    <span>{service.label}</span>
                  </div>
                  <span className={`text-sm font-medium ${getStatusTextColor(service.status)}`}>
                    {getStatusText(service.status)}
                  </span>
                </div>
              ))}
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
    </div>
  );
}
