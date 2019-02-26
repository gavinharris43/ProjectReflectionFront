import React, { Component } from 'react';
import axios from 'axios'
import { REFLECTIONURL } from '../Constants.js'
import './Dashboard.css';
import TraineeCard from './TraineeCard.js';
let trainees = []
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      trainees: ""
    }
    this.update = () => {
    }
  }
  componentDidMount() {
    axios.get(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL + REFLECTIONURL.READTRAINEEURL)
      .then(res2 => {
        if (this.props.cohortId !== undefined) {
          trainees = res2.data.filter(o => String(o.cohortId) === String((this.props.cohortId)));
        } else {
          trainees = res2.data;
        }
        this.setState({ trainees });
      })
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
        {console.log(this.state.trainees)}
        <header>Trainees</header>
        <div>Search</div>
        {trainee}
      </div>
    );
  }
}

export default Dashboard;
