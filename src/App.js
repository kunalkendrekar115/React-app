import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Button } from 'react-bootstrap';
import JobDetails from './JobDetails'
import Login from './Login';
import Menu from './Menu';
import NavBar from './NavBar';
import ProductList from './ProductList';
import Signup from './Signup';
import logo from './logo.svg';

class App extends Component {


  render() {
    return (
      <Router>

        <Switch>
          <Route  path="/" component={Menu}>
            <Route path="/login" component={Login} />
            <Route path="/product" component={ProductList} />
            <Route path="/settings" component={JobDetails} />
          </Route>
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>

    );
  }
}

export default App;
