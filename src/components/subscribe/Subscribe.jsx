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
      <h3 className="subscribe">Subscribe to this Podcast</h3>
      <a
        className="spotify-logo"
        aria-label="spotify logo"
        href="https://open.spotify.com/show/5l80JhmvXn6cnjsj7jogX6"
        target="blank"
        onclick="window.open(this.href); return false;"
      >
        <i class="fa fa-spotify" aria-hidden="true"></i>
      </a>
    </>
  );
};

export default Subscribe;
