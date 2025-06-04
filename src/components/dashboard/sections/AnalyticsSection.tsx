
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { AnalyticsHeader } from '@/components/analytics/AnalyticsHeader';
import { EngagementChart } from '@/components/analytics/EngagementChart';
import { CategoryDistributionChart } from '@/components/analytics/CategoryDistributionChart';
import { EngagementMetrics } from '@/components/analytics/EngagementMetrics';
import { LocationAnalytics } from '@/components/analytics/LocationAnalytics';

export function AnalyticsSection() {
  const [dateRange, setDateRange] = useState('last30days');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate data refresh
    setTimeout(() => {
      setIsRefreshing(false);
      toast({
        title: "Data Refreshed",
        description: "Analytics data has been updated with the latest information.",
      });
    }, 1500);
  };

  return (
    <div className="container p-6 mx-auto max-w-7xl">
      <AnalyticsHeader 
        dateRange={dateRange}
        setDateRange={setDateRange}
        isRefreshing={isRefreshing}
        onRefresh={handleRefresh}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <EngagementChart dateRange={dateRange} />
        <CategoryDistributionChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EngagementMetrics />
        </div>
        <LocationAnalytics />
      </div>
    </div>
  );
}
