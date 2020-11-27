
import React from 'react';
import { Route, Switch,Link } from 'react-router-dom';
import "./App.css";
import Navbar from './components/navbar/Navbar';
import Home from "./layouts/guest/home/Home"
import Auth from "./layouts/guest/auth/Auth"
import Dashbord from './layouts/user/home/Home';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
      <Route path="/user" component={Dashbord} />

    </Switch>
  </>
);

export default App;
