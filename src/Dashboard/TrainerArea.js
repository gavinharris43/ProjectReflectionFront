import React, { Component } from 'react';
import axios from 'axios'
import './Dashboard.css';
import { REFLECTIONURL } from '../Constants.js'
import Dashboard from './Dashboard.js'
import Trainee from './Trainee.js';
import Cohort from './Cohort.js';
import Logout from '../Logout.js'
import { Route, Link } from 'react-router-dom';

class TrainerArea extends Component {
    constructor() {
        super();
        this.state = {
            cohortList: "",
            cohortId: ""
        }
        this.update = () => {
        }
    }
    componentDidMount() {
        axios.get(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL + REFLECTIONURL.READCOHORTURL)
            .then(res => {
                const cohortList = res.data;
                this.setState({ cohortList });
            })
    }


    render() {
        let cohorts = [];
        for (let i = 0; i < this.state.cohortList.length; i++) {
            cohorts.push(
                <Link to={'/dashboard/' + this.state.cohortList[i].cohortId}> <button key={'Cohort: ' + this.state.cohortList[i].cohortId} >{this.state.cohortList[i].cohortName}</button></Link>
            )
        }
        return (
            <div className="Dashboard">
                <div className="SideBar">
                    <header>Cohorts</header>
                    {cohorts}
                    <Link to={'/dashboard'}><button id="AllAccountsButton">All Accounts</button></Link>
                    <Link to={'/dashboard/trainers'}><button id="TrainersButton">Trainers</button></Link>
                    <Link to={'/logout'}><button id="Logout">Logout</button></Link>
                </div>
                <Route exact path={"/dashboard" + '/:id'} component={Cohort} />
                <Route exact path={"/dashboard"} component={Dashboard} />
                <Route exact path={"/dashboard" + "/trainee" + "/:id"} component={Trainee} />
            </div>
        );
    }
}


export default TrainerArea;
