import React from "react";
import { Link } from "react-router-dom";

import "./nav.css"

const Nav = () => {
  return (
    <div className='nav-bar'>
      <Link className='nav-link' to="/about">
        <h5 className='about-link'>About</h5>
      </Link>
      <Link className='nav-link' to="/episodes">
        <h5 className='episodes-link'>Episodes</h5>
      </Link>
      <Link className='nav-link'to="/contact">
        <h5 className='contact-link'>Contact</h5>
      </Link>
    </div>
  );
};

export default Nav;
