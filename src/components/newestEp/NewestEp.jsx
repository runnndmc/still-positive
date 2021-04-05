import React, { useState } from "react";
import { Redirect } from "react-router";

import "./newestEp.css";
import {formatDate} from "../../services/date"

const NewestEp = ({queriedEps}) => {
  const { fields } = queriedEps;
  const [activated, setActivated] = useState(false);

  const epDetailPg = () => {
    return <Redirect to={`/episodes/${queriedEps.id}`} />;
  };

  return (
    <>
       <h2 className="latest-episode">Newest Episode</h2>
      <section className="top-wrap">
        <p className="new-episode-num">Ep #{fields.id}</p>
        <p className="new-date">{formatDate(fields.post_date)}</p>
      </section>
      <iframe
        className="new-soundcloud"
        title={fields.title}
        width="96%"
        height="130"
        scrolling="no"
        frameBorder="no"
        src={fields.audio_url}
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
