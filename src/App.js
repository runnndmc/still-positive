import React from "react";
import { Route, Switch } from "react-router";

import "./App.css";

import About from "./screens/About";
import AllEpisodes from "./screens/AllEpisodes";
import Contact from "./screens/Contact";
import EpisodeDetail from "./screens/EpisodeDetail";
import Main from "./screens/main/Main";

function App() {

  const environment = process.env.NODE_ENV;

  return (
    
    <div className="app">
       {environment === "development" ? (
       <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/episodes/:id" component={EpisodeDetail} />
          <Route path="/episodes" component={AllEpisodes} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      ) : (
          <h2>kitti piss a lot</h2>
      )}
    </div>
  );
}

export default App;
