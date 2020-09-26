import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import './App.scss';
import LoginIn from './views/login'
function App() {
  return ( 
    <BrowserRouter>
      <Switch>
        <Route exact component={LoginIn} path="/"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;