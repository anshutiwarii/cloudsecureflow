import { Shield, Bell, CheckCircle, UserRound, FileText, Users, LogOut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const StaffDashboard = () => {
  const navigate = useNavigate();
  const staffInfo = {
    name: "John Smith",
    role: "Security Staff",
    department: "IT Security",
    email: "john.smith@company.com"
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    toast.success("Logged out successfully");
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Staff Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Welcome back, {staffInfo.name}</span>
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5" />
                <span>Incident Reports</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <p className="font-medium">Security Breach Report</p>
                  <p className="text-sm text-muted-foreground">Status: Under Investigation</p>
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <p className="font-medium">Access Violation</p>
                  <p className="text-sm text-muted-foreground">Status: Resolved</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Team Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <p className="font-medium">Team Schedule</p>
                  <p className="text-sm text-muted-foreground">Next shift: 8:00 AM</p>
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <p className="font-medium">Task Assignments</p>
                  <p className="text-sm text-muted-foreground">5 pending tasks</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Reports</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <p className="font-medium">Monthly Summary</p>
                  <p className="text-sm text-muted-foreground">Due: Next week</p>
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <p className="font-medium">Incident Analysis</p>
                  <p className="text-sm text-muted-foreground">In progress</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;