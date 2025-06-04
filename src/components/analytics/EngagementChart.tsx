
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockEngagementData = [
  { name: 'Jan', clicks: 400, views: 2400, conversions: 240 },
  { name: 'Feb', clicks: 300, views: 1398, conversions: 220 },
  { name: 'Mar', clicks: 200, views: 9800, conversions: 290 },
  { name: 'Apr', clicks: 278, views: 3908, conversions: 200 },
  { name: 'May', clicks: 189, views: 4800, conversions: 181 },
];

interface EngagementChartProps {
  dateRange: string;
}

export function EngagementChart({ dateRange }: EngagementChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Engagement Trends ({dateRange})</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockEngagementData}>
              <defs>
                <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="views" stackId="1" stroke="#82ca9d" fill="url(#colorViews)" />
              <Area type="monotone" dataKey="clicks" stackId="1" stroke="#8884d8" fill="url(#colorClicks)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
