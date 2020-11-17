import React, { useEffect, useState } from "react";
import { Route, Switch, useParams } from "react-router";
import axios from "axios";

import About from "../screens/About";
import AllEpisodes from "../screens/AllEpisodes";
import Contact from "../screens/Contact";
import EpisodeDetail from "../screens/EpisodeDetail";
import Main from "../screens/Main";


const MainContainer = () => {
  const { id } = useParams();
  const [allEpisodes, setAllEpisodes] = useState([]);
  const [fetchEpisode, updateFetchEpisode] = useState(false)

  const environment = process.env.NODE_ENV;

  useEffect(() => {
    const apiCall = async () => {
      const resp = await axios.get(
        "https://api.airtable.com/v0/appRx1trr4DFayGsm/Table%201?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
        }
      );
      setAllEpisodes(resp.data.records);
    };
    apiCall();
  }, []);

  return (
    <>
      {environment === "development" ? (
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/episodes/:id">
            <EpisodeDetail/>
          </Route>
          <Route path="/episodes">
            <AllEpisodes allEpisodes={allEpisodes} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      ) : (
        <div>
          <h2>kitti piss a lot</h2>
        </div>
      )}
    </>
  );
};

export default MainContainer;
