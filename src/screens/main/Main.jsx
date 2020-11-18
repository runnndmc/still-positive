import React from "react";
import NewestEp from "../../components/NewestEp";

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
        <NewestEp />
      </div>
    </Layout>
  );
};

export default Main;
