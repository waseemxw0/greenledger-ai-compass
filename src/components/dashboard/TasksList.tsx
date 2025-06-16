
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

export function TasksList() {
  return (
    <Card className="shadow-soft border-t-4 border-t-blue-500">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Pending Tasks</span>
          <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded-full">0</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
          <Plus className="h-12 w-12 mb-3 text-gray-300" />
          <p className="text-center text-sm">No tasks yet</p>
          <p className="text-center text-xs mt-1">Add your first task to get started</p>
        </div>
      </CardContent>
    </Card>
  );
}
