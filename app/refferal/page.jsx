import React from "react";
import { Input } from "antd";
import CardComponent from "../components/CardComponent";

const page = () => {
  return (
    <div>
      <div className="flex  p-2 ">
        <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols- gap-4 w-full ml-5 mr-5 mt-5  text-white flex-center ">
          <h1 className="text-white ml-80">REFFERAL REWARDS</h1>
          <span className="text-white/50 font-thin text-sm ml-64">
            RECEIVE UP TO 3% BONUS ON THE REFEREE'S TOTAL EARNINGS.
          </span>
        </div>
      </div>
      <div className="flex  p-2 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full ml-5 mr-5 mt-5  text-white ">
          <span className="font-bold ml-10">Your personal referral link:</span>
          <Input
            className="bg-[#2a2c34] text-white h-8 w-full mr-20"
            placeholder="input"
          />
          <button className="bg-blue-500/80 boarder rounded   text-white text-center h-8   w-20 ml-7  ">
            Copy Link
          </button>
        </div>
      </div>
      
        <div className="flex  p-2 ">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1  w-full ml-5 mr-5 mt-5 gap-4 text-white">
            <div>
              <CardComponent
                value={"$0"}
                title={"Your total rewards from referrals"}
              />
            </div>
          
        <div>
          <CardComponent 
          value={"0"}
           title={"Total Referrals"} />
        </div>
      </div>
      </div>
      <h1 className="text-yellow-500/20 font-bold text-center text-3xl mt-16">Connect Your Wallet!</h1>
      </div>
    
  );
};

export default page;
