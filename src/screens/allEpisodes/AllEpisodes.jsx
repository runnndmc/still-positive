import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from "../../shared/Layout";
import './allEpisodes.css';
import EpisodeCard from "../../components/episodeCard/EpisodeCard";



const AllEpisodes = () => {
  const [allEpisodes, setAllEpisodes] = useState([]);
  const [isLoaded, setLoaded] = useState(false)

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

  console.log(allEpisodes);


  if (!isLoaded) {
    return <h1>One moment babe..</h1>;
  }

  return (
    <Layout>
      <h1>All of the Episodes</h1>

      {allEpisodes.map((episode, index) => (
        <Link className='episode-card' to={`/episodes/${episode.id}`}>
          <EpisodeCard 
            title={episode.fields.title}
            description={episode.fields.description}
            id={episode.fields.id}
            img={episode.fields.thumbnail[0].thumbnails.large.url}
            key={index}
         />
         <button className='ep-detail-bttn'>Full Episode Details</button>
        </Link>
      ))}
    </Layout>
  );
};

export default AllEpisodes;
