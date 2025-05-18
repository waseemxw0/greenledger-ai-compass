
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex w-full min-h-screen bg-background relative">
      {/* Mobile menu button - only visible on mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden shadow-lg bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden animate-in fade-in"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar with mobile toggle */}
      <div 
        className={cn(
          "fixed inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 shadow-2xl",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Sidebar />
      </div>

      <main 
        className={cn(
          "flex-1 p-4 sm:p-5 lg:p-6 overflow-auto max-h-screen pt-16 md:pt-6", 
          mounted ? "animate-in fade-in slide-in-from-bottom-5 duration-500" : "opacity-0",
          className
        )}
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 -z-10 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl opacity-50 animate-float"></div>
          <div className="absolute top-1/4 left-1/3 -z-10 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
          {children}
        </div>
      </main>
    </div>
  );
}
