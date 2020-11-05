import React from "react";
import TextInput from "./TextInput";
import Constants from "../Utils/Constants";
import CardIDParser from "../Utils/CardIDParser";

const CardData = (props) => {
  return (
    <>
      <label className=" block font-semibold text-left mt-5 mb-5">
        {Constants.CARDLIST_HEADING}
      </label>

      {props.data.map((cards) => (
        <div
          key={cards.id}
          className="flex flex-row justify-between text-left mb-10"
        >
          <div className="flex flex-row ">
            <img className="w-8" alt="card" src={cards.symbol}></img>

            <p className="ml-10  ">
              <label className=" block font-semibold">{cards.type}</label>
              <span className=" block text-gray-400">
                {CardIDParser(cards.id)}
              </span>
            </p>
          </div>
          <TextInput
            ClassStyle="border border-gray-300 bg-green rounded-md w-20 p-1 focus:border-blue-400"
            default="CVC"
          />
        </div>
      ))}
    </>
  );
};
export default CardData;
