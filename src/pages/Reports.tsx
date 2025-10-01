import { ReportsList } from "@/components/ReportsList";
import { DataLineageVisualization } from "@/components/DataLineageVisualization";

const Reports = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Reports & Dashboards</h1>
        <p className="text-muted-foreground mt-2">
          Manage and explore all your BI reports with AI-powered documentation
        </p>
      </div>
      
      <DataLineageVisualization />
      <ReportsList />
    </div>
  );
};

export default Reports;