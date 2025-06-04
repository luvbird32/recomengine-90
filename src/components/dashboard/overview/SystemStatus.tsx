
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface SystemService {
  status: string;
  label: string;
}

interface SystemStatusProps {
  systemStatuses: Record<string, SystemService>;
  onRefresh: () => void;
}

export function SystemStatus({ systemStatuses, onRefresh }: SystemStatusProps) {
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
    <Card className="col-span-full lg:col-span-1">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>System Status</CardTitle>
        <Button variant="ghost" size="sm" onClick={onRefresh}>
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
  );
}
