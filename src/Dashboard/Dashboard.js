import React, { Component } from 'react';
import './Dashboard.css';
import Trainee from './Trainee.js';
//import CanvasJSReact, { CanvasJS, CanvasJSChart } from '../Canvasjs/canvasjs.react';
var CanvasJSReact = require('../Canvasjs/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints = [];
class Dashboard extends Component {


  render() {
    let cohorts = [];
    let trainees = [];
    let testCout = 1;
    for (let i = 0; i < 12; i++) {
      cohorts.push(
        <button className="SideButton">Cohort: {i + 1}</button>
      )
    }
    for (let i = 0; i < 30; i++) {
      trainees.push(
        <Trainee
          name={i + 1}
          metrics="Metrics"
          lastReview={testCout}
          averageReview={testCout}
        />
      )
      testCout++;
      if (testCout > 10) {
        testCout = 0;
      }
    }
    return (
      <div className="Dashboard">
        <div className="SideBar">
          <header>Cohorts</header>
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
