
import { Button } from "@/components/ui/button";
import { Mail, Ban, Shield, MoreHorizontal, Trash2, UserCheck } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface User {
  id: number;
  name: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Banned';
  joinDate: string;
  engagement: 'High' | 'Medium' | 'Low';
}

interface UserActionsProps {
  user: User;
  onStatusChange: (userId: number, newStatus: User['status']) => void;
  onSendEmail: (userEmail: string) => void;
  onDeleteUser?: (userId: number) => void;
}

export function UserActions({ user, onStatusChange, onSendEmail, onDeleteUser }: UserActionsProps) {
  return (
    <div className="flex gap-1">
      <Button 
        variant="ghost" 
        size="sm"
        onClick={() => onSendEmail(user.email)}
        title="Send Email"
      >
        <Mail className="h-4 w-4" />
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {user.status === 'Pending' && (
            <DropdownMenuItem 
              onClick={() => onStatusChange(user.id, 'Active')}
              className="text-green-600"
            >
              <UserCheck className="h-4 w-4 mr-2" />
              Approve User
            </DropdownMenuItem>
          )}
          
          {user.status === 'Active' && (
            <DropdownMenuItem 
              onClick={() => onStatusChange(user.id, 'Inactive')}
              className="text-orange-600"
            >
              <Ban className="h-4 w-4 mr-2" />
              Deactivate
            </DropdownMenuItem>
          )}
          
          {user.status === 'Inactive' && (
            <DropdownMenuItem 
              onClick={() => onStatusChange(user.id, 'Active')}
              className="text-green-600"
            >
              <UserCheck className="h-4 w-4 mr-2" />
              Reactivate
            </DropdownMenuItem>
          )}
          
          {user.status !== 'Banned' && (
            <DropdownMenuItem 
              onClick={() => onStatusChange(user.id, 'Banned')}
              className="text-red-600"
            >
              <Ban className="h-4 w-4 mr-2" />
              Ban User
            </DropdownMenuItem>
          )}
          
          {user.status === 'Banned' && (
            <DropdownMenuItem 
              onClick={() => onStatusChange(user.id, 'Active')}
              className="text-green-600"
            >
              <Shield className="h-4 w-4 mr-2" />
              Unban User
            </DropdownMenuItem>
          )}
          
          <DropdownMenuSeparator />
          
          {onDeleteUser && (
            <DropdownMenuItem 
              onClick={() => onDeleteUser(user.id)}
              className="text-red-600"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete User
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
