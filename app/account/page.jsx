import React from 'react'
import { Card } from "@/components/ui/card";


import {
  
  RedoOutlined,
  FieldTimeOutlined,
  BuildOutlined,
  
  
} from "@ant-design/icons";
import CardComponent from '../components/CardComponent'

const formatter = (value) => `${value} Days`;
const page = () => {
  return (
    <div>
      <div className="flex  p-2 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full  mr-5 mt-5  text-white ">
          <div>
            <CardComponent 
            icon={
              <RedoOutlined
                style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
              />
            }
            value={"null $SIFY"}
            title={"Your Statify ($SIFY) Balance"}
          />
          </div>
          <div>
            <CardComponent  
            icon={
              <FieldTimeOutlined
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
              <BuildOutlined
              style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
              />
            }
            value={"00:00:00"}
            title={"Next Rebase"}
          />
          </div>
        </div>
    </div>
    <div className="flex  p-2 ">
        <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-4 w-full  mr-5 mt-5  text-white  ">
        <Card 
            style={{
              width: "100%",
              background: "#21222d",
              padding: "50px",
              borderRadius: "10px",
              marginTop: "30px",
              height :"270px",
              overflow : "auto",
              border : "none",
            }}
          >
             <div
              className="value"
              style={{ color: "#fff", fontWeight: 600, marginTop: "10px"}}
            >
              Current $SIFY Price
            
            </div>
            <div
              className="name"
              style={{ color: "#fff", fontWeight: 600, marginTop: "10px" }}
            >
              Next Reward Amount
            </div>
          </Card>
          </div>
        </div>
    </div>
  )
}

export default page