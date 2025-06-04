
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Download, Upload } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { UserStatistics } from "../users/UserStatistics";
import { UserFilters } from "../users/UserFilters";
import { UserTable } from "../users/UserTable";

interface User {
  id: number;
  name: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Banned';
  joinDate: string;
  engagement: 'High' | 'Medium' | 'Low';
}

const initialUsers: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Active", joinDate: "2024-01-15", engagement: "High" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Active", joinDate: "2024-02-20", engagement: "Medium" },
  { id: 3, name: "Carol Davis", email: "carol@example.com", status: "Inactive", joinDate: "2024-01-10", engagement: "Low" },
  { id: 4, name: "David Wilson", email: "david@example.com", status: "Active", joinDate: "2024-03-05", engagement: "High" },
  { id: 5, name: "Eva Martinez", email: "eva@example.com", status: "Pending", joinDate: "2024-03-20", engagement: "Medium" },
  { id: 6, name: "Frank Brown", email: "frank@example.com", status: "Banned", joinDate: "2024-01-08", engagement: "Low" },
];

const USERS_STORAGE_KEY = 'dashboard_users';

export function UsersSection() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [engagementFilter, setEngagementFilter] = useState('all');
  const { toast } = useToast();

  // Load users from localStorage on mount
  useEffect(() => {
    const savedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    if (savedUsers) {
      try {
        const parsed = JSON.parse(savedUsers);
        setUsers(parsed);
      } catch (error) {
        console.error('Failed to parse saved users:', error);
      }
    }
  }, []);

  // Save users to localStorage whenever users change
  useEffect(() => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

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
      name: `User ${users.length + 1}`,
      email: `user${users.length + 1}@example.com`,
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

  const handleDeleteUser = (userId: number) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
    toast({
      title: "User Deleted",
      description: "User has been removed from the system.",
    });
  };

  const sendEmail = (userEmail: string) => {
    toast({
      title: "Email Sent",
      description: `Email sent to ${userEmail}`,
    });
  };

  const exportUsers = () => {
    const dataStr = JSON.stringify(users, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `users-export-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    toast({
      title: "Users Exported",
      description: "User data has been exported successfully.",
    });
  };

  const bulkStatusUpdate = (newStatus: User['status']) => {
    const selectedUsers = filteredUsers.filter(user => user.status !== newStatus);
    
    setUsers(prev => prev.map(user => 
      selectedUsers.find(selected => selected.id === user.id) 
        ? { ...user, status: newStatus }
        : user
    ));
    
    toast({
      title: "Bulk Update Complete",
      description: `Updated ${selectedUsers.length} users to ${newStatus} status.`,
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
        <div className="flex items-center gap-2">
          <Button onClick={exportUsers} variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button onClick={handleAddUser} className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>

      <UserStatistics 
        totalUsers={totalUsers}
        activeUsers={activeUsers}
        newSignups={newSignups}
        engagementRate={engagementRate}
      />

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle>User List ({filteredUsers.length} of {totalUsers})</CardTitle>
            <div className="flex items-center gap-2">
              <UserFilters 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                engagementFilter={engagementFilter}
                setEngagementFilter={setEngagementFilter}
              />
            </div>
          </div>
          {filteredUsers.length > 0 && (
            <div className="flex gap-2 mt-4">
              <Button size="sm" variant="outline" onClick={() => bulkStatusUpdate('Active')}>
                Activate All Filtered
              </Button>
              <Button size="sm" variant="outline" onClick={() => bulkStatusUpdate('Inactive')}>
                Deactivate All Filtered
              </Button>
            </div>
          )}
        </CardHeader>
        <CardContent>
          <UserTable 
            users={filteredUsers}
            onStatusChange={handleStatusChange}
            onSendEmail={sendEmail}
            onDeleteUser={handleDeleteUser}
          />
        </CardContent>
      </Card>
    </div>
  );
}
