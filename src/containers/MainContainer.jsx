import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import axios from "axios";

import About from "../screens/About";
import AllEpisodes from "../screens/AllEpisodes";
import Donate from "../screens/Donate";
import EpisodeDetail from "../screens/EpisodeDetail";
import Main from "../screens/Main";

const MainContainer = () => {
  const [allEpisodes, setAllEpisodes] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const resp = await axios.get(
        "https://api.airtable.com/v0/appRx1trr4DFayGsm/Table%201?maxRecords=10&view=Grid%20view",
        {
          headers: {
            "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
        }
      );
      setAllEpisodes(resp.data.records);
    };
    apiCall();
  }, []);




  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/episode">
        <EpisodeDetail />
      </Route>
      <Route path="/episodes">
        <AllEpisodes allEpisodes={allEpisodes}/>
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/donate">
        <Donate />
      </Route>
    </Switch>
  );
};

export default MainContainer;
