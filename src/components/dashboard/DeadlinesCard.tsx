
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock } from "lucide-react";
import { useState } from "react";

interface Deadline {
  id: string;
  title: string;
  date: string;
  daysLeft: number;
}

export function DeadlinesCard() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  const deadlines: Deadline[] = [
    {
      id: "1",
      title: "VSME Annual Report",
      date: "June 30, 2025",
      daysLeft: 45,
    },
    {
      id: "2",
      title: "EU CSRD Disclosure",
      date: "September 15, 2025",
      daysLeft: 120,
    },
    {
      id: "3",
      title: "SEC Climate Disclosure",
      date: "December 1, 2025",
      daysLeft: 195,
    },
  ];

  return (
    <Card className="shadow-soft border-t-4 border-t-purple-500 overflow-hidden group backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <CardHeader className="pb-2 relative">
        <CardTitle className="flex items-center gap-2">
          <span className="bg-purple-100 text-purple-600 p-1.5 rounded-full">
            <CalendarClock className="h-4 w-4" />
          </span>
          <span>Regulatory Deadlines</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2 relative">
        <div className="space-y-3">
          {deadlines.map((deadline) => (
            <div 
              key={deadline.id} 
              className={`flex items-center space-x-3 p-3 border border-border rounded-lg transition-all duration-300 ${
                hoveredId === deadline.id 
                  ? 'transform scale-[1.02] shadow-md bg-slate-50 dark:bg-slate-800/50' 
                  : 'hover:bg-muted/20'
              }`}
              onMouseEnter={() => setHoveredId(deadline.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`
                rounded-full p-2.5 transition-all duration-300 ${
                  deadline.daysLeft < 60 ? 'bg-gradient-to-br from-red-100 to-red-200 text-red-600' : 
                  deadline.daysLeft < 120 ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-600' : 
                  'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600'
                } ${hoveredId === deadline.id ? 'shadow-inner' : ''}
              `}>
                <CalendarClock className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className={`text-sm font-medium transition-all duration-300 ${
                  hoveredId === deadline.id ? 'text-primary' : ''
                }`}>{deadline.title}</p>
                <p className="text-xs text-muted-foreground">{deadline.date}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`
                  text-sm font-medium px-2.5 py-0.5 rounded-full transition-all duration-300
                  ${deadline.daysLeft < 60 
                    ? 'bg-gradient-to-r from-red-100 to-red-50 text-red-800' : 
                    deadline.daysLeft < 120 
                    ? 'bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800' : 
                    'bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800'
                  } ${hoveredId === deadline.id ? 'shadow-sm' : ''}
                `}>
                  {deadline.daysLeft} days
                </span>
                <span className={`w-1.5 h-1.5 rounded-full ${
                  deadline.daysLeft < 60 ? 'bg-red-500 animate-pulse' : 
                  deadline.daysLeft < 120 ? 'bg-yellow-500' : 'bg-blue-500'
                }`}></span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
