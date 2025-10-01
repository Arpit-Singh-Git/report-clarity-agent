import { ActivityTimeline } from "@/components/ActivityTimeline";
import { Card } from "@/components/ui/card";
import { HealthChart } from "@/components/HealthChart";

const Activity = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Activity Monitor</h1>
        <p className="text-muted-foreground mt-2">
          Real-time feed of AI agent operations and system events
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ActivityTimeline />
        <HealthChart />
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Today's Summary</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="text-center p-4 rounded-lg bg-muted/50">
            <p className="text-3xl font-bold text-accent">127</p>
            <p className="text-sm text-muted-foreground mt-1">Reports Scanned</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted/50">
            <p className="text-3xl font-bold text-success">43</p>
            <p className="text-sm text-muted-foreground mt-1">Docs Generated</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted/50">
            <p className="text-3xl font-bold text-warning">23</p>
            <p className="text-sm text-muted-foreground mt-1">Alerts Raised</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted/50">
            <p className="text-3xl font-bold text-info">156</p>
            <p className="text-sm text-muted-foreground mt-1">Updates Made</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Activity;