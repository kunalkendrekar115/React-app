import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, Alert } from 'react-bootstrap';

class Login extends Component {


    constructor(props) {
        super(props)
        this.state = { email: '', password: '' }
    }

    validate() {

        if (this.state.email === '') {
            this.setState({ emailError: true })
            return
        }

        if (this.state.password === '')
            this.setState({ passwordError: true })

    }
    render() {

        let emailError
        if (this.state.emailError)
            emailError = <Alert variant={'danger'}> Please enter email ID</Alert>
        let passwordError
        if (this.state.passwordError)
            passwordError = <Alert variant={'danger'}> Please enter Password</Alert>
        return (
            <div class="login-form">
                <div className="text-center" style={{ marginBottom: 15, fontSize: 26, color: 'black', fontStyle: 'bold' }}>
                    <span>Login</span>
                </div>
                <Form className="card">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(text) => {
                            this.setState({ emailError: false, email: text })
                        }} />
                        {emailError}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={(text) => {
                                this.setState({ passwordError: false, password: text })
                            }} />
                        {passwordError}
                    </Form.Group>
                    <Button
                        onClick={this.validate.bind(this)}
                        className="submit-button" variant="primary">Submit</Button>

                </Form>
                <div className="text-center" style={{ marginTop: 10, fontSize: 14, cursor: 'pointer' }}>
                    <span>Sign up</span>
                    <span style={{ marginLeft: 10, marginRight: 10 }}>|</span>
                    <span>Forgot Password</span>

                </div>
            </div>

        );
    }
}

export default Login;