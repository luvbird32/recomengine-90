
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Info, CheckCircle, Trash2 } from "lucide-react";

interface Notification {
  id: number;
  type: "alert" | "warning" | "success" | "info";
  title: string;
  message: string;
  time: string;
  read: boolean;
}

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (id: number) => void;
  onDelete: (id: number) => void;
}

export function NotificationItem({ notification, onMarkAsRead, onDelete }: NotificationItemProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div 
      className={`flex items-start gap-3 p-4 rounded-lg border ${notification.read ? 'bg-muted/30' : 'bg-background'} hover:bg-muted/50 transition-colors`}
    >
      {getIcon(notification.type)}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="font-medium">{notification.title}</h4>
          <div className="flex items-center gap-2">
            {!notification.read && (
              <Badge variant="default" className="text-xs">New</Badge>
            )}
            <span className="text-xs text-muted-foreground">{notification.time}</span>
            <div className="flex gap-1">
              {!notification.read && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onMarkAsRead(notification.id)}
                >
                  <CheckCircle className="h-4 w-4" />
                </Button>
              )}
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onDelete(notification.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
      </div>
    </div>
  );
}
