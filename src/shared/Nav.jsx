import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.css"

const Nav = () => {
  return (
    <nav className='nav-bar'>
      <NavLink className='home-link'to="/">Home</NavLink> 
      <NavLink className='about-link' to="/about">About</NavLink>
      <NavLink className='episodes-link' to="/episodes">Episodes</NavLink>
    </nav>
  );
};

export default Nav;
