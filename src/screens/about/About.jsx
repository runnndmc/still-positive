import React from "react";
import Subscribe from "../../components/subscribe/Subscribe";
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
        <p className="about-hosted">Hosted and produced by Dayna Marie (@_____daynamarie) </p>
        <p>Staying sick and wanna chat with me on the podcast? Email stillpositivepodcast@gmail.com</p>
      </section>
      <section className='about-sub'>
      <Subscribe />
      </section>
    </Layout>
  );
};

export default About;
