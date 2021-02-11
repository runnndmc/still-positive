import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../../shared/Layout";
import "./episodeDetail.css";

const EpisodeDetail = () => {
  const [episode, setEpisode] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const findOneEpisode = async () => {
      const response = await axios.get(
        `https://api.airtable.com/v0/appRx1trr4DFayGsm/Table%201/${id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
        }
      );
      setEpisode(response.data.fields);
      setLoaded(true);
    };
    findOneEpisode();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [month, day, year].join("/");
  }

  /*   const toggleContent = (e) => {
    e.preventDefault();
    alert("toggle me bebe");
  }; */

  if (!isLoaded) {
    return <h4>One Minute Babe...</h4>;
  }

  return (
    <Layout>
      <section className="middle-wrap">
        <aside className="nested-details">
          <p className="detail-date">{formatDate(episode.post_date)}</p>
          <p className="detail-duration">{episode.duration}</p>
          <p className="detail-episode-num">Episode #{episode.id}</p>
        </aside>
        <img
          className="detail-thumbnail"
          src={episode.thumbnail[0].thumbnails.large.url}
          alt="Still Positive logo. A cartoon reed-sternberg cell smiling with an outline of a person standing next to it and giving it the finger because - fuck illness"
          loading="lazy"
        ></img>
      </section>

      <section className="detail-wrapper">
        <h3 className="detail-title">{episode.title}</h3>
        <iframe
          className="detail-audio"
          title={episode.title}
          width="100%"
          height="130"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={episode.audio_url}
        ></iframe>
        <iframe
          className="detail-video"
          width="100%"
          height="500"
          title={episode.title}
          src={episode.video_link}
          frameborder="0"
          allowfullscreen
        ></iframe>
        <p className="detail-description">{episode.description}</p>

        <button className="pdf-cc-btn" /* onClick={toggleContent(e)} */>
          <a
            href="https://docs.google.com/document/d/1mqtGgqyUaYDlffzFpC7G03sDTitIlUwoeJ8vHMc7uPo/edit?usp=sharing"
            target="_blank"
            className="button-text"
          >
            Closed Captions
          </a>
        </button>

        {/*  <section className='pdf-content'>this is content</section> */}
      </section>
    </Layout>
  );
};

export default EpisodeDetail;
