
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
    <Card>
      <CardHeader>
        <CardTitle>Regulatory Deadlines</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deadlines.map((deadline) => (
            <div key={deadline.id} className="flex items-center space-x-3 border-b border-border pb-3 last:border-0 last:pb-0">
              <div className="bg-secondary rounded-full p-2">
                <CalendarClock className="h-4 w-4 text-emerald" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{deadline.title}</p>
                <p className="text-xs text-muted-foreground">{deadline.date}</p>
              </div>
              <span className="text-sm font-medium text-emerald">{deadline.daysLeft} days</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
