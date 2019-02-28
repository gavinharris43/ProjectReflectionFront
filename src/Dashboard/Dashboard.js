import React, { Component } from 'react';
import axios from 'axios'
import { REFLECTIONURL } from '../Constants.js'
import './Dashboard.css';
import TraineeCard from './TraineeCard.js';
let trainees = []
let type = []
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
        if (this.props.cohortId) {
          trainees = res2.data.filter(o => String(o.startDate).toLowerCase().includes(String(this.props.cohortId).toLowerCase()));
        } else {
          trainees = res2.data;
        }
        this.setState({ trainees });
      })
  }

  deleteCohort() {
    for (let i = 0; i < this.state.trainees.length; i++) {
      axios.delete(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL + REFLECTIONURL.DELETETRAINEEURL + "/" + this.state.trainees[i].email)
        .then(res => {
        });
    }
  }

  render() {
    let trainee = [];
    for (let i = 0; i < this.state.trainees.length; i++) {
      trainee.push(
        <TraineeCard
          key={'Trainee: ' + i}
          id={this.state.trainees[i].email}
          name={this.state.trainees[i].firstName + ' ' + this.state.trainees[i].lastName}
          metrics="Metrics"
          currentHowsYourWeek={this.state.trainees[i].currentHowsYourWeek}
          averageReview={this.state.trainees[i].averageHowsYourWeek}
        />
      )
    }
    return (
      <div className="MainBar">
        <header>Accounts</header>
        {trainee}
      </div>
    );
  }
}

export default Dashboard;
