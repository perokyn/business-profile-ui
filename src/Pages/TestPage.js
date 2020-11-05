import React, {useState, useEffect} from 'react'
import Constants from "../Utils/Constants";
import RangeSlider from "../Components/RangeSlider";
import Button from "../Components/Button";
import clock from "../Assets/clock.png";
import calendar from "../Assets/calendar.png";
const TestPage=()=>{

    const [value, setValue] = useState(0);

  const Price = React.createRef();

  useEffect(() => {
    setValue({ value: Price.current.min }); //get initial value to show up next to range slider
  }, []);

  const handleCahnge = (e) => {
    setValue({ value: e.target.value });
  };
  


return(


    <div className=' bg-blue-300 flex flex-col  p-10  flex content-between flex-wrap h-42  rounded-lg'>
     
     <div className='mb-10'>
     <h2 className="font-bold text-xl"> {Constants.PRCING_HEADING}</h2>
      <p className='text-gray-500'>{Constants.SET_PRICING}</p>
      </div>

      <div className='grid grid-cols-2  flex-col gap-5 sm:gap-10   justify-items-stretch  mb-10'>
        
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
      
<p className='text-3xl font-semibold'>  <span className='inline-block align-text-top text-sm text-gray-400 font-light'>{Constants.CURRENCY}</span>  {value.value}<span className='text-sm text-gray-400 font-light '>  / hour</span></p>
  <RangeSlider
          ref={Price}
          min="20"
          max="300"
          value={value.value}
          step="1"
          handleChange={(e) => handleCahnge(e)}
        ></RangeSlider>
<p className=' flex justify-between '>
    <label className='  text-gray-500 font-light '>{Constants.CURRENCY}
    <span className='font-semibold '>20</span></label>
    
    <label className='  text-gray-500 font-light'>{Constants.CURRENCY}
    <span  className=' font-semibold'>300</span>
    </label>
    </p>
    </div>       
    
      </div>
      
    
      
)

}
export default TestPage