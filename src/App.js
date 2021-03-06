import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";

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
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect from="/" to="/menu" />}></Route>
            <Route path="/menu" component={Menu}>
            </Route>
            <Route path="/signup" component={Signup} />
          </Switch>

        </Router>

      </div>

    );
  }
}

export default App;
