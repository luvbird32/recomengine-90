
import { Button } from "@/components/ui/button";
import { Mail, Ban, Shield, MoreHorizontal } from "lucide-react";

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
}

export function UserActions({ user, onStatusChange, onSendEmail }: UserActionsProps) {
  return (
    <div className="flex gap-1">
      <Button 
        variant="ghost" 
        size="sm"
        onClick={() => onSendEmail(user.email)}
      >
        <Mail className="h-4 w-4" />
      </Button>
      {user.status !== 'Banned' && (
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => onStatusChange(user.id, 'Banned')}
        >
          <Ban className="h-4 w-4" />
        </Button>
      )}
      {user.status === 'Pending' && (
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => onStatusChange(user.id, 'Active')}
        >
          <Shield className="h-4 w-4" />
        </Button>
      )}
      <Button variant="ghost" size="sm">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </div>
  );
}
