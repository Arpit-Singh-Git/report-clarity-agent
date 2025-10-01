import { FileText, AlertCircle, CheckCircle2, Clock, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Report {
  id: string;
  name: string;
  status: "complete" | "incomplete" | "scanning";
  healthScore: number;
  lastUpdated: string;
  alerts: number;
}

const mockReports: Report[] = [
  {
    id: "1",
    name: "Sales Performance Dashboard",
    status: "complete",
    healthScore: 95,
    lastUpdated: "2 hours ago",
    alerts: 0,
  },
  {
    id: "2",
    name: "Customer Analytics Report",
    status: "scanning",
    healthScore: 72,
    lastUpdated: "Scanning now",
    alerts: 3,
  },
  {
    id: "3",
    name: "Revenue Forecast Model",
    status: "incomplete",
    healthScore: 45,
    lastUpdated: "1 day ago",
    alerts: 8,
  },
  {
    id: "4",
    name: "Marketing Campaign ROI",
    status: "complete",
    healthScore: 88,
    lastUpdated: "5 hours ago",
    alerts: 1,
  },
  {
    id: "5",
    name: "Supply Chain Metrics",
    status: "scanning",
    healthScore: 67,
    lastUpdated: "Scanning now",
    alerts: 4,
  },
];

const getStatusBadge = (status: Report["status"]) => {
  switch (status) {
    case "complete":
      return <Badge variant="success">Complete</Badge>;
    case "scanning":
      return <Badge variant="info" className="animate-pulse-glow">Scanning</Badge>;
    case "incomplete":
      return <Badge variant="warning">Incomplete</Badge>;
  }
};

const getHealthColor = (score: number) => {
  if (score >= 80) return "text-success";
  if (score >= 60) return "text-warning";
  return "text-destructive";
};

export const ReportsList = () => {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Reports & Dashboards</h2>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>

        <div className="space-y-3">
          {mockReports.map((report) => (
            <div
              key={report.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-accent/50 transition-smooth hover:shadow-lg hover:-translate-y-1 group cursor-pointer"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:shadow-glow transition-smooth">
                  <FileText className="h-5 w-5 text-accent" />
                </div>
                
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{report.name}</p>
                    {getStatusBadge(report.status)}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {report.lastUpdated}
                    </span>
                    {report.alerts > 0 && (
                      <span className="flex items-center gap-1 text-warning">
                        <AlertCircle className="h-3 w-3" />
                        {report.alerts} alerts
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Health Score</p>
                    <p className={`text-lg font-bold ${getHealthColor(report.healthScore)}`}>
                      {report.healthScore}%
                    </p>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-smooth"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};