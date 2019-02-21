import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from '../Account/QA Consulting.png'
import './FeedbackForm.css'

class FeedbackForm extends Component {

    constructor() {
        super();
        this.state = {
            weekNumber:"",
            howsYourWeek:"",
            whatWentWell:"",
            howToKeepDoingWell:"",
            whatWentBad:"",
            howToStopDoingBad:"",
            traineeId:""
        };
    }

    
    submitForm = (e) => {
        /*axios.post(BaseURL + CreateTraineeURL, {
            email: this.refs.itemEmail.value,
            password: this.refs.itemPassword.value,
            confirmPassword: this.refs.itemConfirmPasword.value,
            //cohort: this.refs.itemCohort.value,
        }).then(response => {
            //this.update();
        });*/

        this.setState({
            weekNumber: this.refs.weekNumber.value,
            howsYourWeek: this.refs.question1.value,
            whatWentWell: this.refs.question2.value,
            howToKeepDoingWell: this.refs.question3.value,
            whatWentBad: this.refs.question4.value,
            howToStopDoingBad: this.refs.question5.value,
            traineeId:""
        });//.then(() => {      
        console.log(this.state.weekNumber);
        console.log(this.state.howsYourWeek);
        console.log(this.state.whatWentWell);
        console.log(this.state.howToKeepDoingWell);
        console.log(this.state.whatWentBad);
        console.log(this.state.howToStopDoingBad);
        console.log(this.state.traineeId);
    //});
    }

    render() {
        return (
            <div className="Page" id="FeedbackPage">
                <img className="Logo" src={logo} />
                <h>Trainee Feedback Form</h>
                <fieldset className="Content">
                    Please ensure the answers to this form follow S.M.A.R.T Goals<br />
                    S: Specific<br />
                    M: Measurable<br />
                    A: Achievable<br />
                    R: Relevant<br />
                    T: Time-Bound<br />
                    Follow this link for more information:<Link to="/"> SMART Goals</Link>
                </fieldset>
                <fieldset className="Content">
                    <p>Which week are you on</p>
                    <select ref="weekNumber">
                        <option >1</option>
                        <option >2</option>
                        <option >3</option>
                        <option >4</option>
                        <option >5</option>
                        <option >6</option>
                        <option >7</option>
                        <option >8</option>
                        <option >9</option>
                        <option >10</option>
                        <option >11</option>
                        <option >12</option>
                    </select>
                    <p> How is your week going?</p>
                    <select ref="question1">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <p>What went well?</p>
                    <textarea className="FeedbackBox" ref="question2" id="question_2" required />
                    <p>How do you plan to show more of this?</p>
                    <textarea className="FeedbackBox" ref="question3" id="question_3" placeholder="Example: I will spend 15 mins every day working on a task?" required />
                    <p>What did not go well last week?</p>
                    <textarea className="FeedbackBox" ref="question4" id="question_4" required />
                    <p>How do you plan to avoid this issue again?</p>
                    <textarea className="FeedbackBox" ref="question5" id="question_5" placeholder="Example: I will leave the apartment at 8:30 without fail?" required />
                    <p>Have you followed SMART Goals</p>
                    <input type="checkbox" id="SMART_Followed" />
                    <div>
                        <button onClick={this.submitForm} id="Login-Button">Submit</button>
                    </div>
                </fieldset>
            </div>
        );
    }
}

export default FeedbackForm;