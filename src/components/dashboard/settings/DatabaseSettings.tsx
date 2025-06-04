
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Database } from "lucide-react";

interface DatabaseSettingsProps {
  settings: {
    dbHost: string;
    dbName: string;
    autoBackup: boolean;
    dataRetention: boolean;
  };
  onInputChange: (field: string, value: string | boolean) => void;
}

export function DatabaseSettings({ settings, onInputChange }: DatabaseSettingsProps) {
  return (
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
            onChange={(e) => onInputChange('dbHost', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="db-name">Database Name</Label>
          <Input 
            id="db-name" 
            value={settings.dbName}
            onChange={(e) => onInputChange('dbName', e.target.value)}
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
            onCheckedChange={(checked) => onInputChange('autoBackup', checked)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Data Retention</Label>
            <p className="text-sm text-muted-foreground">Keep logs for 30 days</p>
          </div>
          <Switch 
            checked={settings.dataRetention}
            onCheckedChange={(checked) => onInputChange('dataRetention', checked)}
          />
        </div>
      </CardContent>
    </Card>
  );
}
