import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface InfoCardProps {
  title: string;
  content: string;
}

export const InfoCardProps = ({ title, content }: InfoCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>

        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{content}</div>
      </CardContent>
    </Card>
  );
};
