import React, { Component } from 'react';
import axios from 'axios'
import { REFLECTIONURL } from '../Constants.js'
import './Dashboard.css';
import TraineeCard from './TraineeCard.js';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: this.props.trainees
    }
    this.update = () => {
    }
  }
  render() {
    let trainee = [];
    for (let i = 0; i < this.state.trainees.length; i++) {
      trainee.push(
          <TraineeCard
            key={'Trainee: ' + i}
            id={this.state.trainees[i].traineeId}
            name={this.state.trainees[i].firstName + ' ' + this.state.trainees[i].lastName}
            metrics="Metrics"
            lastReview={this.state.trainees[i].currentHowsYourWeek}
            averageReview={this.state.trainees[i].averageHowsYourWeek}
          />
      )
    }
    return (
      <div className="MainBar">
        <header>Trainees</header>
        <div>Search</div>
        {trainee}
      </div>
    );
  }
}

export default Dashboard;
