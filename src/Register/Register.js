import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Logo from '../Login/QA Consulting.png';
import './Register.css';
import moment from 'moment';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            email:'',
            password: '',
            confirmPassword: '',
            cohort: moment()
        };
    }

        DecreaseMonth = () =>
        this.setState (
            prevState => ({cohort: prevState.cohort.subtract(1, 'month')}),
            this.FilterByMonth
        )

        IncreaseMonth = () =>
        this.setState (
            prevState => ({cohort: prevState.cohort.add(1, 'month')}),
            this.FilterByMonth
        )

        FilterByMonth = () => {
        const cohort = this.state.cohort.clone()
        }

    render() {
        return (
            <div className = "Register">
                <div className = "Register-Header">
                    <img src={Logo} id = "Logo" role = "presentation"/>
                </div> 
                <div className = "Register-Message">
                Register An Account
                </div>
                <div className = "Register-Form">
                    <input ref = "itemEmail" type = "text" id = "emailBox" placeholder = "Email Address" required/>
                    <br/>
                    <input ref = "itemPassword" type = "text" id = "passwordBox" placeholder = "Password" required/>
                    <br/>
                    <input ref = "itemConfrimPassword" type = "text" id = "passwordBox" placeholder = "Confirm Password" required/>
                    <br/>
                    <div id = "Month-Selector">
                    <span onClick = {this.DecreaseMonth}>{'<'}</span>
                    <span>{this.state.cohort.format('MMM YYYY')}</span>
                    <span onClick={this.IncreaseMonth}>
                        {this.state.cohort.clone().add(1, 'hour')> moment() ? '' : '>'}</span>
                    </div>
                    <div id = "Button">
                        <button onClick={this.update} id = "Register-Button-Two">Register</button>
                        <button onClick={this.update} id = "Cancel-Button">Cancel</button>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Register;