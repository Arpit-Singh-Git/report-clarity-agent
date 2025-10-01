import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export const HealthChart = () => {
  const data = [
    { day: "Mon", score: 82 },
    { day: "Tue", score: 85 },
    { day: "Wed", score: 83 },
    { day: "Thu", score: 87 },
    { day: "Fri", score: 89 },
    { day: "Sat", score: 86 },
    { day: "Sun", score: 87 },
  ];

  const maxScore = 100;

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Documentation Health Trend</h3>
            <p className="text-sm text-muted-foreground">Past 7 days</p>
          </div>
          <div className="flex items-center gap-2 text-success">
            <TrendingUp className="h-5 w-5" />
            <span className="text-lg font-bold">+5%</span>
          </div>
        </div>

        <div className="h-48 flex items-end justify-between gap-3 pt-4">
          {data.map((item, index) => (
            <div
              key={item.day}
              className="flex-1 flex flex-col items-center gap-2 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full bg-gradient-to-t from-accent/20 to-accent/5 rounded-t-lg relative group cursor-pointer transition-smooth hover:from-accent/30 hover:to-accent/10">
                <div
                  className="w-full bg-gradient-to-t from-accent to-secondary rounded-t-lg transition-smooth group-hover:from-accent/80 group-hover:to-secondary/80"
                  style={{ height: `${(item.score / maxScore) * 180}px` }}
                />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="bg-card border border-border px-2 py-1 rounded shadow-lg">
                    <p className="text-xs font-medium">{item.score}%</p>
                  </div>
                </div>
              </div>
              <span className="text-xs text-muted-foreground font-medium">{item.day}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};