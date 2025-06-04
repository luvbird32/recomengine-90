
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings } from "lucide-react";

interface GeneralSettingsProps {
  settings: {
    appName: string;
    appDescription: string;
    apiUrl: string;
    maintenanceMode: boolean;
  };
  onInputChange: (field: string, value: string | boolean) => void;
}

export function GeneralSettings({ settings, onInputChange }: GeneralSettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          General Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="app-name">Application Name</Label>
          <Input 
            id="app-name" 
            value={settings.appName}
            onChange={(e) => onInputChange('appName', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="app-description">Description</Label>
          <Input 
            id="app-description" 
            value={settings.appDescription}
            onChange={(e) => onInputChange('appDescription', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="api-url">API Base URL</Label>
          <Input 
            id="api-url" 
            value={settings.apiUrl}
            onChange={(e) => onInputChange('apiUrl', e.target.value)}
          />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Maintenance Mode</Label>
            <p className="text-sm text-muted-foreground">Enable maintenance mode for system updates</p>
          </div>
          <Switch 
            checked={settings.maintenanceMode}
            onCheckedChange={(checked) => onInputChange('maintenanceMode', checked)}
          />
        </div>
      </CardContent>
    </Card>
  );
}
