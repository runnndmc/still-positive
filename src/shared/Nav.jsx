import React from "react";
import { Link } from "react-router-dom";

import "./nav.css"

const Nav = () => {
  return (
    <div className='nav-bar'>
      <Link className='nav-link' to="/about">
        <h5>About</h5>
      </Link>
      <Link className='nav-link' to="/episodes">
        <h5>Episodes</h5>
      </Link>
      <Link className='nav-link' to="/donate">
        <h5>Donate</h5>
      </Link>
    </div>
  );
};

export default Nav;
