import { AlertsSidebar } from "@/components/AlertsSidebar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, XCircle, Info, TrendingDown, TrendingUp } from "lucide-react";

const Alerts = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Alerts & Issues</h1>
        <p className="text-muted-foreground mt-2">
          Track and resolve documentation gaps and inconsistencies
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Critical</p>
              <XCircle className="h-5 w-5 text-destructive" />
            </div>
            <p className="text-3xl font-bold">8</p>
            <div className="flex items-center gap-1 text-xs text-destructive">
              <TrendingUp className="h-3 w-3" />
              +2 from yesterday
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Warnings</p>
              <AlertTriangle className="h-5 w-5 text-warning" />
            </div>
            <p className="text-3xl font-bold">15</p>
            <div className="flex items-center gap-1 text-xs text-success">
              <TrendingDown className="h-3 w-3" />
              -3 from yesterday
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Info</p>
              <Info className="h-5 w-5 text-info" />
            </div>
            <p className="text-3xl font-bold">12</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              No change
            </div>
          </div>
        </Card>
      </div>

      <AlertsSidebar />
    </div>
  );
};

export default Alerts;