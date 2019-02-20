import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Account.css';
import Logo from './QA Consulting.png';
import moment from 'moment';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            cohort: moment()
        };
    }

    DecreaseMonth = () =>
        this.setState(
            prevState => ({ cohort: prevState.cohort.subtract(1, 'month') }),
            this.FilterByMonth
        )

    IncreaseMonth = () =>
        this.setState(
            prevState => ({ cohort: prevState.cohort.add(1, 'month') }),
            this.FilterByMonth
        )

    FilterByMonth = () => {
        const cohort = this.state.cohort.clone()
    }

    render() {
        return (
            <div className="AccountPage">
                <img className="AccountLogo" src={Logo}  role="presentation" />
                <h>Register An Account</h>
                <div className="AccountForm">
                    <div className="InputBoxContainer">
                        <input className="AccountInput" ref="itemEmail" type="email" id="emailBox" placeholder="Email Address" required />
                    </div>
                    <div className="InputBoxContainer">
                        <input className="AccountInput" ref="itemPassword" type="password" id="passwordBox" placeholder="Password" required />
                    </div>
                    <div className="InputBoxContainer">
                        <input className="AccountInput" ref="itemConfrimPassword" type="password" id="passwordBox" placeholder="Confirm Password" required />
                    </div>
                    <div className="InputBoxContainer" id="Month-Selector">
                        <span onClick={this.DecreaseMonth}>{'<'}</span>
                        <span>{this.state.cohort.format('MMM YYYY')}</span>
                        <span onClick={this.IncreaseMonth}>
                            {this.state.cohort.clone().add(1, 'hour') > moment() ? '' : '>'}
                        </span>
                    </div>
                </div>
                <div>
                    <button onClick={this.update} id="Register-Button-Two">Register</button>
                    <Link to="/">
                        <button onClick={this.update} id="Cancel-Button">Cancel</button>
                    </Link>
                    <Link to="/dashboard"><div>Dashboard for now</div></Link>
                </div>

            </div>
        );
    }

}


export default Register;
