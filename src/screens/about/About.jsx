import React from "react";
import Layout from "../../shared/Layout";

import "./about.css";

const About = () => {
  return (
    <Layout>
       <h2 className="about-title">About STP</h2>
      <section className="about-wrapper">
       
        <p className="about-p1">
        Talking to those with and without chronic illness and/or disabilities. Because even if you feel like death - we're not there yet. So let's chat!
        </p>
{/*         <p className="about-p2">
          Still Positive is for the sick ones who gave up on positivity when
          shit hit the fan but stuck around long enough to see it come back
          around again...or didn't but they're here to tell you why.
          <em>
            (Also to hear the best stories of abelist positivity and how their
            vita-mix will cure you 🙄)
          </em>
        </p> */}
        <p className="about-hosted">Hosted and produced by Dayna Marie (@_____daynamarie) </p>
        <p>Staying sick and wanna chat with me on the podcast? Email stillpositivepodcast@gmail.com</p>
      </section>
{/*       <section className="about-btn-wrap">
        <button className="subscribe-btn">Subscribe to Podcast</button>
      </section> */}
    </Layout>
  );
};

export default About;
