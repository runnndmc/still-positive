import React from "react";

import Nav from "./Nav";

const Layout = (props) => {
  return (
    <>
      <Nav />
      <h1>STILL POSITIVE</h1>
      {props.children}
    </>
  );
};

export default Layout;
