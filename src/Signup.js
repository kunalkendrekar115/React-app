import React, { Component } from 'react'
import './signup.css'
import { Alert, Button, Form, Col, InputGroup } from 'react-bootstrap';
import $ from "jquery";

import 'jquery-ui/ui/widgets/datepicker';
class Signup extends Component {


  componentDidMount() {

    $("#datepicker").datepicker();
  }
  render() {
    return (

      <div>
        <div className="nav">

          <i
            class="material-icons back-arrow">
            arrow_back</i>

          <label className="title">Signup</label>
        </div >

        <div class="signup-form">

          <Form className="card">
            <Form.Row>
              <Form.Group as={Col} md={6}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text" placeholder="Enter First Name" />
              </Form.Group>

              <Form.Group as={Col} md={6}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
              </Form.Group>
            </Form.Row>


            <Form.Row>
              <Form.Group as={Col} md={6}>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text" placeholder="Enter Mobile Number" />
              </Form.Group>

              <Form.Group as={Col} md={6}>
                <Form.Label>Email ID</Form.Label>
                <Form.Control type="email" placeholder="Enter email id" />
              </Form.Group>
            </Form.Row>


            <Form.Row>
              <Form.Group as={Col} md={6}>
                <Form.Label>Gender</Form.Label>
                <div>
                  <Form.Check
                    inline
                    name="radioButtonSet"
                    type={'radio'}
                    label={'Male'}
                    id="radio1"
                  />

                  <Form.Check
                    inline
                    style={{ marginLeft: 10 }}
                    name="radioButtonSet"
                    type={'radio'}
                    label={'Female'}
                    id="radio2"
                  />
                </div>
              </Form.Group>

              <Form.Group as={Col} md={6}>
                <Form.Label>Date of birth</Form.Label>
                <InputGroup ref='datepicker'>
                  <Form.Control
                    id="datepicker"
                    type="text"
                    placeholder="DD/MM/YYYY" />
                  <InputGroup.Append>
                    <InputGroup.Text
                      onClick={() => { $("#datepicker").datepicker("show"); }}>
                      <i
                        class="material-icons back-arrow">
                        date_range</i>
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>

            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md={12}>
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
              </Form.Group>
            </Form.Row>


            <Form.Row>
              <Form.Group as={Col} md={4}>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter City" />
              </Form.Group>

              <Form.Group as={Col} md={4}>
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} md={4}>
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" placeholder="Enter Zip Code" />
              </Form.Group>
            </Form.Row>

            <Button variant="primary">Submit</Button>

          </Form>
        </div>

      </div>

    )
  }
}

export default Signup
