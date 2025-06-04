
import { Badge } from "@/components/ui/badge";
import { UserActions } from "./UserActions";
import { User } from "./types";

interface UserTableProps {
  users: User[];
  onStatusChange: (userId: number, newStatus: User['status']) => void;
  onSendEmail: (userEmail: string) => void;
  onDeleteUser?: (userId: number) => void;
}

export function UserTable({ users, onStatusChange, onSendEmail, onDeleteUser }: UserTableProps) {
  if (users.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No users found matching your criteria.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2 font-medium">Name</th>
            <th className="text-left py-2 font-medium">Email</th>
            <th className="text-left py-2 font-medium">Status</th>
            <th className="text-left py-2 font-medium">Join Date</th>
            <th className="text-left py-2 font-medium">Engagement</th>
            <th className="text-left py-2 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-muted/50 transition-colors">
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
              <td className="py-3 text-muted-foreground">
                {new Date(user.joinDate).toLocaleDateString()}
              </td>
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
                  onDeleteUser={onDeleteUser}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
