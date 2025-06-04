
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Shield, Eye, EyeOff, Copy, RefreshCw } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface SecuritySettingsProps {
  settings: {
    apiKey: string;
    webhookSecret: string;
    twoFactorAuth: boolean;
    ipWhitelist: boolean;
  };
  onInputChange: (field: string, value: string | boolean) => void;
  onGenerateApiKey: () => void;
  onGenerateWebhookSecret?: () => void;
}

export function SecuritySettings({ settings, onInputChange, onGenerateApiKey, onGenerateWebhookSecret }: SecuritySettingsProps) {
  const [showApiKey, setShowApiKey] = useState(false);
  const [showWebhookSecret, setShowWebhookSecret] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

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
            <div className="relative flex-1">
              <Input 
                id="api-key" 
                type={showApiKey ? "text" : "password"}
                value={settings.apiKey}
                onChange={(e) => onInputChange('apiKey', e.target.value)}
                className="pr-20"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="h-6 w-6 p-0"
                >
                  {showApiKey ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(settings.apiKey, 'API Key')}
                  className="h-6 w-6 p-0"
                >
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <Button variant="outline" onClick={onGenerateApiKey} size="sm">
              <RefreshCw className="h-4 w-4 mr-1" />
              Generate
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="webhook-secret">Webhook Secret</Label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Input 
                id="webhook-secret" 
                type={showWebhookSecret ? "text" : "password"}
                value={settings.webhookSecret}
                onChange={(e) => onInputChange('webhookSecret', e.target.value)}
                className="pr-20"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowWebhookSecret(!showWebhookSecret)}
                  className="h-6 w-6 p-0"
                >
                  {showWebhookSecret ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(settings.webhookSecret, 'Webhook Secret')}
                  className="h-6 w-6 p-0"
                >
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
            </div>
            {onGenerateWebhookSecret && (
              <Button variant="outline" onClick={onGenerateWebhookSecret} size="sm">
                <RefreshCw className="h-4 w-4 mr-1" />
                Generate
              </Button>
            )}
          </div>
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
