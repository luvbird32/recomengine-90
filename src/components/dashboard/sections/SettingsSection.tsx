
import { GeneralSettings } from "../settings/GeneralSettings";
import { SecuritySettings } from "../settings/SecuritySettings";
import { DatabaseSettings } from "../settings/DatabaseSettings";
import { NotificationSettings } from "../settings/NotificationSettings";
import { SettingsActions } from "../settings/SettingsActions";
import { SettingsHeader } from "../settings/SettingsHeader";
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
