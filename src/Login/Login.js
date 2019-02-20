import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Login.css';
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
            this.setState({email:event.target.value});
        }

        handleInputPassword = (event) => {
            this.setState({password:event.target.value});
        }

    render() {
        return (
            <div className = "Login">
                <div className = "Logo-Header">
                    <img src={logo} className = "Logo"/>
                </div> 
                <div className = "Login-Form">
                    <input type = "text" id = "emailBox" placeholder = "Email Address" value={this.state.email} onChange={(this.handleInputEmail)} required/>
                    <br/>
                    <input type = "text" id = "passwordBox" placeholder = "Password" value={this.state.password} onChange={(this.handleInputPassword)} required/>
                    <br/>
                    <div id = "Button">
                        <button onClick={this.update} id = "Login-Button">Login</button> 
                        <button onClick={this.update} id = "Register-Button">Register</button>
                        <br/>
                    <Link to="/"><div>Forgot Password</div></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
