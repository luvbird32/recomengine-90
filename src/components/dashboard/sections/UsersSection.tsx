
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Search, Filter, MoreHorizontal, UserPlus, Mail, Ban, Shield } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface User {
  id: number;
  name: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Banned';
  joinDate: string;
  engagement: 'High' | 'Medium' | 'Low';
}

const mockUsers: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Active", joinDate: "2024-01-15", engagement: "High" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Active", joinDate: "2024-02-20", engagement: "Medium" },
  { id: 3, name: "Carol Davis", email: "carol@example.com", status: "Inactive", joinDate: "2024-01-10", engagement: "Low" },
  { id: 4, name: "David Wilson", email: "david@example.com", status: "Active", joinDate: "2024-03-05", engagement: "High" },
  { id: 5, name: "Eva Martinez", email: "eva@example.com", status: "Pending", joinDate: "2024-03-20", engagement: "Medium" },
  { id: 6, name: "Frank Brown", email: "frank@example.com", status: "Banned", joinDate: "2024-01-08", engagement: "Low" },
];

export function UsersSection() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [engagementFilter, setEngagementFilter] = useState('all');
  const { toast } = useToast();

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    const matchesEngagement = engagementFilter === 'all' || user.engagement === engagementFilter;
    
    return matchesSearch && matchesStatus && matchesEngagement;
  });

  const handleStatusChange = (userId: number, newStatus: User['status']) => {
    setUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
    
    toast({
      title: "User Status Updated",
      description: `User status changed to ${newStatus}.`,
    });
  };

  const handleAddUser = () => {
    const newUser: User = {
      id: Date.now(),
      name: "New User",
      email: "newuser@example.com",
      status: "Pending",
      joinDate: new Date().toISOString().split('T')[0],
      engagement: "Medium"
    };
    
    setUsers(prev => [newUser, ...prev]);
    toast({
      title: "User Added",
      description: "New user has been added to the system.",
    });
  };

  const sendEmail = (userEmail: string) => {
    toast({
      title: "Email Sent",
      description: `Email sent to ${userEmail}`,
    });
  };

  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === 'Active').length;
  const newSignups = users.filter(u => {
    const joinDate = new Date(u.joinDate);
    const thisMonth = new Date();
    thisMonth.setDate(1);
    return joinDate >= thisMonth;
  }).length;
  const engagementRate = Math.round((users.filter(u => u.engagement === 'High').length / totalUsers) * 100);

  return (
    <div className="container p-6 mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-muted-foreground">Manage and monitor your platform users</p>
        </div>
        <Button onClick={handleAddUser} className="flex items-center gap-2">
          <UserPlus className="h-4 w-4" />
          Add New User
        </Button>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsers}</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeUsers}</div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">New Signups</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newSignups}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{engagementRate}%</div>
            <p className="text-xs text-muted-foreground">+3.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* User Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle>User List</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search users..." 
                  className="pl-8 w-[200px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Banned">Banned</SelectItem>
                </SelectContent>
              </Select>
              <Select value={engagementFilter} onValueChange={setEngagementFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Engagement" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Name</th>
                  <th className="text-left py-2">Email</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Join Date</th>
                  <th className="text-left py-2">Engagement</th>
                  <th className="text-left py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 font-medium">{user.name}</td>
                    <td className="py-3 text-muted-foreground">{user.email}</td>
                    <td className="py-3">
                      <Badge 
                        variant={
                          user.status === 'Active' ? 'default' : 
                          user.status === 'Pending' ? 'secondary' : 
                          user.status === 'Banned' ? 'destructive' : 'outline'
                        }
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-3 text-muted-foreground">{user.joinDate}</td>
                    <td className="py-3">
                      <Badge 
                        variant={
                          user.engagement === 'High' ? 'default' : 
                          user.engagement === 'Medium' ? 'secondary' : 'outline'
                        }
                      >
                        {user.engagement}
                      </Badge>
                    </td>
                    <td className="py-3">
                      <div className="flex gap-1">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => sendEmail(user.email)}
                        >
                          <Mail className="h-4 w-4" />
                        </Button>
                        {user.status !== 'Banned' && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleStatusChange(user.id, 'Banned')}
                          >
                            <Ban className="h-4 w-4" />
                          </Button>
                        )}
                        {user.status === 'Pending' && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleStatusChange(user.id, 'Active')}
                          >
                            <Shield className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
