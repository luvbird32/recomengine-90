
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { User, USERS_STORAGE_KEY } from "./types";

const initialUsers: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Active", joinDate: "2024-01-15", engagement: "High" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Active", joinDate: "2024-02-20", engagement: "Medium" },
  { id: 3, name: "Carol Davis", email: "carol@example.com", status: "Inactive", joinDate: "2024-01-10", engagement: "Low" },
  { id: 4, name: "David Wilson", email: "david@example.com", status: "Active", joinDate: "2024-03-05", engagement: "High" },
  { id: 5, name: "Eva Martinez", email: "eva@example.com", status: "Pending", joinDate: "2024-03-20", engagement: "Medium" },
  { id: 6, name: "Frank Brown", email: "frank@example.com", status: "Banned", joinDate: "2024-01-08", engagement: "Low" },
];

export function useUserManagement() {
  const [users, setUsers] = useState<User[]>(initialUsers);
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

  const bulkStatusUpdate = (newStatus: User['status'], filteredUsers: User[]) => {
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

  return {
    users,
    handleStatusChange,
    handleAddUser,
    handleDeleteUser,
    sendEmail,
    exportUsers,
    bulkStatusUpdate,
  };
}
