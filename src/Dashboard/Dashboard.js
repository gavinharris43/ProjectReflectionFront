import React, { Component } from 'react';
import './Dashboard.css';
import TraineeCard from './TraineeCard.js';
class Dashboard extends Component {
  render() {
    let trainees = [];
    for (let i = 0; i < 30; i++) {
      trainees.push(
        <TraineeCard
          id={i}
          name={i + 1}
          metrics="Metrics"
          lastReview={i % 10}
          averageReview={i % 10}
        />
      )
    }
    return (
      <div className="MainBar">
        <h>Trainees</h>
        <div>Search</div>
        {trainees}
      </div>
    );
  }
}

export default Dashboard;
