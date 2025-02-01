import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMFA, setShowMFA] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInitialSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.mfaEnabled) {
          setShowMFA(true);
          toast({
            title: "MFA Required",
            description: "Please enter your authentication code",
          });
        } else {
          localStorage.setItem("userRole", data.role);
          localStorage.setItem("token", data.token);
          navigateToDatabase(data.role);
        }
      } else {
        toast({
          title: "Error",
          description: data.message || "Invalid credentials",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to connect to server",
        variant: "destructive",
      });
    }
  };

  const handleMFASubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-mfa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code: otpCode }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("userRole", data.role);
        localStorage.setItem("token", data.token);
        navigateToDatabase(data.role);
        toast({
          title: "Success",
          description: "Successfully authenticated",
        });
      } else {
        toast({
          title: "Error",
          description: "Invalid MFA code",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to verify MFA code",
        variant: "destructive",
      });
    }
  };

  const navigateToDatabase = (role: string) => {
    switch (role) {
      case "admin":
        navigate("/admin");
        break;
      case "staff":
        navigate("/staff");
        break;
      default:
        navigate("/user");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          {!showMFA ? (
            <form onSubmit={handleInitialSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </Button>
              </p>
            </form>
          ) : (
            <form onSubmit={handleMFASubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Enter Authentication Code</Label>
                <InputOTP
                  maxLength={6}
                  value={otpCode}
                  onChange={setOtpCode}
                  render={({ slots }) => (
                    <InputOTPGroup>
                      {slots.map((slot, idx) => (
                        <InputOTPSlot key={idx} {...slot} index={idx} />
                      ))}
                    </InputOTPGroup>
                  )}
                />
              </div>
              <Button type="submit" className="w-full">
                Verify
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;