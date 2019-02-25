import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Account.css';
import logo from './QA Consulting.png';
import { REFLECTIONURL } from '../Constants'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };
    }

    checkUser = () => {

        axios.put(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL + REFLECTIONURL.VERIFYLOGINDETAILS, {
            email: this.state.email,
            password: this.state.password
        })
            .then((response) => {
                if (response.data.email === this.state.email) {

                    sessionStorage.setItem("loggedUser", response.data.email );
                    sessionStorage.setItem("type", response.data.type);

                 if(sessionStorage.getItem("type"===REFLECTIONURL.TRAINEE ) || sessionStorage.getItem("loggedUser").endsWith("@academytrainee.com")){
                        window.location.href="./feedbackform";
                    } 
                    else if (sessionStorage.getItem("type"===REFLECTIONURL.TRAINER) || sessionStorage.getItem("loggedUser").endsWith("@qa.com")){
                        window.location.href="./dashboard";
                    }
                    else{
                    window.location.reload();
                    }

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
            <div className="Page" id="LoginPage">
                <img className="Logo" src={logo} alt="presentation" />
                <div className="AccountForm">
                    <div className="InputBoxContainer">
                        <header>{sessionStorage.getItem("loggedUser") === null ? "Please Sign in" : sessionStorage.getItem("loggedUser") + " Logged In"}</header>
                        <input className="AccountInput" onChange={this.handleChange} type="email" id="email" placeholder="Email Address" required />
                    </div>
                    <div className="InputBoxContainer">
                        <input className="AccountInput" onChange={this.handleChange} type="password" id="password" placeholder="Password" required />
                    </div>
                </div>
                <div>

                    <button onClick={this.handleSubmit} id="Login-Button">Login</button>
                    <Link to="/register">

                        <button onClick={this.update} id="Register-Button">Register</button>
                    </Link>
                </div>
                <div>
                    <Link to={"/"}><div>Forgot Password</div></Link>
                    <Link to={"/dashboard"}><div>Dashboard for now</div></Link>
                    <Link to={"/feedbackform"}><div>Feedback for now</div></Link>
                </div>
            </div>
        );
    }
}

export default Login;
