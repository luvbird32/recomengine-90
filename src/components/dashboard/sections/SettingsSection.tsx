
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { GeneralSettings } from "../settings/GeneralSettings";
import { SecuritySettings } from "../settings/SecuritySettings";
import { DatabaseSettings } from "../settings/DatabaseSettings";
import { NotificationSettings } from "../settings/NotificationSettings";
import { SettingsActions } from "../settings/SettingsActions";

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

const SETTINGS_STORAGE_KEY = 'dashboard_settings';

export function SettingsSection() {
  const [settings, setSettings] = useState<SettingsData>(initialSettings);
  const [hasChanges, setHasChanges] = useState(false);
  const [originalSettings, setOriginalSettings] = useState<SettingsData>(initialSettings);
  const { toast } = useToast();

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        setOriginalSettings(parsed);
      } catch (error) {
        console.error('Failed to parse saved settings:', error);
      }
    }
  }, []);

  // Check for changes whenever settings update
  useEffect(() => {
    const hasActualChanges = JSON.stringify(settings) !== JSON.stringify(originalSettings);
    setHasChanges(hasActualChanges);
  }, [settings, originalSettings]);

  const handleInputChange = (field: keyof SettingsData, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const generateApiKey = () => {
    const newApiKey = `sk_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
    handleInputChange('apiKey', newApiKey);
    toast({
      title: "API Key Generated",
      description: "New API key has been generated. Make sure to save your settings.",
    });
  };

  const generateWebhookSecret = () => {
    const newSecret = `whsec_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
    handleInputChange('webhookSecret', newSecret);
    toast({
      title: "Webhook Secret Generated",
      description: "New webhook secret has been generated. Make sure to save your settings.",
    });
  };

  const saveSettings = () => {
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
      setOriginalSettings(settings);
      setHasChanges(false);
      
      // Simulate maintenance mode effect
      if (settings.maintenanceMode) {
        toast({
          title: "Maintenance Mode Enabled",
          description: "Your application is now in maintenance mode. Users will see a maintenance page.",
          variant: "destructive",
        });
      }

      toast({
        title: "Settings Saved",
        description: "Your settings have been saved successfully.",
      });
    } catch (error) {
      toast({
        title: "Save Failed",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      });
    }
  };

  const resetToDefaults = () => {
    setSettings(initialSettings);
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
        {hasChanges && (
          <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="text-sm text-yellow-800">You have unsaved changes</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GeneralSettings 
          settings={{
            appName: settings.appName,
            appDescription: settings.appDescription,
            apiUrl: settings.apiUrl,
            maintenanceMode: settings.maintenanceMode,
          }}
          onInputChange={handleInputChange}
        />

        <SecuritySettings 
          settings={{
            apiKey: settings.apiKey,
            webhookSecret: settings.webhookSecret,
            twoFactorAuth: settings.twoFactorAuth,
            ipWhitelist: settings.ipWhitelist,
          }}
          onInputChange={handleInputChange}
          onGenerateApiKey={generateApiKey}
          onGenerateWebhookSecret={generateWebhookSecret}
        />

        <DatabaseSettings 
          settings={{
            dbHost: settings.dbHost,
            dbName: settings.dbName,
            autoBackup: settings.autoBackup,
            dataRetention: settings.dataRetention,
          }}
          onInputChange={handleInputChange}
        />

        <NotificationSettings 
          settings={{
            emailNotifications: settings.emailNotifications,
            emailAlerts: settings.emailAlerts,
            systemHealthReports: settings.systemHealthReports,
            userActivityAlerts: settings.userActivityAlerts,
          }}
          onInputChange={handleInputChange}
        />
      </div>

      <SettingsActions 
        hasChanges={hasChanges}
        onSave={saveSettings}
        onReset={resetToDefaults}
      />
    </div>
  );
}
