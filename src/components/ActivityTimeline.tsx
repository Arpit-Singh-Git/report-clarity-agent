import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle2, AlertCircle, Sparkles, FileText } from "lucide-react";

interface ActivityItem {
  id: string;
  type: "scan" | "update" | "alert" | "generate";
  title: string;
  description: string;
  time: string;
  status: "success" | "warning" | "info";
}

const activities: ActivityItem[] = [
  {
    id: "1",
    type: "scan",
    title: "Report Scan Completed",
    description: "Sales Performance Dashboard analyzed successfully",
    time: "2 minutes ago",
    status: "success",
  },
  {
    id: "2",
    type: "generate",
    title: "Documentation Generated",
    description: "AI created business summary for Customer Analytics",
    time: "15 minutes ago",
    status: "info",
  },
  {
    id: "3",
    type: "alert",
    title: "Gap Detected",
    description: "Missing data lineage in Revenue Forecast Model",
    time: "1 hour ago",
    status: "warning",
  },
  {
    id: "4",
    type: "update",
    title: "Schema Updated",
    description: "New data source detected in Supply Chain Metrics",
    time: "2 hours ago",
    status: "info",
  },
  {
    id: "5",
    type: "scan",
    title: "Batch Scan Complete",
    description: "42 reports scanned and documented",
    time: "3 hours ago",
    status: "success",
  },
];

const getIcon = (type: ActivityItem["type"]) => {
  switch (type) {
    case "scan":
      return <CheckCircle2 className="h-5 w-5 text-success" />;
    case "update":
      return <FileText className="h-5 w-5 text-info" />;
    case "alert":
      return <AlertCircle className="h-5 w-5 text-warning" />;
    case "generate":
      return <Sparkles className="h-5 w-5 text-accent" />;
  }
};

const getStatusBadge = (status: ActivityItem["status"]) => {
  switch (status) {
    case "success":
      return <Badge variant="success">Success</Badge>;
    case "warning":
      return <Badge variant="warning">Warning</Badge>;
    case "info":
      return <Badge variant="info">Info</Badge>;
  }
};

export const ActivityTimeline = () => {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className="flex gap-4 p-4 rounded-lg border border-border hover:border-accent/50 transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                  {getIcon(activity.type)}
                </div>
                
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{activity.title}</p>
                    {getStatusBadge(activity.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </Card>
  );
};