import React from "react";
import { Route, Switch } from "react-router";

import "./App.css";
import About from "./screens/about/About";
import AllEpisodes from "./screens/allEpisodes/AllEpisodes";
import EpisodeDetail from "./screens/episodeDetail/EpisodeDetail";
import Main from "./screens/main/Main";

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/episodes/:id" component={EpisodeDetail} />
        <Route path="/episodes" component={AllEpisodes} />
        <Route path="/about" component={About} />
      </Switch>
    </main>
  );
}

export default App;
