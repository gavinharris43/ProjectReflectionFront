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
    }
    componentDidMount() {
        axios.get(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL + REFLECTIONURL.READTRAINEEURL)
            .then(res => {
                const trainees = res.data;
                this.setState({ trainees });
            })
    }

    deleteEntry = () => {
        axios.delete(REFLECTIONURL.BASEURL + REFLECTIONURL.APIURL + REFLECTIONURL.DELETETRAINEEURL + this.props.id)
            .then(res => {
                window.location.href='/dashboard'
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
                <button onClick={this.deleteEntry}>Delete</button>
            </div>
        );
    }
}

export default TraineeFull;
