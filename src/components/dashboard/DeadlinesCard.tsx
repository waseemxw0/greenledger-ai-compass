
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock } from "lucide-react";

interface Deadline {
  id: string;
  title: string;
  date: string;
  daysLeft: number;
}

export function DeadlinesCard() {
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
    <Card className="shadow-soft border-t-4 border-t-purple-500">
      <CardHeader className="pb-2">
        <CardTitle>Regulatory Deadlines</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-3">
          {deadlines.map((deadline) => (
            <div 
              key={deadline.id} 
              className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/20 transition-all duration-200"
            >
              <div className={`
                rounded-full p-2.5
                ${deadline.daysLeft < 60 ? 'bg-red-100 text-red-600' : 
                  deadline.daysLeft < 120 ? 'bg-yellow-100 text-yellow-600' : 
                  'bg-blue-100 text-blue-600'}
              `}>
                <CalendarClock className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{deadline.title}</p>
                <p className="text-xs text-muted-foreground">{deadline.date}</p>
              </div>
              <span className={`
                text-sm font-medium px-2.5 py-0.5 rounded-full
                ${deadline.daysLeft < 60 ? 'bg-red-100 text-red-800' : 
                  deadline.daysLeft < 120 ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-blue-100 text-blue-800'}
              `}>
                {deadline.daysLeft} days
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
