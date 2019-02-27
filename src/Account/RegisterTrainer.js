import React, { Component } from 'react';
import axios from 'axios';
import { REFLECTIONURL } from '../Constants.js'
import { Link } from 'react-router-dom';
import Logo from './QA Consulting.png';
import './Account.css';

class RegisterTrainer extends Component {

    constructor() {
        super();
        this.state = {
        };
        this.update = () => {

        }
    }

    createAccount = (e) => {
        axios.post(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL + REFLECTIONURL.CREATETRAINERURL, {
            firstName: this.refs.itemFirstName.value,
            lastName: this.refs.itemLastName.value,
            email: this.refs.itemEmail.value,
            password: this.refs.itemPassword.value,
            confirmPassword: this.refs.itemConfirmPassword.value,
        }).then(response => {
        });
    }

    render() {
        return (
            <div className="Page" id="RegisterPage">
                <img className="Logo" src={Logo} alt="presentation" />
                <header>Register An Account</header>
                <div className="AccountForm">
                    <div className="InputBoxContainer">
                        <input className="AccountInput" ref="itemFirstName" type="text" id="firstNameBox" placeholder="First Name" required />
                        <input className="AccountInput" ref="itemLastName" type="text" id="lastNameBox" placeholder="Last Name" required />
                    </div>
                    <div className="InputBoxContainer">
                        <input className="AccountInput" ref="itemEmail" type="email" id="emailBox" placeholder="Email Address" required />
                    </div>
                    <div className="InputBoxContainer">
                        <input className="AccountInput" ref="itemPassword" type="password" id="passwordBox" placeholder="Password" required />
                    </div>
                    <div className="InputBoxContainer">
                        <input className="AccountInput" ref="itemConfirmPassword" type="password" id="passwordBoxConfirm" placeholder="Confirm Password" required />
                    </div>
                </div>
                <div>
                    <button onClick={this.createAccount} id="Register-Button-Two">Register</button>
                    <Link to="/">
                        <button onClick={this.update} id="Cancel-Button">Cancel</button>
                    </Link>
                    <Link to="/dashboard"><div>Dashboard for now</div></Link>
                    <Link to="/feedbackform"><div>Feedback for now</div></Link>
                </div>

            </div>
        );
    }

}


export default RegisterTrainer;