import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { REFLECTIONURL } from '../Constants.js'
//import { BrowserRouter, Route, Link } from 'react-router-dom';
class TraineeFull extends Component {
    constructor() {
        super();
        this.state = {
            trainee: ""
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
    }

    deleteEntry = () => {
        axios.delete(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL + REFLECTIONURL.DELETETRAINEEURL + "/" + this.props.id)
            .then(res => {
                window.location.href = '/dashboard'
            });
    }

    updateEntry = (e) => {
        e.preventDefault();
        axios.put(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL + REFLECTIONURL.UPDATETRAINEEURL + "/" + this.props.id, {
            firstName: this.refs.itemFirstName.value,
            lastName: this.refs.itemLastName.value,
            email: this.refs.itemEmail.value,
            password: this.refs.itemPassword.value,
            confirmPassword: this.refs.itemConfirmPassword.value,
            startDate: this.refs.itemMonth.value
        }).then(response => {
            this.update();
        });
        firstName: this.refs.itemFirstName.value = ""
        lastName: this.refs.itemLastName.value = ""
        email: this.refs.itemEmail.value = ""
        password: this.refs.itemPassword.value = ""
        confirmPassword: this.refs.itemConfirmPassword.value = ""
        startDate: this.refs.itemMonth.value = ""
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
        return (
            <div className="MainBar">
                <fieldset className="">
                    <legend>{" " + this.state.trainee.firstName + " " + this.state.trainee.lastName + " "}</legend>
                    <div>
                        {this.props.id}
                        Metrics</div>
                    {reviews}
                </fieldset>
                <fieldset className="">
                    <legend>Modify</legend>
                    <form className="UpdateForm">
                        <div>
                            <input className="AccountUpdate" ref="itemFirstName" type="text" id="" placeholder="First Name" required />
                            <input className="AccountUpdate" ref="itemLastName" type="text" id="" placeholder="Last Name" required />
                        </div>
                        <input className="AccountUpdate" ref="itemEmail" type="email" id="emailBox" placeholder="Email Address" required />
                        <div>
                            <input className="AccountUpdate" ref="itemPassword" type="password" id="passwordBox" placeholder="Password" required />
                            <input className="AccountUpdate" ref="itemConfirmPassword" type="password" id="passwordBoxConfirm" placeholder="Confirm Password" required />
                        </div>
                        <input className="AccountUpdate" ref="itemMonth" type="month" required />
                        <div>
                            <button onClick={this.deleteEntry}>Delete</button>
                            <button onClick={this.updateEntry}>Update</button>
                        </div>
                    </form>

                </fieldset>
            </div>
        );
    }
}

export default TraineeFull;
