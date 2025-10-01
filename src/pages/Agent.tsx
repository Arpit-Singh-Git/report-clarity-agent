import { AIAgentStatus } from "@/components/AIAgentStatus";
import { ActivityTimeline } from "@/components/ActivityTimeline";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Clock, CheckCircle2 } from "lucide-react";

const Agent = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">AI Agent Control Center</h1>
        <p className="text-muted-foreground mt-2">
          Monitor and configure your autonomous documentation agent
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                <Brain className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">AI Model</p>
                <p className="font-semibold">GPT-4 Advanced</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center">
                <Zap className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Processing Speed</p>
                <p className="font-semibold">42 reports/hour</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-info/20 to-info/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-info" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Uptime</p>
                <p className="font-semibold">99.97%</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <AIAgentStatus />
        <ActivityTimeline />
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Agent Capabilities</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Automatic report metadata scanning",
            "Data lineage tracing & visualization",
            "Documentation generation (technical & business)",
            "Gap detection & proactive alerting",
            "Multi-source data integration",
            "Real-time documentation updates",
          ].map((capability, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CheckCircle2 className="h-5 w-5 text-success" />
              <span className="text-sm">{capability}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Agent;