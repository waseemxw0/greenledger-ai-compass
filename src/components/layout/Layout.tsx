
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <main className={cn("flex-1 p-6 overflow-auto", className)}>
        {children}
      </main>
    </div>
  );
}
