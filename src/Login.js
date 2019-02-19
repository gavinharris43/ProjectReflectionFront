import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './QA Consulting.png'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        return (
            <div className = "Login">
                <div className = "Logo-Header">
                    <img src={logo} className = "Logo"/>
                </div> 
                <div className = "Login-Form">
                    <input type = "text" placeholder = "Email Address" value={this.state.email} onChange={(this.handleInputEmail)} required/>
                    <br></br>
                    <input type = "text" placeholder = "Password" value={this.state.password} onChange={(this.handleInputPassword)} required/>
                </div>
            </div>
        );
    }
}

export default Login;
