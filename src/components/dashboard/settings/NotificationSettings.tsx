
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Bell } from "lucide-react";

interface NotificationSettingsProps {
  settings: {
    emailNotifications: string;
    emailAlerts: boolean;
    systemHealthReports: boolean;
    userActivityAlerts: boolean;
  };
  onInputChange: (field: string, value: string | boolean) => void;
}

export function NotificationSettings({ settings, onInputChange }: NotificationSettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Notification Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email-notifications">Email for Notifications</Label>
          <Input 
            id="email-notifications" 
            type="email" 
            value={settings.emailNotifications}
            onChange={(e) => onInputChange('emailNotifications', e.target.value)}
          />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Email Alerts</Label>
            <p className="text-sm text-muted-foreground">Receive email notifications for critical events</p>
          </div>
          <Switch 
            checked={settings.emailAlerts}
            onCheckedChange={(checked) => onInputChange('emailAlerts', checked)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>System Health Reports</Label>
            <p className="text-sm text-muted-foreground">Weekly system performance reports</p>
          </div>
          <Switch 
            checked={settings.systemHealthReports}
            onCheckedChange={(checked) => onInputChange('systemHealthReports', checked)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>User Activity Alerts</Label>
            <p className="text-sm text-muted-foreground">Notifications for unusual user activity</p>
          </div>
          <Switch 
            checked={settings.userActivityAlerts}
            onCheckedChange={(checked) => onInputChange('userActivityAlerts', checked)}
          />
        </div>
      </CardContent>
    </Card>
  );
}
