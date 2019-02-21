import React, { Component } from 'react';
import axios from 'axios';
import { REFLECTIONURL } from '../Constants.js'
import { Link } from 'react-router-dom';
import Logo from './QA Consulting.png';
import moment from 'moment';
import './Account.css';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            cohort: ''
        };
        this.update = () => {

        }
    }

    createAccount = (e) => {
        /*axios.post(BaseURL + CreateTraineeURL, {
            email: this.refs.itemEmail.value,
            password: this.refs.itemPassword.value,
            confirmPassword: this.refs.itemConfirmPasword.value,
            //cohort: this.refs.itemCohort.value,
        }).then(response => {
            //this.update();
        });*/

        this.setState({
            email: this.refs.itemEmail.value,
            password: this.refs.itemPassword.value,
            confirmPassword: this.refs.itemConfirmPassword.value,
            cohort: this.refs.itemMonth.value
        });
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.confirmPassword);
        console.log(this.state.cohort);

    }

    render() {
        return (
            <div className="Page" id="RegisterPage">
                <img className="Logo" src={Logo} role="presentation" />
                <header>Register An Account</header>
                <div className="AccountForm">
                    <div className="InputBoxContainer">
                        <input className="AccountInput" ref="itemEmail" type="email" id="emailBox" placeholder="Email Address" required />
                    </div>
                    <div className="InputBoxContainer">
                        <input className="AccountInput" ref="itemPassword" type="password" id="passwordBox" placeholder="Password" required />
                    </div>
                    <div className="InputBoxContainer">
                        <input className="AccountInput" ref="itemConfirmPassword" type="password" id="passwordBoxConfirm" placeholder="Confirm Password" required />
                    </div>
                    <input className="AccountInput" ref="itemMonth" type="month" required />
                </div>
                <div>
                    <button onClick={this.CreateAccount} id="Register-Button-Two">Register</button>
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


export default Register;
