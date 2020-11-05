import React from "react";
import ButtonNav from "../Components/ButtonNav";
import Constants from "../Utils/Constants";
import TextInput from "../Components/TextInput";
import CardData from "../Components/CardData";
import PlanBanner from "../Components/PlanBanner";
import data from "../Utils/db";

const Payment = (props) => {
  const Email = React.createRef();

  return (
    <div className="w-500 bg-white p-5 ">
      <div className="mt-10 mb-10  text-left">
        <label className="font-semibold text-xl text-gray-800">
          {Constants.PAYMENT_HEADING}
        </label>
        <p className="mt-2 text-gray-600"> {Constants.MAKE_PAYMENT_TEXT}</p>
      </div>
      <PlanBanner
        plan="Small Business"
        currency="$"
        cost="8,350"
        costSchedule=" / year"
        linkText="CHANGE PLAN"
      />

      <CardData data={data}></CardData>

      <span className="block text-blue-700 text-left mt-5 mb-5">
        ADD PAYMENT METHOD
      </span>
      <TextInput
        ClassStyle=" block  mb-5 border border-gray-300 bg-green rounded-md w-full p-2 focus:border-blue-400"
        default="Email address"
        ref={Email}
      ></TextInput>
      <ButtonNav ClassStyle=" block  mt-5 text-white font-bold text-center bg-blue-600 w-full  text-align-center p-5 rounded-md">
        Proceed to payment <span className="text-2xl">→</span>
      </ButtonNav>
    </div>
  );
};
export default Payment;
