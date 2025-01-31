import SecurityScore from "@/components/SecurityScore";
import AlertsPanel from "@/components/AlertsPanel";
import ComplianceStatus from "@/components/ComplianceStatus";
import SecurityMetrics from "@/components/SecurityMetrics";
import { Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <Shield className="w-8 h-8 text-security-info" />
          <h1 className="text-3xl font-bold">Cloud Security Dashboard</h1>
        </div>
        
        <div className="grid grid-cols-5 gap-6">
          <SecurityScore />
          <AlertsPanel />
          <ComplianceStatus />
          <SecurityMetrics />
        </div>
      </div>
    </div>
  );
};

export default Index;