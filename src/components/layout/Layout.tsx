
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <main className={cn(
        "flex-1 p-6 overflow-auto max-h-screen", 
        mounted ? "animate-fade-slide-in" : "opacity-0",
        className
      )}>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 -z-10 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl opacity-50 animate-float"></div>
          {children}
        </div>
      </main>
    </div>
  );
}
