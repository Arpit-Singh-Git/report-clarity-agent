import { DashboardHeader } from "@/components/DashboardHeader";
import { AIAgentStatus } from "@/components/AIAgentStatus";
import { MetricsGrid } from "@/components/MetricsGrid";
import { ReportsList } from "@/components/ReportsList";
import { AlertsSidebar } from "@/components/AlertsSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <DashboardHeader />
      
      <main className="container px-4 py-8 space-y-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <AIAgentStatus />
            <MetricsGrid />
            <ReportsList />
          </div>
          
          <div>
            <AlertsSidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;