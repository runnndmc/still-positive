import React, { useState } from "react";
import { Redirect } from "react-router";
import "./newestEp.css";

const NewestEp = (props) => {
  const { queriedEps } = props;
  const [activated, setActivated] = useState(false);

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + (d.getDate() + 1),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [month, day, year].join("/");
  }

  const epDetailPg = () => {
    return <Redirect to={`/episodes/${queriedEps.id}`} />;
  };

  return (
    <>
       <h2 className="latest-episode">Newest Episode</h2>
      <section className="top-wrap">
        <p className="new-episode-num">Ep #{queriedEps.fields.id}</p>
        <p className="new-date">{formatDate(queriedEps.fields.post_date)}</p>
      </section>
      <iframe
        className="new-soundcloud"
        title={queriedEps.fields.title}
        width="96%"
        height="130"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={queriedEps.fields.audio_url}
      ></iframe>
      <button
        onClick={epDetailPg}
        aria-pressed={activated ? "true" : "false"}
        onClick={() => setActivated(!activated)}
        className="stubborn-btn"
      >
        Episode Details
      </button>
    </>
  );
};

export default NewestEp;
