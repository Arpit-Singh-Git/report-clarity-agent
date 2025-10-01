import { LayoutDashboard, FileText, Activity, AlertTriangle, Settings, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Reports", url: "/reports", icon: FileText },
  { title: "AI Agent", url: "/agent", icon: Sparkles },
  { title: "Alerts", url: "/alerts", icon: AlertTriangle },
  { title: "Activity", url: "/activity", icon: Activity },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar className={open ? "w-64" : "w-16"} collapsible="icon">
      <SidebarContent>
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg gradient-primary shadow-glow">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            {open && (
              <div className="animate-fade-in">
                <h2 className="font-bold">DocuMind AI</h2>
                <p className="text-xs text-muted-foreground">v2.0</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-smooth ${
                          isActive
                            ? "bg-accent text-accent-foreground font-medium"
                            : "hover:bg-muted"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {open && <span className="animate-fade-in">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}