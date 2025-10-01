import { AlertTriangle, Info, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Alert {
  id: string;
  type: "error" | "warning" | "info";
  title: string;
  report: string;
  time: string;
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "error",
    title: "Missing data lineage",
    report: "Revenue Forecast Model",
    time: "10 min ago",
  },
  {
    id: "2",
    type: "warning",
    title: "Outdated assumptions",
    report: "Customer Analytics Report",
    time: "25 min ago",
  },
  {
    id: "3",
    type: "info",
    title: "New data source detected",
    report: "Marketing Campaign ROI",
    time: "1 hour ago",
  },
  {
    id: "4",
    type: "error",
    title: "Incomplete definitions",
    report: "Supply Chain Metrics",
    time: "2 hours ago",
  },
  {
    id: "5",
    type: "warning",
    title: "Documentation gap found",
    report: "Sales Performance Dashboard",
    time: "3 hours ago",
  },
];

const getAlertIcon = (type: Alert["type"]) => {
  switch (type) {
    case "error":
      return <XCircle className="h-4 w-4 text-destructive" />;
    case "warning":
      return <AlertTriangle className="h-4 w-4 text-warning" />;
    case "info":
      return <Info className="h-4 w-4 text-info" />;
  }
};

const getAlertBadge = (type: Alert["type"]) => {
  switch (type) {
    case "error":
      return <Badge variant="destructive">Error</Badge>;
    case "warning":
      return <Badge variant="warning">Warning</Badge>;
    case "info":
      return <Badge variant="info">Info</Badge>;
  }
};

export const AlertsSidebar = () => {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Active Alerts</h2>
          <Badge variant="destructive">{mockAlerts.length}</Badge>
        </div>

        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-3">
            {mockAlerts.map((alert) => (
              <div
                key={alert.id}
                className="p-4 rounded-lg border border-border hover:border-accent/50 transition-smooth space-y-2"
              >
                <div className="flex items-start gap-3">
                  {getAlertIcon(alert.type)}
                  <div className="flex-1 space-y-1">
                    <p className="font-medium text-sm">{alert.title}</p>
                    <p className="text-xs text-muted-foreground">{alert.report}</p>
                  </div>
                  {getAlertBadge(alert.type)}
                </div>
                <p className="text-xs text-muted-foreground pl-7">{alert.time}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </Card>
  );
};