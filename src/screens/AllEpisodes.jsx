import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Layout from "../shared/Layout";


const AllEpisodes = () => {
 
  const [allEpisodes, setAllEpisodes] = useState([]);

 

  useEffect(() => {
    const apiCall = async () => {
      const resp = await axios.get(
        "https://api.airtable.com/v0/appRx1trr4DFayGsm/Table%201?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
        }
      );
      setAllEpisodes(resp.data.records);
    };
    apiCall();
  }, []);

  console.log(allEpisodes)

  return (
    <Layout>
      <h1>All of the Episodes</h1>

      {allEpisodes.map((episode) => (
        <Link to={`/episodes/${episode.id}`}><h2 key={episode.id}>{episode.fields.title}</h2></Link>
      ))}
      
    </Layout>
  );
};

export default AllEpisodes;
