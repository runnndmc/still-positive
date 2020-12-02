import React from "react";
import { Link } from "react-router-dom";

import "./nav.css"

const Nav = () => {
  return (
    <div className='nav-bar'>
      <Link className='nav-link'to="/">
        <h5 className='home-link'>Home</h5>
      </Link> 
      <Link className='nav-link' to="/about">
        <h5 className='about-link'>About</h5>
      </Link>
      <Link className='nav-link' to="/episodes">
        <h5 className='episodes-link'>Episodes</h5>
      </Link>
    </div>
  );
};

export default Nav;
