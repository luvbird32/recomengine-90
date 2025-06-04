
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { UserStatistics } from "../users/UserStatistics";
import { UserFilters } from "../users/UserFilters";
import { UserTable } from "../users/UserTable";
import { UserManagementHeader } from "../users/UserManagementHeader";
import { UserBulkActions } from "../users/UserBulkActions";
import { useUserManagement } from "../users/useUserManagement";

export function UsersSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [engagementFilter, setEngagementFilter] = useState('all');

  const {
    users,
    handleStatusChange,
    handleAddUser,
    handleDeleteUser,
    sendEmail,
    exportUsers,
    bulkStatusUpdate,
  } = useUserManagement();

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    const matchesEngagement = engagementFilter === 'all' || user.engagement === engagementFilter;
    
    return matchesSearch && matchesStatus && matchesEngagement;
  });

  const handleBulkStatusUpdate = (newStatus: 'Active' | 'Inactive' | 'Pending' | 'Banned') => {
    bulkStatusUpdate(newStatus, filteredUsers);
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
      <UserManagementHeader 
        onAddUser={handleAddUser}
        onExportUsers={exportUsers}
      />

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
          <UserBulkActions 
            filteredUsers={filteredUsers}
            onBulkStatusUpdate={handleBulkStatusUpdate}
          />
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
