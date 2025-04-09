
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { getLocationAnalytics } from "@/services/analyticsService";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";

export function LocationAnalytics() {
  // In a real app, we'd use React Query to fetch this data
  const locationData = getLocationAnalytics();
  const maxEngagement = Math.max(...locationData.map(item => item.engagementCount));
  
  return (
    <Card className="col-span-full lg:col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <MapPin className="h-5 w-5" />
          User Engagement by Location
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {locationData.length > 0 ? (
              locationData.map((location, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{location.location}</span>
                    <span className="text-muted-foreground">{location.engagementCount} engagements</span>
                  </div>
                  <Progress 
                    value={(location.engagementCount / maxEngagement) * 100} 
                    className="h-2" 
                    indicatorClassName={`bg-gradient-to-r from-purple-500 to-blue-500`}
                  />
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
                <MapPin className="mb-2 h-10 w-10 opacity-20" />
                <p>No location data available</p>
                <p className="text-sm">User engagement will appear here once collected</p>
              </div>
            )}
            
            {/* Fallback data for demo */}
            {locationData.length === 0 && (
              <>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">San Francisco</span>
                    <span className="text-muted-foreground">1,245 engagements</span>
                  </div>
                  <Progress value={100} className="h-2" indicatorClassName="bg-gradient-to-r from-purple-500 to-blue-500" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">New York</span>
                    <span className="text-muted-foreground">998 engagements</span>
                  </div>
                  <Progress value={80} className="h-2" indicatorClassName="bg-gradient-to-r from-purple-500 to-blue-500" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">London</span>
                    <span className="text-muted-foreground">754 engagements</span>
                  </div>
                  <Progress value={60} className="h-2" indicatorClassName="bg-gradient-to-r from-purple-500 to-blue-500" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Tokyo</span>
                    <span className="text-muted-foreground">621 engagements</span>
                  </div>
                  <Progress value={50} className="h-2" indicatorClassName="bg-gradient-to-r from-purple-500 to-blue-500" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Berlin</span>
                    <span className="text-muted-foreground">432 engagements</span>
                  </div>
                  <Progress value={35} className="h-2" indicatorClassName="bg-gradient-to-r from-purple-500 to-blue-500" />
                </div>
              </>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
