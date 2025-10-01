import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings as SettingsIcon, Save } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Configure your DocuMind AI platform preferences
        </p>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <SettingsIcon className="h-5 w-5" />
          AI Agent Configuration
        </h3>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="scan-frequency">Scan Frequency (hours)</Label>
            <Input
              id="scan-frequency"
              type="number"
              defaultValue="6"
              className="max-w-xs"
            />
            <p className="text-xs text-muted-foreground">
              How often the AI agent scans for report updates
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Auto-generate Documentation</Label>
              <p className="text-xs text-muted-foreground">
                Automatically create docs when new reports are detected
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Proactive Alerts</Label>
              <p className="text-xs text-muted-foreground">
                Receive notifications about documentation gaps
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Real-time Updates</Label>
              <p className="text-xs text-muted-foreground">
                Enable live documentation updates
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Documentation Preferences</h3>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="default-audience">Default Audience</Label>
            <select
              id="default-audience"
              className="flex h-10 w-full max-w-xs rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option>Business (Non-technical)</option>
              <option>Technical</option>
              <option>Both</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Include Data Lineage</Label>
              <p className="text-xs text-muted-foreground">
                Show data flow diagrams in documentation
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Version Control</Label>
              <p className="text-xs text-muted-foreground">
                Keep history of documentation changes
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </Card>

      <div className="flex justify-end">
        <Button className="gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Settings;