import React from "react";

const AllEpisodes = (props) => {
  const { allEpisodes } = props;


  return (
    <>
      <h1>All of the Episodes</h1>
      {allEpisodes.map(episode => (
    <h2 key={episode.id}>{episode.fields.title}</h2>
      ))}
    </>
  );
};

export default AllEpisodes;
