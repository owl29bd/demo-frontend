import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface Card3Props {
  title: string;
  value: string;
  description: string;
}

const Card3 = ({ title, value, description }: Card3Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default Card3;
