import React from "react";
import { Card } from "@/components/ui/card";

const CardComponent = ({ icon, value, title }) => {
  return (
    <Card className="bg-[#21222d] w-full p-10 text-white border-none">
      <div className="icon">{icon ? icon : ""}</div>
      <div
        className="value"
        style={{ color: "#fff", fontWeight: 600, marginTop: "10px" }}
      >
        {value ? value : ""}
      </div>
      <div
        className="name"
        style={{ color: "#87888c", marginTop: "5px", fontSize: "12px" }}
      >
        {title ? title : ""}
      </div>
    </Card>
  );
};

export default CardComponent;
