import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Account.css';
import logo from './QA Consulting.png'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
        this.handleInputEmail = this.handleInputEmail.bind(this);
        this.handleInputPassword = this.handleInputPassword.bind(this);
    }
    handleInputEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    handleInputPassword = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div className = "Page" id="LoginPage">
                <img className="Logo" src={logo} />
                <div className="AccountForm">
                    <div className="InputBoxContainer">
                        <input className="AccountInput" type="email" id="emailBox" placeholder="Email Address" required />
                    </div>
                    <div className="InputBoxContainer">
                        <input className="AccountInput" type="password" id="passwordBox" placeholder="Password" required />
                    </div>
                </div>
                <div>
                    <button onClick={this.update} id="Login-Button">Login</button>
                    <Link to="/register">
                        <button onClick={this.update} id="Register-Button">Register</button>
                    </Link>
                </div>
                <div>
                    <Link to="/"><div>Forgot Password</div></Link>
                    <Link to="/dashboard"><div>Dashboard for now</div></Link>
                    <Link to="/feedbackform"><div>Feedback for now</div></Link>
                </div>
            </div>
        );
    }
}

export default Login;
