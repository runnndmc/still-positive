import React from "react";
import Layout from "../../shared/Layout";

import "./about.css";

const About = () => {
  return (
    <Layout>
       <h2 className="about-title">
          About <em>STP</em>
        </h2>
      <section className="about-wrapper">
       
        <p className="about-p1">
          Still Positive is a podcast aiming to create connection, conversation and comedy around
          those with chronic illnesses and/or disabilities.
        </p>
        <p className="about-p2">
          Still Positive is for the sick ones who gave up on positivity when
          shit hit the fan but stuck around long enough to see it come back
          around again...or didn't but they're here to tell you why.
          <em>
            (Also to hear the best stories of abelist positivity and how their
            vita-mix will cure you 🙄)
          </em>
        </p>
        <p className="about-hosted">Hosted by: Dayna Marie</p>
      </section>
{/*       <section className="about-btn-wrap">
        <button className="subscribe-btn">Subscribe to Podcast</button>
      </section> */}
    </Layout>
  );
};

export default About;
