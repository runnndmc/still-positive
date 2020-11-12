import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";

const Layout = (props) => {
  return (
    <>
      <Nav />
      <Link to='/'><h1>STILL POSITIVE</h1></Link>
      {props.children}
    </>
  );
};

export default Layout;
