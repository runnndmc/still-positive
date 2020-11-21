import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";

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

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [month, day, year].join("/");
  }

  if (!isLoaded) {
    return <h4>Loading...</h4>;
  }

  return (
    <Layout>
      <h2>{episode.title}</h2>
      <p>{episode.id}</p>
      <p>{episode.duration}</p>
      {formatDate(episode.post_date)}
      <iframe
        title={episode.title}
        src={episode.video_link}
        height="130"
        width="230"
        frameBorder="0"
        allowFullScreen="allowfullscreen"
        controls="1"
        loading="eager"
      ></iframe>
      <img
        className="thumbnail"
        src={episode.thumbnail[0].thumbnails.large.url}
        alt="Still Positive logo. A cartoon reed-sternberg cell smiling with an outline of a person standing next to it and giving it the finger because - fuck illness"
        loading="lazy"
      ></img>
      <audio controls>
        <source src={episode.audio_attach[0].url} type={episode.audio_attach[0].type}></source>
        Your browser does not support this audio.
      </audio>
      <p>{episode.description}</p>
    </Layout>
  );
};

export default EpisodeDetail;
