import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import './layout.css';

const Layout = (props) => {
  return (
    <section className='layout-body'>
      <Nav/>
      
      <Link className='logo' to='/'><h1 className='logo'>STILL POSITIVE</h1></Link>
      {props.children}
    

    </section>
  );
};

export default Layout;
