import React from "react";
import "../slider.scss";

const RangeSlide = React.forwardRef((props, ref) => (
  <input
    ref={ref}
    type="range"
    min={props.min}
    max={props.max}
    value={props.value}
    defaultValue={props.min}
    onChange={props.handleChange}
    step={props.step}
  ></input>
));

export default RangeSlide;
