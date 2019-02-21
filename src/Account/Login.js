import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Account.css';
import logo from './QA Consulting.png';
import axios from 'axios';
import {REFLECTIONURL} from '../Constants'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }
        checkUser = () => {

            axios.post(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL+ '/login', {
              email: this.state.email,
              password: this.state.password
            })
              .then((response) => {
                if (response.data[0] == this.state.email) {
                  sessionStorage.setItem("loggedUser", response.data[0]);
                  window.location.reload();
                }
              })
              .catch(function (error) {
              });
          }
        
  handleSubmit = (e) => {
    this.checkUser();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

        

    render() {
        return (
            <div className = "Page" id="LoginPage">
                <img className="Logo" src={logo} />
                <div className="AccountForm">
                    <div className="InputBoxContainer">
                    <h>{sessionStorage.getItem("loggedUser")===null ?"Please Sign in" : sessionStorage.getItem("loggedUser")+ " Logged In"  }</h>
                        <input className="AccountInput" onChange={this.handleChange} type="email" id="emailBox" placeholder="Email Address" required />
                    </div>
                    <div className="InputBoxContainer">
                        <input className="AccountInput" onChange={this.handleChange}  type="password" id="passwordBox" placeholder="Password" required />
                    </div>
                </div>
                <div>
                    <button onClick={this.handleSubmit}  id="Login-Button">Login</button>
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
