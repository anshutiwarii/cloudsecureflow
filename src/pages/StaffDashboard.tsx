import { Shield, Bell, CheckCircle, UserRound, FileText, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const StaffDashboard = () => {
  const staffInfo = {
    name: "John Smith",
    role: "Security Staff",
    department: "IT Security",
    email: "john.smith@company.com"
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
          </div>
        </div>
        
        {/* Profile Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <UserRound className="w-5 h-5" />
              <span>Staff Profile</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{staffInfo.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Role</p>
                <p className="font-medium">{staffInfo.role}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Department</p>
                <p className="font-medium">{staffInfo.department}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{staffInfo.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5" />
                <span>Security Alerts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Monitor and respond to security alerts</p>
              <p className="text-sm text-muted-foreground mt-2">5 new alerts today</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Compliance Tasks</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Track compliance requirements</p>
              <p className="text-sm text-muted-foreground mt-2">2 tasks pending</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>User Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage user access and permissions</p>
              <p className="text-sm text-muted-foreground mt-2">15 active users</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;