
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockUserGrowthData = [
  { name: 'Jan', users: 1200, activeUsers: 800 },
  { name: 'Feb', users: 1800, activeUsers: 1200 },
  { name: 'Mar', users: 2400, activeUsers: 1600 },
  { name: 'Apr', users: 3200, activeUsers: 2400 },
  { name: 'May', users: 4000, activeUsers: 3000 },
];

interface UserGrowthChartProps {
  timePeriod: string;
}

export function UserGrowthChart({ timePeriod }: UserGrowthChartProps) {
  return (
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
  );
}
