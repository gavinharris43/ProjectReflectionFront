import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Account/QA Consulting.png'
import './FeedbackForm.css'

class FeedbackForm extends Component {

    submitForm = (e) => {
        axios.post(REFLECTIONURL.BASEURL + REFLECTIONURL.FORMAPIURL + REFLECTIONURL.CREATEFORMURL, {
            weekNumber: this.refs.weekNumber.value,
            howsYourWeek: this.refs.howsYourWeek.value,
            whatWentWell: this.refs.whatWentWell.value,
            howToKeepDoingWell: this.refs.howToKeepDoingWell.value,
            whatWentBad: this.refs.whatWentBad.value,
            howToStopDoingBad: this.refs.howToStopDoingBad.value
        }).then(response => {
        });
    }

    render() {
        return (
            <div className="Page" id="FeedbackPage">
                <img className="Logo" src={logo} alt="presentation" />
                <header>Trainee Feedback Form</header>
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
                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                        <option value="5" >5</option>
                        <option value="6" >6</option>
                        <option value="7" >7</option>
                        <option value="8" >8</option>
                        <option value="9" >9</option>
                        <option value="10" >10</option>
                        <option value="11" >11</option>
                        <option value="12" >12</option>
                    </select>
                    <p> How is your week going?</p>
                    <select ref="howsYourWeek">
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
                    <textarea className="FeedbackBox" ref="whatWentWell" id="question_2" required />
                    <p>How do you plan to show more of this?</p>
                    <textarea className="FeedbackBox" ref="howToKeepDoingWell" id="question_3" placeholder="Example: I will spend 15 mins every day working on a task" required />
                    <p>What did not go well last week?</p>
                    <textarea className="FeedbackBox" ref="whatWentBad" id="question_4" required />
                    <p>How do you plan to avoid this issue again?</p>
                    <textarea className="FeedbackBox" ref="howToStopDoingBad" id="question_5" placeholder="Example: I will leave the apartment at 8:30 without fail" required />
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