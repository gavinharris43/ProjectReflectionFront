import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from '../Account/QA Consulting.png'
import './FeedbackForm.css'

class FeedbackForm extends Component {

    constructor() {
        super();
        this.state = {
        };
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
                    <p> How is your week going?</p>
                    <select>
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
                    <textarea className="FeedbackBox" id="question_2" required />
                    <p>How do you plan to show more of this?</p>
                    <textarea className="FeedbackBox" id="question_3" placeholder="Example: I will spend 15 mins every day working on a task?" required />
                    <p>What did not go well last week?</p>
                    <textarea className="FeedbackBox" id="question_4" required />
                    <p>How do you plan to avoid this issue again?</p>
                    <textarea className="FeedbackBox" id="question_5" placeholder="Example: I will leave the apartment at 8:30 without fail?" required />
                    <p>Have you followed SMART Goals</p>
                    <input type="checkbox" id="SMART_Followed" />
                    <div>
                        <button onClick={this.update} id="Login-Button">Submit</button>
                    </div>
                </fieldset>
            </div>
        );
    }
}

export default FeedbackForm;