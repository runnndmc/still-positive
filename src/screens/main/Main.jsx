import React, { useEffect, useState } from "react";
import axios from "axios";

import NewestEp from "../../components/NewestEp";
import Layout from "../../shared/Layout";
import "./main.css";

const Main = () => {
  const [allEps, setAllEps] = useState([]);
  const [queriedEps, setQueriedEps] = useState([]);

  useEffect(() => {
    const apiReq = async () => {
      try {
        const resp = await axios.get(
          "https://api.airtable.com/v0/appRx1trr4DFayGsm/Table%201?view=Grid%20view",
          {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
              },
          }
        );
        setAllEps(resp.data.records);
        setQueriedEps(resp.data.records)
      } catch (error) {
        throw error; 
      }
    };
    apiReq();
  },[]);

  

  const originFirst = queriedEps.filter(episode => episode.fields.id === (queriedEps.length))

  console.log(originFirst)


/*   const handleSort = () => {
    const ascending = setQueriedEps(originFirst(queriedEps))
    return ascending
  }

  const handleSearch = () => {
     setQueriedEps(() => handleSort())
  } */
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
