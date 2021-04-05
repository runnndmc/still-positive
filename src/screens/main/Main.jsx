import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import NewestEp from "../../components/newestEp/NewestEp";
import Layout from "../../shared/Layout";
import Subscribe from '../../components/subscribe/Subscribe';
import {getFirstEpisode} from '../../services/episodes';
import "./main.css";

const Main = () => {
  const [queriedEps, setQueriedEps] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchFirstEpisode = async () => {
      const firstEpisode = await getFirstEpisode()
      setQueriedEps(firstEpisode)
      setLoaded(true);
    };
    fetchFirstEpisode();
  }, []);


  if (!isLoaded) {
    return <h2>One minute babe..</h2>;
  }

  return (
    <Layout>
      <section className="main-desktop">
        <article className="main-wrapper">
          <section className="green-box">
            <img
              className="stp-dwayne"
              tabIndex="0"
              src="./stp-dark.png"
              alt="a collage of a girl looking blankly with her hand over her mouth"
            />
          </section>
          <ul className="stp-annimation">
            <li className="stp-text">Still Positive</li>
            <li className="stp-text">Still Positive</li>
            <li className="stp-text">Still Positive</li>
            <li className="stp-text">Still Positive</li>
            <li className="stp-text">Still Positive</li>
            <li className="stp-text">Still Positive</li>
          </ul>
        </article>
  
        <section className="new-main-wrapper">
          <Link className="new-title" to={`/episodes/${queriedEps.id}`}>
            <NewestEp queriedEps={queriedEps} />
          </Link>
        </section>

        <section className='main-sub'>
           <Subscribe/>
        </section>
      </section>
    </Layout>
  );
};

export default Main;
