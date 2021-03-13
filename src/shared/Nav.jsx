import React from "react";
import { Link } from "react-router-dom";
import Subscribe from "../components/subscribe/Subscribe";

import "./nav.css"

const Nav = () => {
  return (
    <nav className='nav-bar'>
      <Link className='nav-link'to="/">
        <h5 className='home-link'>Home</h5>
      </Link> 
      <Link className='nav-link' to="/about">
        <h5 className='about-link'>About</h5>
      </Link>
      <Link className='nav-link' to="/episodes">
        <h5 className='episodes-link'>Episodes</h5>
      </Link>
    </nav>
  );
};

export default Nav;
