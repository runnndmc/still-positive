import React from "react";
import Layout from "../../shared/Layout";

import "./about.css";

const About = () => {
  return (
    <Layout>
      <section className="about-wrapper">
        <h1 className="about-title">
          About <em>STP</em>
        </h1>
        <p className="about-p1">
          A podcast aiming to create connection, conversation and comedy around
          those with or without chronic illness and disability.
        </p>
        <p className="about-p2">
          Still Positive is for the sick ones who gave up on positivity when
          shit hit the fan but stuck around long enough to see it come back
          around again...or not.
          <em>
            (Also to hear the best stories of abelist positivity and how their
            vita-mix will cure you 🙄)
          </em>
        </p>
        <p className="about-hosted">Hosted by: Dayna Marie</p>
      </section>
      <button className="subscribe-btn">Subscribe to Podcast</button>
    </Layout>
  );
};

export default About;
