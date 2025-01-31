import { Shield, Lock, AlertCircle, UserRound, FileText, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserDashboard = () => {
  const userInfo = {
    name: "Sarah Johnson",
    role: "User",
    department: "Marketing",
    email: "sarah.johnson@company.com"
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">User Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Welcome back, {userInfo.name}</span>
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
          </div>
        </div>
        
        {/* Profile Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <UserRound className="w-5 h-5" />
              <span>User Profile</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{userInfo.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Role</p>
                <p className="font-medium">{userInfo.role}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Department</p>
                <p className="font-medium">{userInfo.department}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{userInfo.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="w-5 h-5" />
                <span>Security Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>View your security status and recommendations</p>
              <p className="text-sm text-muted-foreground mt-2">Security score: 85/100</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5" />
                <span>Recent Alerts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>View recent security alerts for your account</p>
              <p className="text-sm text-muted-foreground mt-2">2 new alerts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5" />
                <span>Account Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage your account preferences</p>
              <p className="text-sm text-muted-foreground mt-2">Last updated: 2 days ago</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;