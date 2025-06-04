
import { Button } from "@/components/ui/button";
import { User } from "./types";

interface UserBulkActionsProps {
  filteredUsers: User[];
  onBulkStatusUpdate: (status: User['status']) => void;
}

export function UserBulkActions({ filteredUsers, onBulkStatusUpdate }: UserBulkActionsProps) {
  if (filteredUsers.length === 0) {
    return null;
  }

  return (
    <div className="flex gap-2 mt-4">
      <Button size="sm" variant="outline" onClick={() => onBulkStatusUpdate('Active')}>
        Activate All Filtered
      </Button>
      <Button size="sm" variant="outline" onClick={() => onBulkStatusUpdate('Inactive')}>
        Deactivate All Filtered
      </Button>
    </div>
  );
}
