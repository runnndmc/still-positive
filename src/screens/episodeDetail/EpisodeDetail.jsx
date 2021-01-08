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
    window.scrollTo(0, 0);
  });

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

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [month, day, year].join("/");
  }

  const toggleContent = (e) => {
    e.preventDefault();
    alert("toggle me bebe");
  };

  if (!isLoaded) {
    return <h4>One Minute Babe...</h4>;
  }

  return (
    <Layout>
      <img
        className="detail-thumbnail"
        src={episode.thumbnail[0].thumbnails.large.url}
        alt="Still Positive logo. A cartoon reed-sternberg cell smiling with an outline of a person standing next to it and giving it the finger because - fuck illness"
        loading="lazy"
      ></img>

      <section className="middle-wrap">
        <aside className="detail-date">{formatDate(episode.post_date)}</aside>
        <p className="detail-duration">{episode.duration}</p>
        <p className="detail-episode-num">Episode #{episode.id}</p>
      </section>

      <section className="detail-wrapper">
        <h2 className="detail-title">{episode.title}</h2>
        {/*         <iframe className="detail-video"
          title={episode.title}
          src={episode.video_link}
          cc_lang_pref='en'
          cc_load_policy='1'
          frameBorder="0"
          allowFullScreen="allowfullscreen"
          controls="1"
          loading="eager"
        ></iframe> */}
        <iframe
          className="detail-audio"
          title={episode.title}
          width="98%"
          height="130"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={episode.audio_url}
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
