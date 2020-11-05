import React from "react";
import "../App.css";
import bannerImage from "../Assets/plan_sm_b.png";

const PlanBanner = (props) => {
  return (
    <>
      <div className="flex border border-blue-400  rounded-md justify-between p-4">
        <div className=" flex flex-row justify-between">
          <img className="w-15" src={bannerImage} alt="plan_symbol"></img>
          <p className="flex flex-col p-2">
            <label className="font-semibold">{props.plan}</label>
            <span className="font-semibold text-xs text-blue-600 text-left ">
              {props.linkText}
            </span>
          </p>
        </div>

        <div className=" text-center">
          <span className="font-semibold text-black text-4xl">
            <span className=" text-gray-400 align-text-top text-sm p-1 ">
              {props.currency}
            </span>
            {props.cost}
          </span>
          <span className=" text-gray-400">{props.costSchedule}</span>
        </div>
      </div>
    </>
  );
};

export default PlanBanner;
