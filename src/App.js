import React, { Component } from 'react';
import logo from './logo.svg';

import JobDetails from './JobDetails'
import NavBar from './NavBar';
import Product from './Product';

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from './ProductList';


class App extends Component {

 
  render() {
    return (
      <Router>
        <div>

          <NavBar></NavBar>

          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route path="/product" component={ProductList} />
            <Route path="/settings" component={JobDetails} />
          </Switch>
         
        </div>
      </Router>

    );
  }
}

export default App;
