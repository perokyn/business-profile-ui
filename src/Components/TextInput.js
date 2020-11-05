import React from "react";

const TextInput = React.forwardRef((props, ref) => (
  <input
    ref={ref}
    type="text"
    value={props.value}
    onChange={props.handleChange}
    placeholder={props.default}
    className={props.ClassStyle}
  >
    {props.children}
  </input>
));

export default TextInput;
