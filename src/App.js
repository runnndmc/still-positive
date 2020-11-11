import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import About from "./screens/About";
import AllEpisodes from "./screens/AllEpisodes";
import Donate from "./screens/Donate";
import EpisodeDetail from "./screens/EpisodeDetail";
import Main from "./screens/Main";
import Layout from "./shared/Layout";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
