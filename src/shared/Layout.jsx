import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import './layout.css';

const Layout = (props) => {
  return (
    <div className='main-body'>
      <Nav />
      
      <Link to='/'><h1>STILL POSITIVE</h1></Link>
      {props.children}
    

    </div>
  );
};

export default Layout;
