
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useAlerts } from "@/hooks/useAlerts";

const SEVERITY_COLORS: Record<string, string> = {
  info: "bg-blue-500",
  warning: "bg-yellow-400",
  error: "bg-red-500",
};

export function AlertsCard(): JSX.Element {
  const { data, isLoading } = useAlerts();
  const unresolved = data?.unresolved ?? [];
  const count = data?.count ?? 0;

  return (
    <Card className="shadow-soft border-t-4 border-t-red-500">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Alerts</span>
          <span className="text-sm bg-gray-100 text-gray-600 py-1 px-2 rounded-full">{count}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        {isLoading || unresolved.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
            <Check className="h-12 w-12 mb-3 text-emerald-400" />
            <p className="text-center text-sm">No alerts</p>
            <p className="text-center text-xs mt-1">You're all caught up!</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-4">
            {unresolved.slice(0, 3).map((alert) => (
              <li key={alert.id} className="flex items-center justify-between border-b last:border-b-0 pb-2 last:pb-0">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${
                      SEVERITY_COLORS[alert.severity ?? "info"] || "bg-gray-300"
                    }`}
                  ></span>
                  <span className="text-base font-medium">{alert.title ?? "Untitled alert"}</span>
                </div>
                <span className="text-xs text-gray-500">{alert.severity ?? "info"}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
