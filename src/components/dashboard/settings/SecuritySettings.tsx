
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Shield } from "lucide-react";

interface SecuritySettingsProps {
  settings: {
    apiKey: string;
    webhookSecret: string;
    twoFactorAuth: boolean;
    ipWhitelist: boolean;
  };
  onInputChange: (field: string, value: string | boolean) => void;
  onGenerateApiKey: () => void;
}

export function SecuritySettings({ settings, onInputChange, onGenerateApiKey }: SecuritySettingsProps) {
  return (
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
              onChange={(e) => onInputChange('apiKey', e.target.value)}
            />
            <Button variant="outline" onClick={onGenerateApiKey}>Regenerate</Button>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="webhook-secret">Webhook Secret</Label>
          <Input 
            id="webhook-secret" 
            type="password" 
            value={settings.webhookSecret}
            onChange={(e) => onInputChange('webhookSecret', e.target.value)}
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
            onCheckedChange={(checked) => onInputChange('twoFactorAuth', checked)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>IP Whitelist</Label>
            <p className="text-sm text-muted-foreground">Restrict API access to specific IPs</p>
          </div>
          <Switch 
            checked={settings.ipWhitelist}
            onCheckedChange={(checked) => onInputChange('ipWhitelist', checked)}
          />
        </div>
      </CardContent>
    </Card>
  );
}
