import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, AlertCircle } from "lucide-react";

const alerts = [
  {
    id: 1,
    severity: "critical",
    message: "Unauthorized access attempt detected",
    time: "10 minutes ago",
  },
  {
    id: 2,
    severity: "warning",
    message: "Resource misconfiguration found",
    time: "1 hour ago",
  },
  {
    id: 3,
    severity: "info",
    message: "Security patch available",
    time: "2 hours ago",
  },
];

const AlertsPanel = () => {
  const getAlertIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <AlertCircle className="w-5 h-5 text-security-critical" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-security-warning" />;
      default:
        return <Shield className="w-5 h-5 text-security-info" />;
    }
  };

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-center space-x-4 p-3 rounded-lg bg-secondary/50"
            >
              {getAlertIcon(alert.severity)}
              <div className="flex-1">
                <p className="font-medium">{alert.message}</p>
                <p className="text-sm text-muted-foreground">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;