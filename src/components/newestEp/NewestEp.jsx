import React from "react";
import "./newestEp.css";

const NewestEp = (props) => {
  const { queriedEps, mp3, ogg } = props;

  const audioFile = queriedEps.fields.audio_attach[0];
  const soundCloud = queriedEps.fields.audio_url;

  console.log(soundCloud);

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [month, day, year].join("/");
  }

  return (
    <>
      <article className="new-wrapper">
        <p className="new-episode-num">Ep #{queriedEps.fields.id}</p>
        <span className="new-date">
          {formatDate(queriedEps.fields.post_date)}
        </span>
        <h3 className="new-title">{queriedEps.fields.title}</h3>
        <iframe
          title={queriedEps.fields.title}
          width="96%"
          height="130"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/955750255&color=%23b4b4b4&auto_play=false&hide_related=true&show_comments=true&show_user=false&show_reposts=false&show_teaser=false"
        ></iframe>
{/*         <audio className="new-audio" controls>
          <source src={ogg} type="audio/ogg" preload="auto"></source>
          <source src={mp3} type="audio/mp3" preload="auto"></source>
          Your browser does not support this audio!
        </audio> */}
      </article>
    </>
  );
};

export default NewestEp;
