import React from "react";
import "./episodeCard.css";

const EpisodeCard = (props) => {
  const { title, description, img, id, date } = props;

  const descriptionTeaser = () => {
    if (description.length >= 55) {
    }
  };

  return (
    <>
      <section className="id-wrapper">
        <p className="ep-num">Ep #{id}</p>
        <p className="ep-date">{date}</p>
      </section>
      <h3 className="ep-name">{title}</h3>
      <img
        className="thumbnail"
        src={img}
        alt="Still Positive logo. A cartoon reed-sternberg cell smiling with an outline of a person standing next to it and giving it the finger because - fuck illness"
        loading="lazy"
      ></img>

      <p className="ep-description">{description}</p>
    </>
  );
};

export default EpisodeCard;
