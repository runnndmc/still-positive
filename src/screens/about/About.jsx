import React from "react";
import Layout from "../../shared/Layout";

import "./about.css";

const About = () => {
  return (
    <Layout>
      <section className="about-wrapper">
        <h2 className="about-title">
          About <em>STP</em>
        </h2>
        <p className="about-p1">
          Still Positive is a podcast aiming to create connection, conversation and comedy around
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
      <section className="about-btn-wrap">
        <button className="subscribe-btn">Subscribe to Podcast</button>
      </section>
      {/* <section className='who-she-wrapper'>
        <h2 className='who-she-title'>Who's Dayna?</h2>
        <p className='who-she-intro'>Dayna aka DMC aka Dayna Marie is a producer turned model turned standup comedian and internet wizard. She walks the Earth with her live-in roommate Tumi - a member of Hodgkins</p>
        <p className='featured-title'>Read more about her experience here:</p>
        <ul className='featured-links-wrapper'>
          <li className='featured-links'><a href='https://www.buzzfeed.com/stephaniemcneal/woman-landed-a-modeling-contract-while-fighting-cancer?utm_term=.agdAM3K8N'>BuzzFeed</a></li>
          <li className='featured-links'><a href='https://www.today.com/style/model-dayna-marie-battles-cancer-while-walking-runway-t57726'>Today.com</a></li>
          <li className='featured-links'><a href='https://www.facebook.com/watch/?v=495249990844274'>Marie Claire X L'Oreal</a></li>
        </ul>
      </section> */}
    </Layout>
  );
};

export default About;
