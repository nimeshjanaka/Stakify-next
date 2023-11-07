import React from "react";
import CardComponent from "../components/CardComponent";
import {
  DollarOutlined,
  RedoOutlined,
  FieldTimeOutlined,
  BuildOutlined,
} from "@ant-design/icons";

const page = () => {
  return (
    <div>
      <div className="flex  p-2 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4 w-full ml-5 mr-5 mt-5  text-white ">
          <div>
            <CardComponent
              icon={
                <DollarOutlined
                  style={{
                    color: "#cd4fe5",
                    fontSize: "25px",
                    height: "10px",
                    marginBottom: "10px",
                  }}
                />
              }
              value={"0.0000000"}
              title={"Market Cap"}
            />
          </div>
          <div>
            <CardComponent
              icon={
                <RedoOutlined
                  style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
                />
              }
              value={"500,000"}
              title={"Circulating Supply"}
            />
          </div>
          <div>
            <CardComponent
              icon={
                <FieldTimeOutlined
                  style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
                />
              }
              value={"500,000"}
              title={"Total Supply"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center p-2">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4 w-full mt-1 ml-5 mr-5">
          <div>
            <CardComponent
              icon={
                <BuildOutlined
                  style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
                />
              }
              value={"0:0:0"}
              title={"Next Rebase"}
            />
          </div>
          <div>
            <CardComponent
              icon={
                <DollarOutlined
                  style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
                />
              }
              value={"0.000000"}
              title={"Stakify ($SIFY) Price"}
            />
          </div>

          <div>
            <CardComponent
              icon={
                <DollarOutlined
                  style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
                />
              }
              value={"4.3857"}
              title={" Market Value of Treasury Asset"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center p-2">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4 w-full mt-1 ml-5 mr-5 h-40">
          <div>
            <CardComponent
              icon={
                <FieldTimeOutlined
                  style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
                />
              }
              title={" Referral Pool Value"}
            />
          </div>
          <div>
            <CardComponent
              icon={
                <FieldTimeOutlined
                  style={{ color: "#cd4fe5", fontSize: "25px", height: "5px" }}
                />
              }
              title={" # Value of"}
            />
          </div>
          <div>
            <CardComponent
              icon={
                <FieldTimeOutlined
                  style={{ color: "#cd4fe5", fontSize: "25px", height: "5px" }}
                />
              }
              title={" $ Value of"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
