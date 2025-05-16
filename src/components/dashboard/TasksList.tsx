
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { FileSpreadsheet, TrendingUp, Upload, Calendar } from "lucide-react";
import { useState } from "react";

interface Task {
  id: string;
  title: string;
  icon: React.ElementType;
  completed: boolean;
  dueDate: string;
}

export function TasksList() {
  const [tasks, setTasks] = useState<Task[]>([
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
      icon: Calendar,
      completed: false,
      dueDate: "July 15, 2025",
    },
  ]);

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <Card className="shadow-soft border-t-4 border-t-blue-500">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Pending Tasks</span>
          <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded-full">{tasks.filter(t => !t.completed).length}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center space-x-3 py-3 px-2 rounded-lg transition-all duration-200 ${
                task.completed 
                  ? 'bg-muted/40 text-muted-foreground' 
                  : 'hover:bg-primary/5'
              }`}
            >
              <Checkbox 
                id={`task-${task.id}`} 
                checked={task.completed}
                onCheckedChange={() => toggleTaskCompletion(task.id)}
                className="border-primary"
              />
              <div className="flex-1">
                <label
                  htmlFor={`task-${task.id}`}
                  className={`text-sm font-medium cursor-pointer ${
                    task.completed ? 'line-through' : ''
                  }`}
                >
                  {task.title}
                </label>
                <p className="text-xs text-muted-foreground">
                  Due: {task.dueDate}
                </p>
              </div>
              <task.icon className={`h-5 w-5 ${
                task.completed ? 'text-muted-foreground' : 'text-primary'
              }`} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
