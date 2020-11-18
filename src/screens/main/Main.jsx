import React from "react";

import Layout from "../../shared/Layout";
import "./main.css";

const Main = () => {
  return (
    <Layout>
      <div className="main-wrapper">
        <h1>Hello Main Page!</h1>
        <div className="green-box"> </div>
        <div className="stp-annimation">
          <span className="stp-text">Still Positive</span>
          <span className="stp-text">Still Positive</span>
          <span className="stp-text">Still Positive</span>
          <span className="stp-text">Still Positive</span>
          <span className="stp-text">Still Positive</span>
        </div>
        {/* <h3>This is the newest <Link to={`/episode`}>episode!</Link></h3> */}
      </div>
    </Layout>
  );
};

export default Main;
