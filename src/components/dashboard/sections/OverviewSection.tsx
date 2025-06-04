
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, RefreshCw } from "lucide-react";
import { StatisticsOverview } from "@/components/dashboard/StatisticsOverview";
import { LocationAnalytics } from "@/components/analytics/LocationAnalytics";
import { SystemStatus } from "@/components/dashboard/overview/SystemStatus";
import { UserGrowthChart } from "@/components/dashboard/overview/UserGrowthChart";
import { RecommendationAccuracyChart } from "@/components/dashboard/overview/RecommendationAccuracyChart";
import { KeyStatistics } from "@/components/dashboard/overview/KeyStatistics";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function OverviewSection() {
  const [timePeriod, setTimePeriod] = useState("last30days");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [systemStatuses, setSystemStatuses] = useState({
    apiServices: { status: 'operational', label: 'API Services' },
    recommendationEngine: { status: 'operational', label: 'Recommendation Engine' },
    contentDelivery: { status: 'degraded', label: 'Content Delivery' },
    database: { status: 'operational', label: 'Database' },
    analyticsPipeline: { status: 'operational', label: 'Analytics Pipeline' }
  });
  const { toast } = useToast();

  const handleExportData = () => {
    const analyticsData = {
      timePeriod,
      exportDate: new Date().toISOString(),
      systemStatus: systemStatuses,
      metrics: {
        totalUsers: 1250,
        activeUsers: 892,
        recommendationAccuracy: 94.2,
        apiUptime: 99.8
      }
    };
    
    const dataStr = JSON.stringify(analyticsData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `analytics-data-${timePeriod}-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    toast({
      title: "Data Exported",
      description: `Analytics data for ${timePeriod.replace(/([A-Z])/g, ' $1').toLowerCase()} has been downloaded.`,
    });
  };

  const refreshSystemStatus = async () => {
    setIsRefreshing(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate random status updates
    setSystemStatuses(prev => ({
      ...prev,
      contentDelivery: { 
        ...prev.contentDelivery, 
        status: Math.random() > 0.3 ? 'operational' : 'degraded' 
      },
      apiServices: {
        ...prev.apiServices,
        status: Math.random() > 0.9 ? 'degraded' : 'operational'
      }
    }));
    
    setIsRefreshing(false);
    
    toast({
      title: "System Status Refreshed",
      description: "Latest system status has been fetched.",
    });
  };

  const refreshAllData = async () => {
    setIsRefreshing(true);
    
    // Simulate refreshing all components
    await Promise.all([
      refreshSystemStatus(),
      new Promise(resolve => setTimeout(resolve, 1000)) // Simulate other data refresh
    ]);
    
    setIsRefreshing(false);
    
    toast({
      title: "Dashboard Refreshed",
      description: "All dashboard data has been updated.",
    });
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
              <SelectItem value="last90days">Last 90 days</SelectItem>
              <SelectItem value="alltime">All time</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            onClick={refreshAllData} 
            variant="outline" 
            disabled={isRefreshing}
            className="min-w-[100px]"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            {isRefreshing ? 'Refreshing...' : 'Refresh'}
          </Button>
          <Button onClick={handleExportData} className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>
      
      <section className="mb-8">
        <StatisticsOverview />
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <UserGrowthChart timePeriod={timePeriod} />
        <LocationAnalytics />
        <RecommendationAccuracyChart />
        <SystemStatus 
          systemStatuses={systemStatuses} 
          onRefresh={refreshSystemStatus}
          isRefreshing={isRefreshing}
        />
      </div>

      <KeyStatistics />
    </div>
  );
}
