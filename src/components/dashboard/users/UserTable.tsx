
import { Badge } from "@/components/ui/badge";
import { UserActions } from "./UserActions";

interface User {
  id: number;
  name: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Banned';
  joinDate: string;
  engagement: 'High' | 'Medium' | 'Low';
}

interface UserTableProps {
  users: User[];
  onStatusChange: (userId: number, newStatus: User['status']) => void;
  onSendEmail: (userEmail: string) => void;
}

export function UserTable({ users, onStatusChange, onSendEmail }: UserTableProps) {
  return (
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
          {users.map((user) => (
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
                <UserActions 
                  user={user}
                  onStatusChange={onStatusChange}
                  onSendEmail={onSendEmail}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
