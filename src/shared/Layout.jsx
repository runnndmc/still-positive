import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import "./layout.css";

const Layout = (props) => {
  return (
    <main className="layout-body">
      <Nav />
      <Link className="logo" to="/">Still Positive</Link>
      {props.children}
    </main>
  );
};

export default Layout;
