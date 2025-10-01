import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Code, Sparkles, Clock } from "lucide-react";

interface DocumentationViewerProps {
  reportName: string;
  lastUpdated: string;
}

export const DocumentationViewer = ({ reportName, lastUpdated }: DocumentationViewerProps) => {
  const [audience, setAudience] = useState<"technical" | "non-technical">("non-technical");

  const technicalContent = {
    title: "Technical Documentation",
    sections: [
      {
        heading: "Data Source",
        content: "PostgreSQL database (prod-analytics-01) via dbt transformation pipeline. Source tables: sales_transactions, customer_profiles, product_catalog.",
      },
      {
        heading: "Transformations",
        content: "Applies aggregate functions (SUM, AVG) with GROUP BY on date dimensions. Includes window functions for running totals and RANK() for top performers.",
      },
      {
        heading: "Refresh Schedule",
        content: "Incremental refresh every 6 hours (00:00, 06:00, 12:00, 18:00 UTC). Full refresh weekly on Sunday 02:00 UTC.",
      },
    ],
  };

  const nonTechnicalContent = {
    title: "Business Documentation",
    sections: [
      {
        heading: "What This Report Shows",
        content: "This dashboard tracks your sales performance across all regions and products. It updates automatically throughout the day.",
      },
      {
        heading: "Key Metrics",
        content: "Total revenue, number of customers, and average order value. The trend lines show how these metrics change over time.",
      },
      {
        heading: "How Often It Updates",
        content: "The data refreshes four times daily, ensuring you always see recent activity. A full data check happens every Sunday morning.",
      },
    ],
  };

  const content = audience === "technical" ? technicalContent : nonTechnicalContent;

  return (
    <Card className="p-6 space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">{reportName}</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
            <Clock className="h-3 w-3" />
            Last updated: {lastUpdated}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Audience:</span>
          <Button
            variant={audience === "non-technical" ? "default" : "outline"}
            size="sm"
            onClick={() => setAudience("non-technical")}
            className="transition-smooth"
          >
            <User className="h-4 w-4 mr-1" />
            Business
          </Button>
          <Button
            variant={audience === "technical" ? "default" : "outline"}
            size="sm"
            onClick={() => setAudience("technical")}
            className="transition-smooth"
          >
            <Code className="h-4 w-4 mr-1" />
            Technical
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg border border-accent/20">
        <Sparkles className="h-5 w-5 text-accent animate-pulse-glow" />
        <p className="text-sm">
          <span className="font-medium">AI-Generated Documentation</span>
          <span className="text-muted-foreground"> • Automatically updated</span>
        </p>
      </div>

      <div className="space-y-6">
        <h4 className="font-semibold text-lg">{content.title}</h4>
        
        {content.sections.map((section, index) => (
          <div key={index} className="space-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <h5 className="font-medium flex items-center gap-2">
              {section.heading}
              <Badge variant="outline" className="text-xs">
                Auto-generated
              </Badge>
            </h5>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};