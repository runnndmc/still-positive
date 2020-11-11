import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to="/about">
        <h5>About</h5>
      </Link>
      <Link to="/episodes">
        <h5>Episodes</h5>
      </Link>
      <Link to="/donate">
        <h5>Donate</h5>
      </Link>
    </>
  );
};

export default Nav;
