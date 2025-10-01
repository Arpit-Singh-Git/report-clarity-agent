import { Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between flex-1">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search reports, dashboards..."
            className="pl-9 transition-smooth focus:shadow-md"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative transition-smooth hover:bg-accent/10">
          <Bell className="h-5 w-5" />
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
          >
            3
          </Badge>
        </Button>
        <Button variant="secondary" size="sm" className="transition-smooth">
          Settings
        </Button>
      </div>
    </div>
  );
};