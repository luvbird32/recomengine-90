
export interface SettingsData {
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

export const initialSettings: SettingsData = {
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

export const SETTINGS_STORAGE_KEY = 'dashboard_settings';
