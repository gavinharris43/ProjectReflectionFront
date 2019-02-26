import React, { Component } from 'react';
import axios from 'axios'
import './Dashboard.css';
import { REFLECTIONURL } from '../Constants.js'
import Dashboard from './Dashboard.js'
import Trainee from './Trainee.js';
import Logout from '../Logout.js'
import { Route, Link } from 'react-router-dom';

class TrainerArea extends Component {
    constructor() {
        super();
        this.state = {
            cohortList: "",
            traineeList: "Example",
            cohortId: ""
        }
        this.update = () => {
            axios.get(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL + REFLECTIONURL.READTRAINEEURL)
            .then(res => {
                let traineeList = res.data.filter(o => o.cohortId.includes(this.props.cohortId));
                this.setState({ traineeList });
            })
        }
    }

    cohortSwitch = (id) =>{
        this.setState({ cohortId: id });
        this.update();
    }

    componentDidMount() {
        axios.get(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL + REFLECTIONURL.READCOHORTURL)
            .then(res => {
                let cohortList = res.data;
                this.setState({ cohortList });

            })
        axios.get(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL + REFLECTIONURL.READTRAINEEURL)
            .then(res2 => {
                let traineeList = res2.data;
                this.setState({ traineeList });
            })
    }


    render() {
        let cohorts = [];
        let trainees = [];
        for (let i = 0; i < this.state.cohortList.length; i++) {
            cohorts.push(
                    <button key={'Cohort: ' + this.state.cohortList[i].cohortId} onClick={this.cohortSwitch(this.cohortList[i].cohortId)}>{this.state.cohortList[i].cohortName}</button>
            )
        }
        return (
            <div className="Dashboard">
                <div className="SideBar">
                    <header>Cohorts</header>
                    {console.log(this.state.traineeList)}
                    {cohorts}
                    <Link to={'/dashboard'}><button id="AllAccountsButton">All Accounts</button></Link>
                    <Link to={'/dashboard/trainers'}><button id="TrainersButton">Trainers</button></Link>
                    <Link to={'/logout'}><button id="Logout">Logout</button></Link>
                </div>
                <Route exact path={"/dashboard" + '/'} render={() => (
                    <Dashboard
                        trainees={this.state.traineeList}
                        cohortId={this.state.cohortId}
                    />
                )} />
                <Route path={"/dashboard" + '/trainee/:id'} component={Trainee} />
            </div>
        );
    }
}


export default TrainerArea;
