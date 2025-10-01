import { DashboardHeader } from "@/components/DashboardHeader";
import { AIAgentStatus } from "@/components/AIAgentStatus";
import { MetricsGrid } from "@/components/MetricsGrid";
import { ReportsList } from "@/components/ReportsList";
import { AlertsSidebar } from "@/components/AlertsSidebar";
import { DocumentationViewer } from "@/components/DocumentationViewer";
import { DataLineageVisualization } from "@/components/DataLineageVisualization";
import { ActivityTimeline } from "@/components/ActivityTimeline";
import { HealthChart } from "@/components/HealthChart";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Index = () => {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 -m-6 mb-6 px-6 py-3">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <DashboardHeader />
        </div>
      </header>

      <div className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <AIAgentStatus />
            <MetricsGrid />
            <HealthChart />
            <DataLineageVisualization />
            <DocumentationViewer 
              reportName="Sales Performance Dashboard"
              lastUpdated="2 hours ago"
            />
            <ReportsList />
          </div>
          
          <div className="space-y-6">
            <AlertsSidebar />
            <ActivityTimeline />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;