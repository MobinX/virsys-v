
import React from 'react';
import { Route, Switch,Link } from 'react-router-dom';
import "./App.css";
import Navbar from './components/navbar/Navbar';
import Home from "./layouts/guest/home/Home"


const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </>
);

export default App;
