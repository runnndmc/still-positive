import React, { useEffect } from "react";

import "./subscribe.css";

const Subscribe = () => {
  const useScript = (url) => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://use.fontawesome.com/c66d5a27d2.js";
      script.async = true;
      document.body.appendChild(script);
    }, [url]);
  };
  useScript("https://use.fontawesome.com/c66d5a27d2.js");


  return (
    <>
      <section className="s-icons-wrapper">
        <a className="s-icon" aria-label="spotify logo" href="https://open.spotify.com/show/5l80JhmvXn6cnjsj7jogX6" target="blank">
          <i className="fa fa-spotify" aria-hidden="true"></i>
        </a>
        <a className="s-icon" aria-label="youtube logo" href="https://www.youtube.com/channel/UC13NJpipstz343VhDw0nmYQ" target="blank">
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </a>
        <a className="s-icon" aria-label="instagram logo" href="https://www.instagram.com/stillpositivepodcast/" target="blank">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a className="s-icon" aria-label="rss icon" href="https://anchor.fm/s/421f2344/podcast/rss" target="blank">
          <i className="fa fa-rss-square" aria-hidden="true"></i>
        </a>
      </section>
      <p className="subscribe">Subscribe to this Podcast</p>
    </>
  );
};

export default Subscribe;
