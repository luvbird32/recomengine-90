
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings, Shield, Database, Bell, RotateCcw, Save } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface SettingsData {
  appName: string;
  appDescription: string;
  apiUrl: string;
  maintenanceMode: boolean;
  apiKey: string;
  webhookSecret: string;
  twoFactorAuth: boolean;
  ipWhitelist: boolean;
  dbHost: string;
  dbName: string;
  autoBackup: boolean;
  dataRetention: boolean;
  emailNotifications: string;
  emailAlerts: boolean;
  systemHealthReports: boolean;
  userActivityAlerts: boolean;
}

const initialSettings: SettingsData = {
  appName: "RecommendEngine",
  appDescription: "AI-powered recommendation system",
  apiUrl: "https://api.recommendengine.com",
  maintenanceMode: false,
  apiKey: "••••••••••••••••",
  webhookSecret: "••••••••••••••••",
  twoFactorAuth: false,
  ipWhitelist: false,
  dbHost: "localhost:5432",
  dbName: "recommendengine",
  autoBackup: true,
  dataRetention: true,
  emailNotifications: "admin@example.com",
  emailAlerts: true,
  systemHealthReports: true,
  userActivityAlerts: false,
};

export function SettingsSection() {
  const [settings, setSettings] = useState<SettingsData>(initialSettings);
  const [hasChanges, setHasChanges] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof SettingsData, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [field]: value }));
    setHasChanges(true);
  };

  const generateApiKey = () => {
    const newApiKey = `sk_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
    handleInputChange('apiKey', newApiKey);
    toast({
      title: "API Key Generated",
      description: "New API key has been generated. Make sure to save your settings.",
    });
  };

  const saveSettings = () => {
    // Simulate API call
    setTimeout(() => {
      setHasChanges(false);
      toast({
        title: "Settings Saved",
        description: "Your settings have been saved successfully.",
      });
    }, 500);
  };

  const resetToDefaults = () => {
    setSettings(initialSettings);
    setHasChanges(true);
    toast({
      title: "Settings Reset",
      description: "Settings have been reset to default values. Remember to save changes.",
    });
  };

  return (
    <div className="container p-6 mx-auto max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Configure your recommendation engine settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
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
                onChange={(e) => handleInputChange('appName', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-description">Description</Label>
              <Input 
                id="app-description" 
                value={settings.appDescription}
                onChange={(e) => handleInputChange('appDescription', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="api-url">API Base URL</Label>
              <Input 
                id="api-url" 
                value={settings.apiUrl}
                onChange={(e) => handleInputChange('apiUrl', e.target.value)}
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
                onCheckedChange={(checked) => handleInputChange('maintenanceMode', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="api-key">API Key</Label>
              <div className="flex gap-2">
                <Input 
                  id="api-key" 
                  type="password" 
                  value={settings.apiKey}
                  onChange={(e) => handleInputChange('apiKey', e.target.value)}
                />
                <Button variant="outline" onClick={generateApiKey}>Regenerate</Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="webhook-secret">Webhook Secret</Label>
              <Input 
                id="webhook-secret" 
                type="password" 
                value={settings.webhookSecret}
                onChange={(e) => handleInputChange('webhookSecret', e.target.value)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
              <Switch 
                checked={settings.twoFactorAuth}
                onCheckedChange={(checked) => handleInputChange('twoFactorAuth', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>IP Whitelist</Label>
                <p className="text-sm text-muted-foreground">Restrict API access to specific IPs</p>
              </div>
              <Switch 
                checked={settings.ipWhitelist}
                onCheckedChange={(checked) => handleInputChange('ipWhitelist', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Database Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Database Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="db-host">Database Host</Label>
              <Input 
                id="db-host" 
                value={settings.dbHost}
                onChange={(e) => handleInputChange('dbHost', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="db-name">Database Name</Label>
              <Input 
                id="db-name" 
                value={settings.dbName}
                onChange={(e) => handleInputChange('dbName', e.target.value)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto Backup</Label>
                <p className="text-sm text-muted-foreground">Automatically backup data daily</p>
              </div>
              <Switch 
                checked={settings.autoBackup}
                onCheckedChange={(checked) => handleInputChange('autoBackup', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Data Retention</Label>
                <p className="text-sm text-muted-foreground">Keep logs for 30 days</p>
              </div>
              <Switch 
                checked={settings.dataRetention}
                onCheckedChange={(checked) => handleInputChange('dataRetention', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
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
                onChange={(e) => handleInputChange('emailNotifications', e.target.value)}
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
                onCheckedChange={(checked) => handleInputChange('emailAlerts', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>System Health Reports</Label>
                <p className="text-sm text-muted-foreground">Weekly system performance reports</p>
              </div>
              <Switch 
                checked={settings.systemHealthReports}
                onCheckedChange={(checked) => handleInputChange('systemHealthReports', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>User Activity Alerts</Label>
                <p className="text-sm text-muted-foreground">Notifications for unusual user activity</p>
              </div>
              <Switch 
                checked={settings.userActivityAlerts}
                onCheckedChange={(checked) => handleInputChange('userActivityAlerts', checked)}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex justify-end gap-4">
        <Button variant="outline" onClick={resetToDefaults}>
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset to Defaults
        </Button>
        <Button 
          onClick={saveSettings}
          disabled={!hasChanges}
          className={hasChanges ? "bg-green-600 hover:bg-green-700" : ""}
        >
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );
}
