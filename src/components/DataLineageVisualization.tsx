import { Card } from "@/components/ui/card";
import { Database, ArrowRight, Layers, BarChart3 } from "lucide-react";

export const DataLineageVisualization = () => {
  const nodes = [
    { id: 1, label: "Source DB", icon: Database, color: "from-blue-500 to-blue-600" },
    { id: 2, label: "Transform", icon: Layers, color: "from-purple-500 to-purple-600" },
    { id: 3, label: "Aggregate", icon: Layers, color: "from-purple-500 to-purple-600" },
    { id: 4, label: "Dashboard", icon: BarChart3, color: "from-green-500 to-green-600" },
  ];

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Data Lineage</h3>
          <p className="text-sm text-muted-foreground">
            AI-traced data flow from source to visualization
          </p>
        </div>

        <div className="flex items-center justify-between py-8 px-4">
          {nodes.map((node, index) => (
            <div key={node.id} className="flex items-center animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex flex-col items-center gap-3">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center shadow-lg hover:scale-110 transition-smooth cursor-pointer`}>
                  <node.icon className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm font-medium">{node.label}</span>
              </div>
              
              {index < nodes.length - 1 && (
                <div className="mx-6 flex items-center">
                  <div className="w-20 h-0.5 bg-gradient-to-r from-accent to-secondary animate-pulse-glow" />
                  <ArrowRight className="h-5 w-5 text-accent -ml-2" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">3</p>
            <p className="text-xs text-muted-foreground">Transformation Steps</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-success">12</p>
            <p className="text-xs text-muted-foreground">Data Sources</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-info">99.8%</p>
            <p className="text-xs text-muted-foreground">Quality Score</p>
          </div>
        </div>
      </div>
    </Card>
  );
};