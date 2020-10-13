import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import './App.scss';
import LoginIn from './views/login'
import frameSection from './views/layout'
function App() {
  return ( 
    <BrowserRouter>
      <Switch>
        <Route exact component={LoginIn} path="/"></Route>
        <Route exact component={frameSection} path="/framesec"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;