
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { FileSpreadsheet, TrendingUp, Upload } from "lucide-react";

interface Task {
  id: string;
  title: string;
  icon: React.ElementType;
  completed: boolean;
  dueDate: string;
}

export function TasksList() {
  const tasks: Task[] = [
    {
      id: "1",
      title: "Upload Q1 utility bills",
      icon: Upload,
      completed: false,
      dueDate: "May 25, 2025",
    },
    {
      id: "2",
      title: "Review Scope 3 emissions data",
      icon: FileSpreadsheet,
      completed: false,
      dueDate: "June 2, 2025",
    },
    {
      id: "3",
      title: "Set carbon reduction targets",
      icon: TrendingUp,
      completed: false,
      dueDate: "June 10, 2025",
    },
    {
      id: "4",
      title: "Export Q2 ESG report",
      icon: FileSpreadsheet,
      completed: false,
      dueDate: "July 15, 2025",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pending Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center space-x-3 border-b border-border pb-3 last:border-0 last:pb-0"
            >
              <Checkbox id={`task-${task.id}`} />
              <div className="flex-1">
                <label
                  htmlFor={`task-${task.id}`}
                  className="text-sm font-medium cursor-pointer"
                >
                  {task.title}
                </label>
                <p className="text-xs text-muted-foreground">
                  Due: {task.dueDate}
                </p>
              </div>
              <task.icon className="h-5 w-5 text-muted-foreground" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
