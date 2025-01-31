import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", threats: 12 },
  { name: "Tue", threats: 19 },
  { name: "Wed", threats: 15 },
  { name: "Thu", threats: 25 },
  { name: "Fri", threats: 17 },
  { name: "Sat", threats: 8 },
  { name: "Sun", threats: 10 },
];

const SecurityMetrics = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Security Incidents (7 Days)</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="name" stroke="#888888" />
            <YAxis stroke="#888888" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="threats"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SecurityMetrics;