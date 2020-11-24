import React from "react";

const NewestEp = (props) => {
  const { queriedEps } = props;

  const audioFile = queriedEps.fields.audio_attach[0];

  return (
    <>
      <h2>{queriedEps.fields.title}</h2>
      <audio controls>
        <source src={audioFile.url} type={audioFile.type}></source>
        Your browser does not support this audio.
      </audio>
    </>
  );
};

export default NewestEp;
