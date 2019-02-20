import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from '../Login/QA Consulting.png';
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

        _deceaseMonth = () =>
        this.setState (
            prevState => ({cohort: prevState.cohort.subtract(1, 'month')}),
            this.filterByMonth
        )

        _increaseMonth = () =>
        this.setState (
            prevState => ({cohort: prevState.cohort.add(1, 'month')}),
            this.filterByMonth
        )

        _filterByMonth = () => {
        const cohort = this.state.cohort.clone()
            this._runFilter({
                minDate: cohort.startOf('month').format(),
                maxDate: cohort.endOf('month').format(),
            })
        }

    render() {
        return (
            <div className = "Register">
                <div className = "Register-Header">
                    <img src={logo} id = "Logo"/>
                </div> 
                <div className = "Register-Message">
                Register An Account
                </div>
                <div className = "Register-Form">
                    <input ref = "itemEmail" type = "text" id = "emailBox" placeholder = "Email Address" value={this.state.email} required/>
                    <br/>
                    <input ref = "itemPassword" type = "text" id = "passwordBox" placeholder = "Password" value={this.state.password} required/>
                    <br/>
                    <input ref = "itemConfrimPassword" type = "text" id = "passwordBox" placeholder = "Confirm Password" value={this.state.confirmPassword} required/>
                    <br/>
                    <div id = "Month-Selector">
                    <span onClick = {this._deceaseMonth}>{'<'}</span>
                    <span>{this.state.cohort.format('MMM YYYY')}</span>
                    <span onClick={this._increaseMonth}>
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