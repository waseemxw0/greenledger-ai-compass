
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Check, FileWarning, X } from "lucide-react";
import { useState } from "react";

interface Alert {
  id: string;
  message: string;
  type: "warning" | "danger" | "info";
  icon: React.ElementType;
}

export function AlertsCard() {
  const [alerts, setAlerts] = useState<Alert[]>([
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
  ]);

  const dismissAlert = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <Card className="shadow-soft border-t-4 border-t-red-500">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Alerts</span>
          <span className="text-sm bg-red-100 text-red-800 py-1 px-2 rounded-full">{alerts.length}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div 
              key={alert.id} 
              className={`relative rounded-lg p-3 transition-all duration-200 ${
                alert.type === "danger" 
                  ? "bg-red-50" 
                  : alert.type === "warning" 
                  ? "bg-yellow-50" 
                  : "bg-blue-50"
              }`}
            >
              <div className="flex items-start">
                <div
                  className={`p-1.5 rounded-full mr-3 ${
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
                <button 
                  onClick={() => dismissAlert(alert.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          ))}
          
          {alerts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-6 text-muted-foreground">
              <Check className="h-10 w-10 mb-2 text-emerald" />
              <p>No alerts to display</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
