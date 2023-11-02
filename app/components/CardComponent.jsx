import React from "react";
import {
  Card,
  // CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardComponent = () => {
  return (
    

    <Card className="bg-[#21222d]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description</CardDescription>
       </CardHeader>
    </Card>

  );
};

export default CardComponent;


