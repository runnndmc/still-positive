import React from "react";
import './newestEp.css'

const NewestEp = (props) => {
  const { queriedEps } = props;

  const audioFile = queriedEps.fields.audio_attach[0];

  function formatDate(date){
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [month, day, year].join("/");
  };

  return (
    <article className='new-wrapper'>
      <p className="new-episode-num"># {queriedEps.fields.id}</p>
      <h2 className='new-title'>{queriedEps.fields.title}</h2>
      <section className="info-wrap">
          <p className="new-duration">{queriedEps.fields.duration}</p>
          <span>{formatDate(queriedEps.fields.post_date)}</span>
        </section>
      <audio className='new-audio' controls>
        <source src={audioFile.url} type={audioFile.type}></source>
        Your browser does not support this audio.
      </audio>
    </article>
  );
};

export default NewestEp;
