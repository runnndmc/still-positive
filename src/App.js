import React from 'react'
import { Route, Switch } from 'react-router';
import './App.css';
import About from './screens/About';
import AllEpisodes from './screens/AllEpisodes';
import Donate from './screens/Donate';
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
      <Route  path='/about'>
        <About />
      </Route>
      <Route  path='/donate'>
        <Donate />
      </Route>
    </Switch>
    
  )
}

export default App;
