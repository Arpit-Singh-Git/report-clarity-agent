import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Reports from "./pages/Reports";
import Agent from "./pages/Agent";
import Alerts from "./pages/Alerts";
import Activity from "./pages/Activity";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <SidebarProvider>
    <div className="flex min-h-screen w-full bg-gradient-subtle">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  </SidebarProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout><Index /></AppLayout>} />
          <Route path="/reports" element={<AppLayout><Reports /></AppLayout>} />
          <Route path="/agent" element={<AppLayout><Agent /></AppLayout>} />
          <Route path="/alerts" element={<AppLayout><Alerts /></AppLayout>} />
          <Route path="/activity" element={<AppLayout><Activity /></AppLayout>} />
          <Route path="/settings" element={<AppLayout><Settings /></AppLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
