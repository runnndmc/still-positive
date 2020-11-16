import React from "react";

import LatestEpCard from "../components/LatestEpCard";
import NewestEp from "../components/NewestEp";
import './main.css'

const Main = () => {
    
  return (
    <div className='body'>
      <h1>Hello Main Page!</h1>

      <div className='stp-annimation'>
        <span className='stp-text'>Still Positive</span>
        <span className='stp-text'>Still Positive</span>
        <span className='stp-text'>Still Positive</span>
        <span className='stp-text'>Still Positive</span>
        <span className='stp-text'>Still Positive</span>
        
      </div>

      <NewestEp />
      <LatestEpCard />
    </div>
  );
};

export default Main;
