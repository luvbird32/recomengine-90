
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { NotificationStats } from "@/components/notifications/NotificationStats";
import { NotificationList } from "@/components/notifications/NotificationList";

interface Notification {
  id: number;
  type: "alert" | "warning" | "success" | "info";
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const initialNotifications: Notification[] = [
  { id: 1, type: "alert", title: "System Alert", message: "High memory usage detected on server", time: "2 minutes ago", read: false },
  { id: 2, type: "info", title: "New User Registration", message: "25 new users registered today", time: "1 hour ago", read: false },
  { id: 3, type: "success", title: "Backup Completed", message: "Daily backup completed successfully", time: "3 hours ago", read: true },
  { id: 4, type: "warning", title: "API Rate Limit", message: "API rate limit reached for endpoint /recommendations", time: "5 hours ago", read: true },
  { id: 5, type: "info", title: "Analytics Report", message: "Weekly analytics report is ready", time: "1 day ago", read: true },
];

export function NotificationsSection() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const { toast } = useToast();

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
    toast({
      title: "Notifications Updated",
      description: "All notifications marked as read.",
    });
  };

  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
    toast({
      title: "Notification Deleted",
      description: "Notification has been removed.",
    });
  };

  const openEmailSettings = () => {
    toast({
      title: "Email Settings",
      description: "Email settings panel would open here.",
    });
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const alertCount = notifications.filter(n => n.type === "alert" && !n.read).length;

  return (
    <div className="container p-6 mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-muted-foreground">Stay updated with system alerts and messages</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={openEmailSettings}>
            <Mail className="h-4 w-4 mr-2" />
            Email Settings
          </Button>
          <Button onClick={markAllAsRead} disabled={unreadCount === 0}>
            Mark All Read
          </Button>
        </div>
      </div>

      <NotificationStats 
        totalNotifications={notifications.length}
        unreadCount={unreadCount}
        alertCount={alertCount}
        emailsSent={856}
      />

      <NotificationList 
        notifications={notifications}
        onMarkAsRead={markAsRead}
        onDelete={deleteNotification}
      />
    </div>
  );
}
