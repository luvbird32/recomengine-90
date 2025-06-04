
import { useState } from "react";
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
