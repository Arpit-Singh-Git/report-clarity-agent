import { FileText, AlertTriangle, TrendingUp, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  trend: "up" | "down" | "neutral";
}

const MetricCard = ({ title, value, change, icon, trend }: MetricCardProps) => {
  const trendColor = trend === "up" ? "text-success" : trend === "down" ? "text-destructive" : "text-muted-foreground";
  
  return (
    <Card className="p-6 transition-smooth hover:shadow-lg hover:border-accent/30 hover:-translate-y-1 cursor-pointer group">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
          <p className={`text-xs ${trendColor} flex items-center gap-1`}>
            {trend === "up" && <TrendingUp className="h-3 w-3" />}
            {change}
          </p>
        </div>
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center group-hover:shadow-glow transition-smooth">
          {icon}
        </div>
      </div>
    </Card>
  );
};

export const MetricsGrid = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Total Reports"
        value="342"
        change="+12% from last week"
        icon={<FileText className="h-6 w-6 text-accent" />}
        trend="up"
      />
      <MetricCard
        title="Documentation Health"
        value="87%"
        change="+5% improvement"
        icon={<CheckCircle2 className="h-6 w-6 text-success" />}
        trend="up"
      />
      <MetricCard
        title="Active Alerts"
        value="23"
        change="Needs attention"
        icon={<AlertTriangle className="h-6 w-6 text-warning" />}
        trend="neutral"
      />
      <MetricCard
        title="Auto-Generated Docs"
        value="156"
        change="+18 today"
        icon={<TrendingUp className="h-6 w-6 text-info" />}
        trend="up"
      />
    </div>
  );
};