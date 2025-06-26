
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useTasks } from "@/hooks/useTasks";
import { format } from "date-fns";

export function TasksList(): JSX.Element {
  const { data, isLoading } = useTasks();

  const pending = data?.pending ?? [];
  const pendingCount = data?.pendingCount ?? 0;

  return (
    <Card className="shadow-soft border-t-4 border-t-blue-500">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Pending Tasks</span>
          <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded-full">{pendingCount}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        {isLoading || pending.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
            <Plus className="h-12 w-12 mb-3 text-gray-300" />
            <p className="text-center text-sm">No tasks yet</p>
            <p className="text-center text-xs mt-1">Add your first task to get started</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-4">
            {pending.slice(0, 3).map((task) => (
              <li key={task.id} className="flex items-center justify-between border-b last:border-b-0 pb-2 last:pb-0">
                <div className="text-base font-medium">{task.title}</div>
                <div className="text-xs text-gray-500">{task.due_date ? format(new Date(task.due_date), "dd MMM yyyy") : ""}</div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
