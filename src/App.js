import React from 'react'
import { Route, Switch } from 'react-router';
import './App.css';
import Main from './screens/Main';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Main />
      </Route>
    </Switch>
    
  )
}

export default App;
