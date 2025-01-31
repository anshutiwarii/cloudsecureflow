import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

const complianceItems = [
  { id: 1, name: "GDPR", status: true },
  { id: 2, name: "HIPAA", status: true },
  { id: 3, name: "SOC 2", status: false },
  { id: 4, name: "ISO 27001", status: true },
];

const ComplianceStatus = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Compliance Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {complianceItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-2 p-3 rounded-lg bg-secondary/50"
            >
              {item.status ? (
                <CheckCircle2 className="w-5 h-5 text-security-good" />
              ) : (
                <XCircle className="w-5 h-5 text-security-critical" />
              )}
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ComplianceStatus;