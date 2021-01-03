import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Layout from "../../shared/Layout";
import "./allEpisodes.css";
import EpisodeCard from "../../components/episodeCard/EpisodeCard";

const AllEpisodes = () => {
  const [allEpisodes, setAllEpisodes] = useState([]);
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
        setAllEpisodes(resp.data.records);
        setLoaded(true);
      } catch (error) {
        throw error;
      }
    };
    apiCall();
  }, []);

  function formatDate(date) {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [month, day, year].join("/");
  }

  if (!isLoaded) {
    return <h1>One moment babe..</h1>;
  }

  return (
    <Layout>
      <h2 className="header-all-eps">All Episodes</h2>
      <section className="all-ep-wrapper">
        {allEpisodes.map((episode, index) => (
          <Link className="episode-card" to={`/episodes/${episode.id}`}>
            <EpisodeCard
              title={episode.fields.title}
              description={episode.fields.description}
              id={episode.fields.id}
              date={formatDate(episode.fields.post_date)}
              img={episode.fields.thumbnail[0].thumbnails.large.url}
              key={index}
            />
            <section className="btn-wrapper">
              <button className="ep-detail-btn">View This Episode</button>
            </section>
          </Link>
        ))}
        </section>
        <h3 className="start">Series begins Feburary 2021!</h3>
    </Layout>
  );
};

export default AllEpisodes;
