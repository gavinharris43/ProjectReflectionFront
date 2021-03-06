import React from 'react';
import './Dashboard.css';
import Dashboard from './Dashboard.js'
import TraineeFull from './TraineeFull.js';
import { Route, Link } from 'react-router-dom';

function TrainerArea({ match }) {
    let cohorts = [];
    for (let i = 0; i < 12; i++) {
        cohorts.push(
            <Link to={'/dashboard'} key={'Cohort: ' + i}>
                <button>Cohort: {i + 1}</button>
            </Link>
        )
    }
    return (
        <div className="Dashboard">
            <div className="SideBar">
                <header>Cohorts</header>
                {cohorts}
                <Link to={'/dashboard'}><button id="AllAccountsButton">All Accounts</button></Link>
                <Link to={'/dashboard/trainers'}><button id="TrainersButton">Trainers</button></Link>
            </div>
            <Route exact path={match.path + '/'} component={Dashboard} />
            <Route path={match.path + '/trainee'} component={TraineeFull} />
        </div>
    );
}

export default TrainerArea;
