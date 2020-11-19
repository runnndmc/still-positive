import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import EpisodeCard from "../components/EpisodeCard";

const AllEpisodes = () => {
  const [allEpisodes, setAllEpisodes] = useState([]);

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
      } catch (error) {
        throw error;
      }
    };
    apiCall();
  }, []);

  console.log(allEpisodes);

  return (
    <Layout>
      <h1>All of the Episodes</h1>

      {allEpisodes.map((episode, index) => (
        <Link to={`/episodes/${episode.id}`}>
          <EpisodeCard 
            title={episode.fields.title}
            description={episode.fields.description}
            id={episode.fields.id}
            key={index}
         />
        </Link>
      ))}
    </Layout>
  );
};

export default AllEpisodes;
