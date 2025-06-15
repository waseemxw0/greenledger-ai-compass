import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3, FileText, Goal, Home, LineChart, PlusCircle, Settings, Upload, User, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SidebarProps {
  className?: string;
}

interface NavItem {
  title: string;
  icon: React.ElementType;
  path: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();

  const mainNavItems: NavItem[] = [
    { title: "Dashboard", icon: Home, path: "/" },
    { title: "Emissions Calculator", icon: BarChart3, path: "/calculator" },
    { title: "Report Generator", icon: FileText, path: "/reports" },
    { title: "Data Manager", icon: Upload, path: "/data" },
    { title: "Goals & Roadmap", icon: Goal, path: "/goals" },
  ];

  const secondaryNavItems: NavItem[] = [
    { title: "Settings", icon: Settings, path: "/settings" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleNewReport = () => {
    navigate("/reports");
  };

  const handleProfileNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <aside
      className={cn(
        "flex flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border h-screen",
        expanded ? "w-64" : "w-16",
        className
      )}
    >
      <div className="p-4 flex items-center gap-3">
        {expanded ? (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-emerald rounded-md flex items-center justify-center shadow-glow">
              <LineChart className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-white">GreenLedger AI™</span>
          </div>
        ) : (
          <div className="h-8 w-8 bg-emerald rounded-md flex items-center justify-center mx-auto shadow-glow">
            <LineChart className="h-5 w-5 text-white" />
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground hidden md:flex"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
              <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
              <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          )}
        </Button>
      </div>

      <div className="mt-6 px-2">
        {expanded ? (
          <Button 
            variant="ghost" 
            className="w-full justify-start px-4 gap-3 mb-6 bg-emerald hover:bg-emerald-dark text-white shadow-soft transition-all duration-300 hover:shadow-glow"
            onClick={handleNewReport}
          >
            <PlusCircle className="sidebar-icon" />
            <span>New Report</span>
          </Button>
        ) : (
          <Button 
            variant="ghost" 
            className="w-full flex justify-center p-2 mb-6 bg-emerald hover:bg-emerald-dark text-white shadow-soft transition-all duration-300 hover:shadow-glow"
            onClick={handleNewReport}
          >
            <PlusCircle className="sidebar-icon" />
          </Button>
        )}

        <div className="space-y-1">
          {mainNavItems.map((item) => (
            <Button
              key={item.title}
              variant="ghost"
              className={cn(
                "w-full justify-start px-4 py-2 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-all duration-200",
                !expanded && "justify-center p-2",
                location.pathname === item.path && "bg-sidebar-accent text-sidebar-foreground font-medium shadow-inner"
              )}
              onClick={() => handleNavigation(item.path)}
            >
              <item.icon className="sidebar-icon" />
              {expanded && <span className="ml-3">{item.title}</span>}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-auto space-y-1 mb-4 px-2">
        {secondaryNavItems.map((item) => (
          <Button
            key={item.title}
            variant="ghost"
            className={cn(
              "w-full justify-start px-4 py-2 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-all duration-200",
              !expanded && "justify-center p-2",
              location.pathname === item.path && "bg-sidebar-accent text-sidebar-foreground font-medium shadow-inner"
            )}
            onClick={() => handleNavigation(item.path)}
          >
            <item.icon className="sidebar-icon" />
            {expanded && <span className="ml-3">{item.title}</span>}
          </Button>
        ))}
      </div>

      <div className="px-4 py-3 border-t border-sidebar-border flex items-center mt-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full p-0 h-auto justify-start hover:bg-sidebar-accent">
              <div className="flex items-center w-full">
                <Avatar className="h-8 w-8 ring-2 ring-emerald/30">
                  <AvatarImage src="" alt="Avatar" />
                  <AvatarFallback className="text-xs bg-emerald text-white">SM</AvatarFallback>
                </Avatar>
                {expanded && (
                  <div className="ml-3 text-left">
                    <p className="text-sm font-medium">Sarah Miller</p>
                    <p className="text-xs text-sidebar-foreground/70">Business Owner</p>
                  </div>
                )}
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleProfileNavigation("/profile")}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleProfileNavigation("/settings")}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Account Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleProfileNavigation("/login")}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}
