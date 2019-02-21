import React, { Component } from 'react';
import axios from 'axios'
import { REFLECTIONURL } from '../Constants.js'
import './Dashboard.css';
import TraineeCard from './TraineeCard.js';
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      trainees: "Example",
    }
    this.update = () => {
      axios.get(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL, REFLECTIONURL.READTRAINEEURL)
        .then(res => {
          //const items = res.data.filter(o => Object.keys(o).some(k => String(o[k]).toLowerCase().includes(this.refs.userInput.value.toLowerCase())));
          //let items = res.data.filter(o => o.equipmentName.toLowerCase().includes(this.refs.userNameInput.value.toLowerCase()));
          //items = items.filter(o => o.equipmentType.toLowerCase().includes(this.refs.userTypeInput.value.toLowerCase()));
          //items = items.filter(o => o.equipmentRarity.toLowerCase().includes(this.refs.userRarityInput.value.toLowerCase()));
          const trainees = res.data;
          this.setState({ trainees });
        })
    }
  }

  componentDidMount() {
    axios.get(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL, REFLECTIONURL.READTRAINEEURL)
      .then(res => {
        const trainees = res.data;
        this.setState({ trainees });
      })
  }

  render() {
    let trainees = [];
    for (let i = 0; i < this.state.trainees.length; i++) {
      trainees.push(
        <TraineeCard
          id={this.state.trainees[i].traineeId}
          name={this.state.trainees[i].firstName + ' ' + this.state.trainees[i].lastName}
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
