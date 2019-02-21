import React, { Component } from 'react';
import './Dashboard.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
class TraineeFull extends Component {
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
                <fieldset>
                    <legend>Review Date</legend>
                    <div className="ReviewColumn">
                        How did you feel your week went? <br/><br/>
                        {this.props.lastReview} /10
                    </div>
                    <div className="ReviewColumn">
                       What went well last week? <br/><br/>
                       {'lorem ipsum'}
                    </div>
                    <div className="ReviewColumn">
                        How do you plan to show more of this? <br/><br/>
                        {'lorem ipsum'}
                    </div>
                    <div className="ReviewColumn">
                        What did not go well last week? <br/><br/>
                        {'lorem ipsum'}
                    </div>
                    <div className="ReviewColumn">
                        How do you plan to avoid this issue again? <br/><br/>
                        {'lorem ipsum'}
                    </div>
                </fieldset>
            )
        }
        return (
            <div className="MainBar">
                <fieldset className="">
                    <legend>Trainee</legend>
                    <div>Metrics</div>
                    {reviews}
                </fieldset>
            </div>
        );
    }
}

export default TraineeFull;
