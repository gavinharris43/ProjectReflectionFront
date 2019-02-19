import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {


  render() {
    let cohorts = [];
    let trainees = [];
    for (let i = 0; i < 12; i++) {
      cohorts.push(
        <button className="SideButton">Cohort: {i + 1}</button>
      )
    }
    for (let i = 0; i < 100; i++) {
      trainees.push(
        <fieldset>
          <legend>{i + 1}</legend>
          <table className="TraineeTable">
            <tbody>
              <tr>
                <td className="TraineeCardEntry">Personal Metrics</td>
                <td className="TraineeCardEntry">Last Review</td>
                <td className="TraineeCardEntry">Average Review</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      )
    }
    return (
      <div className="Dashboard">
        <div className="SideBar">
          Cohorts
          {cohorts}
          <button className="SideButton" id="AllAccountsButton">All Accounts</button>
          <button className="SideButton" id="TrainersButton">Trainers</button>
        </div>
        <div className="TraineeList">
          <header>Trainees</header>
          Search
          {trainees}
        </div>
      </div>

    );
  }
}

export default Dashboard;
