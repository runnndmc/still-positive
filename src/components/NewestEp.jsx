import React from "react";

const NewestEp = (props) => {
  const { queriedEps } = props;

  const audioFile = queriedEps.fields.audio_attach[0];

  console.log();
  return (
    <>
      <h2>{queriedEps.fields.title}</h2>
      <audio controls>
        <source src={audioFile} type={audioFile}></source>
        Your browser does not support this audio.
      </audio>
    </>
  );
};

export default NewestEp;
