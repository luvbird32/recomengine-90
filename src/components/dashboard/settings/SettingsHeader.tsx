
interface SettingsHeaderProps {
  hasChanges: boolean;
}

export function SettingsHeader({ hasChanges }: SettingsHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="text-muted-foreground">Configure your recommendation engine settings</p>
      {hasChanges && (
        <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-sm text-yellow-800">You have unsaved changes</p>
        </div>
      )}
    </div>
  );
}
