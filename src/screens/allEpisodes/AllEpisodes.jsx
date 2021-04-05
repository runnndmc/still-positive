import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../../shared/Layout";
import "./allEpisodes.css";
import EpisodeCard from "../../components/episodeCard/EpisodeCard";
import {getEpisodes} from '../../services/episodes';

const AllEpisodes = () => {
  const [allEpisodes, setAllEpisodes] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const episodes = await getEpisodes();
        setAllEpisodes(episodes);
        setLoaded(true);
    };
    fetchEpisodes();
  }, []);


  function formatDate(date) {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + (d.getDate() + 1),
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
      <section className="all-ep-wrapper">
        {allEpisodes.map((episode, index) => (
          <Link className="episode-card" to={`/episodes/${episode.id}`} key={index}>
   
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
     
    </Layout>
  );
};

export default AllEpisodes;
