import React, { Component } from 'react';
import './Dashboard.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class TraineeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        let RAG = [];
        if (this.props.lastReview > 7) {
            RAG.push(<div className="RAG" id="Green" />);
        } else if (this.props.lastReview < 4) {
            RAG.push(<div className="RAG" id="Red" />);
        } else {
            RAG.push(<div className="RAG" id="Amber" />);
        }

        return (
            <fieldset className="TraineeCard">
                <legend>
                    <Link to={"/dashboard/trainee"}>{this.props.name}</Link>
                </legend>

                <div className="row">
                    <div className="ReviewColumn" id="MetricsColumn">{this.props.metrics}</div>
                    <div className="ReviewColumn">Last Review <br /> {this.props.lastReview} /10</div>
                    <div className="ReviewColumn">Average Review <br /> {this.props.averageReview} /10</div>
                    <div className="ReviewColumn">Red amber green</div>
                </div>

            </fieldset>
        );
    }
}


export default TraineeCard;
