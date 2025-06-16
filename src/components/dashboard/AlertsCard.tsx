
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export function AlertsCard() {
  return (
    <Card className="shadow-soft border-t-4 border-t-red-500">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Alerts</span>
          <span className="text-sm bg-gray-100 text-gray-600 py-1 px-2 rounded-full">0</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
          <Check className="h-12 w-12 mb-3 text-emerald-400" />
          <p className="text-center text-sm">No alerts</p>
          <p className="text-center text-xs mt-1">You're all caught up!</p>
        </div>
      </CardContent>
    </Card>
  );
}
