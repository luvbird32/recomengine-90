
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { SettingsData, initialSettings, SETTINGS_STORAGE_KEY } from "./types";

export function useSettings() {
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

  return {
    settings,
    hasChanges,
    handleInputChange,
    generateApiKey,
    generateWebhookSecret,
    saveSettings,
    resetToDefaults,
  };
}
