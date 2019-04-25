import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import { Route, BrowserRouter as IndexRoute, Switch } from "react-router-dom";

import { Button } from 'react-bootstrap';
import JobDetails from './JobDetails'
import Login from './Login';
import NavBar from './NavBar';
import Product from './Product';
import ProductList from './ProductList';
import logo from './logo.svg';

class Menu extends Component {


  render() {
    console.log(this.props.children)
    return (

      <div>
        <NavBar></NavBar>


          <Route exact path="/menu/" component={Login} />
          <Route path="/menu/product" component={ProductList} />
          <Route path="menu/settings" component={JobDetails} />
       
      </div>

    );
  }
}

export default Menu;
