import React from "react";
import "./newestEp.css";

const NewestEp = (props) => {
  const { queriedEps } = props;

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
          className="new-soundcloud"
          title={queriedEps.fields.title}
          width="96%"
          height="130"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src={queriedEps.fields.audio_url}
        ></iframe>
      </article>
    </>
  );
};

export default NewestEp;
