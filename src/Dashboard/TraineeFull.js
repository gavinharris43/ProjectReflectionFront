import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { REFLECTIONURL } from '../Constants.js'
class TraineeFull extends Component {
    constructor() {
        super();
        this.state = {
            trainee: "",
            cohort: ""
        }
        this.update = () => {
            axios.get(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL + REFLECTIONURL.READTRAINEEURL)
                .then(res => {
                    let trainee = res.data.filter(o => String(o.traineeId) === String(this.props.id));
                    trainee = trainee[0];
                    this.setState({ trainee });
                })
        }
    }
    componentDidMount() {
        axios.get(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL + REFLECTIONURL.READTRAINEEURL)
            .then(res => {
                let trainee = res.data.filter(o => String(o.traineeId) === String(this.props.id));
                trainee = trainee[0];
                this.setState({ trainee });
            })
        axios.get(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL + REFLECTIONURL.READCOHORTURL)
            .then(res2 => {
                let cohort = res2.data;
                this.setState({ cohort });
            })
    }

    deleteEntry = () => {
        axios.delete(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL + REFLECTIONURL.DELETETRAINEEURL + "/" + this.props.id)
            .then(res => {
                window.location.href = "/dashboard"
            });
    }

    updateEntry = (e) => {
        e.preventDefault();
        if (!this.refs.itemFirstName.value.length) {
            this.refs.itemFirstName.value = this.state.trainee.firstName;
        }
        if (!this.refs.itemLastName.value.length) {
            this.refs.itemLastName.value = this.state.trainee.lastName;
        }
        if (!this.refs.itemEmail.value.length) {
            this.refs.itemEmail.value = this.state.trainee.email;
        }
        if (!this.refs.itemPassword.value.length) {
            this.refs.itemPassword.value = this.state.trainee.password;
        }
        if (!this.refs.itemMonth.value.length) {
            this.refs.itemMonth.value = this.state.trainee.startDate;
        }

        axios.put(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL + REFLECTIONURL.UPDATETRAINEEURL + "/" + this.props.id, {
            firstName: this.refs.itemFirstName.value,
            lastName: this.refs.itemLastName.value,
            email: this.refs.itemEmail.value,
            password: this.refs.itemPassword.value,
            startDate: this.refs.itemMonth.value,
        }).then(response => {
            this.update();
        });
    }

    render() {
        let reviews = [];
        let RAG = [];
        if (this.props.lastReview > 7) {
            RAG.push(<div className="RAG" id="Green" />);
        } else if (this.props.lastReview < 4) {
            RAG.push(<div className="RAG" id="Red" />);
        } else {
            RAG.push(<div className="RAG" id="Amber" />);
        }
        if (!(this.state.trainee.startDate === "Trainer")) {
            for (let i = 0; i < 12; i++) {
                reviews.push(
                    <fieldset key={'Trainee: ' + i + ' Review ' + i}>
                        <legend>Review Date</legend>
                        <div className="ReviewColumn">
                            How did you feel your week went? <br /><br />
                            {this.props.lastReview} /10
                    </div>
                        <div className="ReviewColumn">
                            What went well last week? <br /><br />
                            {'lorem ipsum'}
                        </div>
                        <div className="ReviewColumn">
                            How do you plan to show more of this? <br /><br />
                            {'lorem ipsum'}
                        </div>
                        <div className="ReviewColumn">
                            What did not go well last week? <br /><br />
                            {'lorem ipsum'}
                        </div>
                        <div className="ReviewColumn">
                            How do you plan to avoid this issue again? <br /><br />
                            {'lorem ipsum'}
                        </div>
                    </fieldset>
                )
            }
        }
        return (
            <div className="MainBar">
                <fieldset className="">
                    <legend>{" " + this.state.trainee.firstName + " " + this.state.trainee.lastName + " "}</legend>
                    Cohort: - {this.state.trainee.startDate} <br/>
                    Email: - {this.state.trainee.email}<br/>
                    <div>Metrics</div>
                    {reviews}
                </fieldset>
                <fieldset className="">
                    <legend>Modify</legend>
                    <div className="UpdateForm">
                        <div>
                            <input className="AccountUpdate" ref="itemFirstName" type="text" id="firstNameUpdate" placeholder="First Name" />
                            <input className="AccountUpdate" ref="itemLastName" type="text" id="lastNameUpdate" placeholder="Last Name" />
                        </div>
                        <input className="AccountUpdate" ref="itemEmail" type="email" id="emailBox" placeholder="Email Address" />
                        <div>
                            <input className="AccountUpdate" ref="itemPassword" type="password" id="passwordBox" placeholder="Password" />
                            <div>
                                <select ref="itemMonth">
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                    <option>Trainer</option>
                                </select>
                            </div>
                            <button onClick={this.deleteEntry}>Delete</button>
                            <button onClick={this.updateEntry}>Update</button>
                        </div>
                    </div>
                </fieldset>
            </div>
        );
    }
}

export default TraineeFull;
