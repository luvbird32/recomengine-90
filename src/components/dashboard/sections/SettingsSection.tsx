
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GeneralSettings } from "../settings/GeneralSettings";
import { SecuritySettings } from "../settings/SecuritySettings";
import { DatabaseSettings } from "../settings/DatabaseSettings";
import { NotificationSettings } from "../settings/NotificationSettings";
import { SettingsActions } from "../settings/SettingsActions";
import { SettingsHeader } from "../settings/SettingsHeader";
import { DeveloperSection } from "../settings/DeveloperSection";
import { useSettings } from "../settings/useSettings";

export function SettingsSection() {
  const {
    settings,
    hasChanges,
    handleInputChange,
    generateApiKey,
    generateWebhookSecret,
    saveSettings,
    resetToDefaults,
  } = useSettings();

  return (
    <div className="container p-6 mx-auto max-w-7xl">
      <SettingsHeader hasChanges={hasChanges} />

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="developer">Developer</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6">
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
          </div>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
          </div>
        </TabsContent>

        <TabsContent value="database" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DatabaseSettings 
              settings={{
                dbHost: settings.dbHost,
                dbName: settings.dbName,
                autoBackup: settings.autoBackup,
                dataRetention: settings.dataRetention,
              }}
              onInputChange={handleInputChange}
            />
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
        </TabsContent>

        <TabsContent value="developer" className="mt-6">
          <DeveloperSection />
        </TabsContent>
      </Tabs>

      <SettingsActions 
        hasChanges={hasChanges}
        onSave={saveSettings}
        onReset={resetToDefaults}
      />
    </div>
  );
}
