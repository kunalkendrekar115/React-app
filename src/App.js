import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JobDetails from './JobDetails'
import NavBar from './NavBar';
import Product from './Product';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { arr: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }] }

  }
  render() {
    return (
      <div> 

        <NavBar></NavBar>
        {/* <Container fluid>
          <Row>
            {
              this.state.arr.map(() => {
                return (<Col sm={4}>
                  <div style={{ padding: 10 }}>
                    <Product></Product>
                  </div>
                </Col>)
              })
            }
          </Row>
        </Container> */}
       <Login></Login>
      </div>

    );
  }
}

export default App;
