
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  UserPlus, 
  ArrowUpRight, 
  ArrowDownRight, 
  Activity, 
  Target, 
  TrendingUp,
  UserCheck
} from "lucide-react";

export function StatisticsOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="border-l-4 border-l-green-500">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">New Users</CardTitle>
          <UserPlus className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs flex items-center text-green-500">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                18% from last month
              </p>
            </div>
            <div className="h-12 w-24">
              <div className="h-full w-full bg-green-100 rounded-md flex items-end">
                <div style={{ height: '60%' }} className="w-1/5 bg-green-500 rounded-sm mx-0.5"></div>
                <div style={{ height: '40%' }} className="w-1/5 bg-green-500 rounded-sm mx-0.5"></div>
                <div style={{ height: '70%' }} className="w-1/5 bg-green-500 rounded-sm mx-0.5"></div>
                <div style={{ height: '50%' }} className="w-1/5 bg-green-500 rounded-sm mx-0.5"></div>
                <div style={{ height: '80%' }} className="w-1/5 bg-green-500 rounded-sm mx-0.5"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Recommendations</CardTitle>
          <Target className="h-4 w-4 text-purple-500" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">12.5M</div>
              <p className="text-xs flex items-center text-purple-500">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                24% increase
              </p>
            </div>
            <div className="h-12 w-24">
              <div className="h-full w-full bg-purple-100 rounded-md flex items-end">
                <div style={{ height: '50%' }} className="w-1/5 bg-purple-500 rounded-sm mx-0.5"></div>
                <div style={{ height: '60%' }} className="w-1/5 bg-purple-500 rounded-sm mx-0.5"></div>
                <div style={{ height: '75%' }} className="w-1/5 bg-purple-500 rounded-sm mx-0.5"></div>
                <div style={{ height: '85%' }} className="w-1/5 bg-purple-500 rounded-sm mx-0.5"></div>
                <div style={{ height: '95%' }} className="w-1/5 bg-purple-500 rounded-sm mx-0.5"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Rate</CardTitle>
          <Activity className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">68.7%</div>
              <p className="text-xs flex items-center text-red-500">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                3% decrease
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium">
                69%
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-l-4 border-l-amber-500">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
          <UserCheck className="h-4 w-4 text-amber-500" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">3,842</div>
              <p className="text-xs flex items-center text-green-500">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                8% increase
              </p>
            </div>
            <div className="h-12 w-24">
              <div className="h-full w-full bg-amber-100 rounded-md flex items-end justify-around px-1">
                <div className="w-1.5 bg-amber-500 rounded-sm" style={{ height: '60%' }}></div>
                <div className="w-1.5 bg-amber-500 rounded-sm" style={{ height: '80%' }}></div>
                <div className="w-1.5 bg-amber-500 rounded-sm" style={{ height: '65%' }}></div>
                <div className="w-1.5 bg-amber-500 rounded-sm" style={{ height: '75%' }}></div>
                <div className="w-1.5 bg-amber-500 rounded-sm" style={{ height: '70%' }}></div>
                <div className="w-1.5 bg-amber-500 rounded-sm" style={{ height: '85%' }}></div>
                <div className="w-1.5 bg-amber-500 rounded-sm" style={{ height: '75%' }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
