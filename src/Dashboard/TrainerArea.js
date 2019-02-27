import React, { Component } from 'react';
import './Dashboard.css';
import Dashboard from './Dashboard.js'
import Trainee from './Trainee.js';
import Cohort from './Cohort.js';
import { Route, Link } from 'react-router-dom';

class TrainerArea extends Component {

    handleChange() {
        window.location.reload();
    }

    render() {
        const COHORT = "/dashboard" +
            "/cohort";
        const TRAINEE = "/dashboard" +
            "/trainee";
        return (
            <div className="Dashboard">
                <div className="SideBar">
                    <header>Cohorts</header>
                    <Link to={COHORT + "/january"} onClick={this.handleChange}> <button>January</button></Link>
                    <Link to={COHORT + "/february"} onClick={this.handleChange}> <button>February</button></Link>
                    <Link to={COHORT + "/march"} onClick={this.handleChange}> <button>March</button></Link>
                    <Link to={COHORT + "/april"} onClick={this.handleChange}> <button>April</button></Link>
                    <Link to={COHORT + "/may"} onClick={this.handleChange}> <button>May</button></Link>
                    <Link to={COHORT + "/june"} onClick={this.handleChange}> <button>June</button></Link>
                    <Link to={COHORT + "/july"} onClick={this.handleChange}> <button>July</button></Link>
                    <Link to={COHORT + "/august"} onClick={this.handleChange}> <button>August</button></Link>
                    <Link to={COHORT + "/september"} onClick={this.handleChange}> <button>September</button></Link>
                    <Link to={COHORT + "/october"} onClick={this.handleChange}> <button>October</button></Link>
                    <Link to={COHORT + "/november"} onClick={this.handleChange}> <button>November</button></Link>
                    <Link to={COHORT + "/december"} onClick={this.handleChange}> <button>December</button></Link>
                    <br/>
                    <header>Trainer</header>
                    <Link to={COHORT + "/trainer"} onClick={this.handleChange}><button id="TrainersButton">Trainers</button></Link>
                    <Link to={"/dashboard"}><button id="AllAccountsButton">All Accounts</button></Link>
                    <Link to={"/logout"}><button id="Logout">Logout</button></Link>
                </div>
                <Route exact path={COHORT + "/:id"} component={Cohort} />
                <Route exact path={"/dashboard"} component={Dashboard} />
                <Route exact path={TRAINEE + "/:id"} component={Trainee} />
            </div>
        );
    }
}


export default TrainerArea;