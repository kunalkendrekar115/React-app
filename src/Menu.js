import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Button } from 'react-bootstrap';
import JobDetails from './JobDetails'
import Login from './Login';
import NavBar from './NavBar';
import Product from './Product';
import ProductList from './ProductList';
import logo from './logo.svg';

class Menu extends Component {


  render() {
    return (

      <div>
        <NavBar></NavBar>
        <div style={{ width: 400, height: 500 }}>
          {this.props.children}
        </div>
      </div>

    );
  }
}

export default Menu;
