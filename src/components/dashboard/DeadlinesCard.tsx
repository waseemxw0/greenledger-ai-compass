
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock, Calendar } from "lucide-react";
import { useDeadlines } from "@/hooks/useDeadlines";
import { format } from "date-fns";

export function DeadlinesCard(): JSX.Element {
  const { data, isLoading } = useDeadlines();
  const upcoming = data?.upcoming ?? [];

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
      </CardHeader>
      <CardContent className="pt-2 relative">
        {isLoading || upcoming.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
            <Calendar className="h-12 w-12 mb-3 text-gray-300" />
            <p className="text-center text-sm">No upcoming deadlines</p>
            <p className="text-center text-xs mt-1">Stay compliant with regulations</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-4">
            {upcoming.slice(0, 3).map((deadline) => (
              <li key={deadline.id} className="flex items-center justify-between border-b last:border-b-0 pb-2 last:pb-0">
                <div className="text-base font-medium">{deadline.title}</div>
                <div className="text-xs text-gray-500">
                  {deadline.due_date ? format(new Date(deadline.due_date), "dd MMM yyyy") : ""}
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
