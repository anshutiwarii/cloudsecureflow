import { Shield, BookOpen, Video, FileText, Settings, LogOut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const UserDashboard = () => {
  const navigate = useNavigate();
  const userInfo = {
    name: "Sarah Johnson",
    role: "User",
    department: "Marketing",
    email: "sarah.johnson@company.com"
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
            <h1 className="text-3xl font-bold">User Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Welcome back, {userInfo.name}</span>
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>SJ</AvatarFallback>
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
                <Video className="w-5 h-5" />
                <span>Video Lectures</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <p className="font-medium">Introduction to Security</p>
                  <p className="text-sm text-muted-foreground">Duration: 45 mins</p>
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <p className="font-medium">Advanced Topics</p>
                  <p className="text-sm text-muted-foreground">Duration: 60 mins</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Study Notes</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <p className="font-medium">Security Basics</p>
                  <p className="text-sm text-muted-foreground">Last updated: 2 days ago</p>
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <p className="font-medium">Best Practices</p>
                  <p className="text-sm text-muted-foreground">Last updated: 1 week ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Resources</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <p className="font-medium">Security Guidelines</p>
                  <p className="text-sm text-muted-foreground">PDF Document</p>
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <p className="font-medium">Training Materials</p>
                  <p className="text-sm text-muted-foreground">ZIP Archive</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;