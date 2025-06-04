
import { Button } from "@/components/ui/button";
import { UserPlus, Download } from "lucide-react";

interface UserManagementHeaderProps {
  onAddUser: () => void;
  onExportUsers: () => void;
}

export function UserManagementHeader({ onAddUser, onExportUsers }: UserManagementHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
      <div>
        <h1 className="text-3xl font-bold">User Management</h1>
        <p className="text-muted-foreground">Manage and monitor your platform users</p>
      </div>
      <div className="flex items-center gap-2">
        <Button onClick={onExportUsers} variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        <Button onClick={onAddUser} className="flex items-center gap-2">
          <UserPlus className="h-4 w-4" />
          Add User
        </Button>
      </div>
    </div>
  );
}
