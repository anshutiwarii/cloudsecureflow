import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SecurityScore = () => {
  const score = 85;

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-security-good";
    if (score >= 60) return "text-security-warning";
    return "text-security-critical";
  };

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Security Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <span className={`text-4xl font-bold ${getScoreColor(score)}`}>
            {score}%
          </span>
          <span className="text-sm text-muted-foreground">Last updated: 2h ago</span>
        </div>
        <Progress value={score} className="h-2" />
      </CardContent>
    </Card>
  );
};

export default SecurityScore;