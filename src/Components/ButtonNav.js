import React from "react";

const ButtonNav = React.forwardRef((props, ref) => (
  <button className={props.ClassStyle} ref={ref} onClick={props.handleClick}>
    {props.children}
  </button>
));
export default ButtonNav;
