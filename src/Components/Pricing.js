import React, { useState, useEffect } from "react";
import Constants from "../Utils/Constants";
import RangeSlider from "./RangeSlider";
import Button from "./Button";
import clock from "../Assets/clock.png";
import calendar from "../Assets/calendar.png";
const Pricing = (props) => {
  const [value, setValue] = useState(0);

  const Price = React.createRef();

  useEffect(() => {
    setValue({ value: Price.current.min }); //get initial value to show up next to range slider
  }, []);

  const handleCahnge = (e) => {
    setValue({ value: e.target.value });
  };
  return (
    <div className="mt-10 bg-white  rounded-lg   p-10  shadow-xl">
      <h2 className="text-left font-semibold text-2xl">
        {Constants.PRCING_HEADING}
      </h2>
      <p className="text-gray-400 text-left py-3">{Constants.SET_PRICING}</p>
      <div className=' my-5 grid grid-cols-2  flex-col gap-5 sm:gap-10   justify-items-stretch  mb-10'>
        
        <Button ClassStyle='relative inline-flex flex-wrap  items-center  justify-center
       py-3 border border-gray-300 
        text-sm leading-5 font-semibold rounded-md text-gray-700 bg-white 
        hover:text-gray-500 focus:outline-none focus:shadow-outline-blue 
        focus:border-blue-400 active:bg-gray-50 active:text-gray-800 group    '>
            
            <img
              className="  group-active:bg-blue-400  w-10  m-1 sm:mr-5 border-solid   border-blue-400 rounded-lg"
              alt="clock"
              src={clock}
            />
            Hourly
          
            </Button>
        <Button ClassStyle='relative inline-flex flex-wrap  items-center  justify-center
       py-3 border border-gray-300 
        text-sm leading-5 font-semibold rounded-md text-gray-700 bg-white 
        hover:text-gray-500 focus:outline-none focus:shadow-outline-blue 
        focus:border-blue-400 active:bg-gray-50 active:text-gray-800 group  '>
            
        <img
              className=" group-active:bg-blue-400   w-10    m-1 sm:mr-5 border-solid   border-blue-400 rounded-lg  "
              alt="calendar"
              src={calendar}
            />
            Fixed
            </Button>
        </div>
      <div>
        <label className=" block text-3xl text-left  p-1 text-black font-semibold ">
          <span className=" text-sm text-gray-400 align-text-top">
            {Constants.CURRENCY}
          </span>
          {value.value} <span className="text-sm text-gray-400"> / hour</span>
        </label>
        <RangeSlider
          ref={Price}
          min="20"
          max="300"
          value={value.value}
          step="1"
          handleChange={(e) => handleCahnge(e)}
        ></RangeSlider>
        <div className="flex justify-between">
          <span className="  inline-block text-left  text-sm text-gray-400">
            {Constants.CURRENCY} 20
          </span>
          <span className="inline-block text-right text-sm text-gray-400">
            {Constants.CURRENCY} 300
          </span>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
