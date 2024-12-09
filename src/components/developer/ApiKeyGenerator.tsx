import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Key } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function ApiKeyGenerator() {
  const [apiKey, setApiKey] = useState<string>("");
  const { toast } = useToast();

  const generateApiKey = () => {
    // Generate a random API key (in a real app, this would be handled by the backend)
    const key = 'rec_' + Array.from(crypto.getRandomValues(new Uint8Array(32)))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
      .slice(0, 32);
    setApiKey(key);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(apiKey);
    toast({
      title: "Copied to clipboard",
      description: "Your API key has been copied to your clipboard.",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Button onClick={generateApiKey} className="gap-2">
          <Key className="h-4 w-4" />
          Generate API Key
        </Button>
      </div>
      {apiKey && (
        <div className="flex items-center gap-2">
          <Input
            value={apiKey}
            readOnly
            className="font-mono text-sm"
          />
          <Button variant="outline" size="icon" onClick={copyToClipboard}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}