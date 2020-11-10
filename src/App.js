import React from 'react'
import { Route, Switch } from 'react-router';
import './App.css';
import AllEpisodes from './screens/AllEpisodes';
import EpisodePage from './screens/EpisodePage';
import Main from './screens/Main';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Main />
      </Route>
      <Route  path='/episode'>
        <EpisodePage />
      </Route>
      <Route  path='/episodes'>
        <AllEpisodes />
      </Route>
    </Switch>
    
  )
}

export default App;
