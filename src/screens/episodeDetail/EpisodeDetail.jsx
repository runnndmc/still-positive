import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./episodeDetail.css";
import Layout from "../../shared/Layout";
import {getEpisode} from '../../services/episodes';
import {formatDate} from '../../services/date';


const EpisodeDetail = () => {
  const [episode, setEpisode] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchEpisode = async () => {
      const episode = await getEpisode(id);
      setEpisode(episode);
      setLoaded(true);
    };
    fetchEpisode();
  }, [id]);

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
          title={episode.title}
          src={episode.video_link}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p className="detail-description">{episode.description}</p>

        <button className="pdf-cc-btn">
          <a
            href={episode.cc}
            target="_blank"
            rel='noreferrer'
            className="button-text"
          >
            Closed Captions
          </a>
        </button>

      </section>
    </Layout>
  );
};

export default EpisodeDetail;
