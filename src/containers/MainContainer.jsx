import React from "react";
import { Route, Switch } from "react-router";

import About from "../screens/About";
import AllEpisodes from "../screens/AllEpisodes";
import Donate from "../screens/Donate";
import EpisodeDetail from "../screens/EpisodeDetail";
import Main from "../screens/Main";

const MainContainer = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/episode">
        <EpisodeDetail />
      </Route>
      <Route path="/episodes">
        <AllEpisodes />
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
