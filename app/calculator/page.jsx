import React from "react";
import { Input } from "antd";
import CardComponent from "../components/CardComponent";
// import { Slider } from "antd";
import {
  MenuOutlined,
  PayCircleOutlined,
  ReloadOutlined,
  RedoOutlined,
} from "@ant-design/icons";

// const formatter = (value) => `${value} Days`;

const page = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white">Calculator</h2>
      <span className="text-white/60">Estimate your returns</span>
      <div className="flex  p-2 ">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 w-full   mt-5   text-white mr-8 ">
          <div>
            <CardComponent
              icon={
                <MenuOutlined
                  style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
                />
              }
              value={"0"}
              title={"Stakify ($SIFY) Price"}
            />
          </div>
          <div>
            <CardComponent
              icon={
                <PayCircleOutlined
                  style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
                />
              }
              value={"648,000%"}
              title={"Current APY"}
            />
          </div>
          <div>
            <CardComponent
              icon={
                <ReloadOutlined
                  style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
                />
              }
              value={"null $SIFY"}
              title={" Stakify ($SIFY) Balance"}
            />
          </div>
          <div>
            <CardComponent
              icon={
                <RedoOutlined
                  style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
                />
              }
              value={"$0.0015"}
              title={"Stakify ($SIFY) Price"}
            />
          </div>
        </div>
      </div>

              
      <div className=" p-2 ">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 mt-4">
          <div>
            <div>
              <p className="text-white">Label</p>
            </div>
            <div>
            <Input
            placeholder="input"
            style={{
              background: "#2a2c34",
              color: "white",
            }}/>
            </div>
          </div>

          <div>
            <div>
              <p className="text-white">Label</p>
            </div>
            <div>
            <Input
            placeholder="input"
            style={{
              background: "#2a2c34",
              color: "white",
            }}/>
            </div>
          </div>

          <div>
            <div>
              <p className="text-white">Label</p>
            </div>
            <div>
            <Input
            placeholder="input"
            style={{
              background: "#2a2c34",
              color: "white",
            }}/>
            </div>
          </div>

          <div>
            <div>
              <p className="text-white">Label</p>
            </div>
            <div>
            <Input
            placeholder="input"
            style={{
              background: "#2a2c34",
              color: "white",
            }}/>
            </div>
          </div>
         


          
          
            </div>
          </div>
          
    </div>
  );
};

export default page;
