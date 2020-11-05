import React from 'react'


const Button = React.forwardRef((props, ref) => (
    <button className={props.ClassStyle} ref={ref} onClick={props.handleClick}>
      {props.children}
    </button>
  ));
  export default Button;