
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock, Bell } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Deadline {
  id: string;
  title: string;
  date: string;
  daysLeft: number;
  priority: "high" | "medium" | "low";
}

export function DeadlinesCard() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [viewAll, setViewAll] = useState(false);
  
  const deadlines: Deadline[] = [
    {
      id: "1",
      title: "VSME Annual Report",
      date: "June 30, 2025",
      daysLeft: 45,
      priority: "high"
    },
    {
      id: "2",
      title: "EU CSRD Disclosure",
      date: "September 15, 2025",
      daysLeft: 120,
      priority: "medium"
    },
    {
      id: "3",
      title: "SEC Climate Disclosure",
      date: "December 1, 2025",
      daysLeft: 195,
      priority: "low"
    },
    {
      id: "4",
      title: "Carbon Footprint Audit",
      date: "August 12, 2025",
      daysLeft: 87,
      priority: "medium"
    },
    {
      id: "5",
      title: "Water Usage Report",
      date: "October 5, 2025",
      daysLeft: 141,
      priority: "low"
    }
  ];

  // Show only first 3 deadlines unless viewAll is true
  const visibleDeadlines = viewAll ? deadlines : deadlines.slice(0, 3);
  
  return (
    <Card className="shadow-soft border-t-4 border-t-purple-500 overflow-hidden group backdrop-blur-sm relative transition-all duration-300 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <CardHeader className="pb-2 relative flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <span className="bg-purple-100 text-purple-600 p-1.5 rounded-full shadow-inner">
            <CalendarClock className="h-4 w-4" />
          </span>
          <span>Regulatory Deadlines</span>
        </CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-purple-50 hover:text-purple-600">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notification settings</span>
        </Button>
      </CardHeader>
      <CardContent className="pt-2 relative">
        <div className="space-y-3 max-h-[350px] overflow-y-auto scrollbar-thin">
          {visibleDeadlines.map((deadline) => (
            <div 
              key={deadline.id} 
              className={`flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 border border-border rounded-lg transition-all duration-300 ${
                hoveredId === deadline.id 
                  ? 'transform scale-[1.02] shadow-md bg-slate-50 dark:bg-slate-800/50' 
                  : 'hover:bg-muted/20'
              }`}
              onMouseEnter={() => setHoveredId(deadline.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`
                rounded-full p-2 sm:p-2.5 transition-all duration-300 ${
                  deadline.daysLeft < 60 ? 'bg-gradient-to-br from-red-100 to-red-200 text-red-600' : 
                  deadline.daysLeft < 120 ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-600' : 
                  'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600'
                } ${hoveredId === deadline.id ? 'shadow-inner' : ''}
              `}>
                <CalendarClock className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-xs sm:text-sm font-medium truncate transition-all duration-300 ${
                  hoveredId === deadline.id ? 'text-primary' : ''
                }`}>{deadline.title}</p>
                <div className="flex items-center gap-1 sm:gap-2">
                  <p className="text-xs text-muted-foreground">{deadline.date}</p>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    deadline.priority === 'high' ? 'bg-red-500 animate-pulse' : 
                    deadline.priority === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}></span>
                  <span className="text-xs text-muted-foreground capitalize hidden sm:inline">{deadline.priority}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className={`
                  text-xs sm:text-sm font-medium px-2 sm:px-2.5 py-0.5 rounded-full transition-all duration-300
                  ${deadline.daysLeft < 60 
                    ? 'bg-gradient-to-r from-red-100 to-red-50 text-red-800' : 
                    deadline.daysLeft < 120 
                    ? 'bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800' : 
                    'bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800'
                  } ${hoveredId === deadline.id ? 'shadow-sm' : ''}
                `}>
                  {deadline.daysLeft} days
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {deadlines.length > 3 && (
          <div className="mt-3 text-center">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setViewAll(!viewAll)}
              className="text-xs text-purple-600 hover:text-purple-700 hover:bg-purple-50 w-full sm:w-auto"
            >
              {viewAll ? "Show Less" : `View All (${deadlines.length})`}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
