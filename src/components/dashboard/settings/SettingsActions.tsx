
import { Button } from "@/components/ui/button";
import { RotateCcw, Save } from "lucide-react";

interface SettingsActionsProps {
  hasChanges: boolean;
  onSave: () => void;
  onReset: () => void;
}

export function SettingsActions({ hasChanges, onSave, onReset }: SettingsActionsProps) {
  return (
    <div className="mt-8 flex justify-end gap-4">
      <Button variant="outline" onClick={onReset}>
        <RotateCcw className="h-4 w-4 mr-2" />
        Reset to Defaults
      </Button>
      <Button 
        onClick={onSave}
        disabled={!hasChanges}
        className={hasChanges ? "bg-green-600 hover:bg-green-700" : ""}
      >
        <Save className="h-4 w-4 mr-2" />
        Save Changes
      </Button>
    </div>
  );
}
