import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className='flex flex-row  justify-center  border border-gray-800 '>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/payment">Payment</Link>
      </li>
      <li>
        <Link to="/test">TestPage</Link>
      </li>
    
    </ul>
  </nav>
);

export default Navbar;
