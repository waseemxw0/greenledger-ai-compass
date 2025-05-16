
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Check, FileWarning } from "lucide-react";

interface Alert {
  id: string;
  message: string;
  type: "warning" | "danger" | "info";
  icon: React.ElementType;
}

export function AlertsCard() {
  const alerts: Alert[] = [
    {
      id: "1",
      message: "Missing energy data for April",
      type: "danger",
      icon: AlertCircle,
    },
    {
      id: "2",
      message: "Check supplier emissions inputs",
      type: "warning",
      icon: FileWarning,
    },
    {
      id: "3",
      message: "Upload company vehicle mileage receipts",
      type: "info",
      icon: Check,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start space-x-3">
              <div
                className={`p-1.5 rounded-full ${
                  alert.type === "danger"
                    ? "bg-red-100"
                    : alert.type === "warning"
                    ? "bg-yellow-100"
                    : "bg-blue-100"
                }`}
              >
                <alert.icon
                  className={`h-4 w-4 ${
                    alert.type === "danger"
                      ? "text-red-600"
                      : alert.type === "warning"
                      ? "text-yellow-600"
                      : "text-blue-600"
                  }`}
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{alert.message}</p>
                <div className="mt-1">
                  <span
                    className={`alert-badge ${
                      alert.type === "danger"
                        ? "alert-badge-danger"
                        : alert.type === "warning"
                        ? "alert-badge-warning"
                        : "alert-badge-info"
                    }`}
                  >
                    {alert.type === "danger"
                      ? "Action Required"
                      : alert.type === "warning"
                      ? "Review Needed"
                      : "Reminder"
                    }
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
