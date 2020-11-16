import React from "react";
import { Link } from "react-router-dom";

const AllEpisodes = (props) => {
  const { allEpisodes } = props;

  return (
    <>
      <h1>All of the Episodes</h1>

      {allEpisodes.map((episode) => (
        <Link to={`/episodes/${episode.id}`}><h2 key={episode.id}>{episode.fields.title}</h2></Link>
      ))}
      
    </>
  );
};

export default AllEpisodes;
