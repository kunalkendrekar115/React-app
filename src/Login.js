import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Alert, Button, Form } from 'react-bootstrap';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import logo from './logo.svg';

class Login extends Component {


    constructor(props) {
        super(props)
        this.state = { email: '', password: '', validated: false }
    }

    validate(event) {

        const form = event.currentTarget;
        event.preventDefault()
        event.stopPropagation();
       
        if (form.checkValidity() === false) {
            this.setState({ validated: true });
            return
        }

       
        this.props.history.push('/signup')

    }
    render() {

        return (
            <div class="login-form">
                <div className="text-center" style={{ marginBottom: 15, fontSize: 26, color: 'black', fontStyle: 'bold' }}>
                    <span>Login</span>
                </div>
                <Form className="card"
                    noValidate
                    validated={this.state.validated}
                    onSubmit={e => this.validate(e)}>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type="email" placeholder="Enter email" onChange={(text) => {
                                this.setState({ emailError: false, email: text })
                            }} />
                        <Form.Control.Feedback type="invalid">
                            Please enter email ID
                       </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            ref="password"
                            required
                            className={'form-control has-error'}
                            type="password" placeholder="Password"
                            onChange={(text) => {
                                this.setState({ passwordError: false, password: text })
                            }} />
                        <Form.Control.Feedback type="invalid">
                            Please enter password
                       </Form.Control.Feedback>
                    </Form.Group>
                    <Button
                        type="submit"
                        className="submit-button" variant="primary">Submit</Button>

                </Form>
                <div className="text-center" style={{ marginTop: 10, fontSize: 14, cursor: 'pointer' }}>
                    <a href="/signup">Sign up</a>
                    <span style={{ marginLeft: 10, marginRight: 10 }}>|</span>
                    <span>Forgot Password</span>

                </div>
            </div>

        );
    }
}

export default Login;