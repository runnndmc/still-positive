import React, { useEffect, useState } from "react";
import axios from "axios";

import NewestEp from "../../components/newestEp/NewestEp";
import Layout from "../../shared/Layout";
import "./main.css";
import { Link } from "react-router-dom";

const Main = () => {
  const [queriedEps, setQueriedEps] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const apiCall = async () => {
      try {
        const resp = await axios.get(
          "https://api.airtable.com/v0/appRx1trr4DFayGsm/Table%201?view=Grid%20view",
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            },
          }
        );
        setQueriedEps(resp.data.records.shift());
        setLoaded(true);
      } catch (error) {
        throw error;
      }
    };
    apiCall();
  }, []);

  if (!isLoaded) {
    return <h1>One moment babe..</h1>;
  }

  return (
    <Layout>
      <main className="main-wrapper">
        <section className="green-box">
          <img
            className="stp-dwayne"
            src="./stp-left-align.png"
            alt="a collage of a girl looking blankly with her hand over her mouth"
          />
        </section>
        <ul className="stp-annimation">
          <li className="stp-text">Still Positive</li>
          <li className="stp-text">Still Positive</li>
          <li className="stp-text">Still Positive</li>
          <li className="stp-text">Still Positive</li>
          <li className="stp-text">Still Positive</li>
        </ul>
        <Link className="new-title" to={`/episodes/${queriedEps.id}`}>
          <NewestEp queriedEps={queriedEps} />
        </Link>
      </main>
    </Layout>
  );
};

export default Main;
