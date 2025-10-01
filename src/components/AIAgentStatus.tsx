import { Activity, CheckCircle2, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AIAgentStatus = () => {
  return (
    <Card className="p-6 gradient-subtle border-accent/20 hover:shadow-glow transition-smooth">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center shadow-glow animate-pulse-glow">
                <Activity className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card animate-pulse" />
            </div>
            <div>
              <h3 className="font-semibold">AI Agent Active</h3>
              <p className="text-sm text-muted-foreground">Scanning reports continuously</p>
            </div>
          </div>
          <Badge variant="success" className="animate-pulse-glow">
            <Activity className="h-3 w-3 mr-1" />
            Live
          </Badge>
        </div>

        <div className="space-y-3 pt-4 border-t border-border/50">
          <div className="flex items-center gap-3 text-sm">
            <CheckCircle2 className="h-4 w-4 text-success" />
            <span className="text-muted-foreground">Last scan:</span>
            <span className="font-medium">2 minutes ago</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Clock className="h-4 w-4 text-info" />
            <span className="text-muted-foreground">Reports analyzed:</span>
            <span className="font-medium">127 today</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Activity className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">Documentation updates:</span>
            <span className="font-medium">43 pending</span>
          </div>
        </div>
      </div>
    </Card>
  );
};