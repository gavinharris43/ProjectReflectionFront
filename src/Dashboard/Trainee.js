import React, { Component } from 'react';
import './Dashboard.css';
class Trainee extends Component {
    render() {
        let RAG = [];
        if (this.props.lastReview > 7) {
            RAG.push(
                <div className="RAG" id="Green" />
            );
        } else if (this.props.lastReview < 4) {
            RAG.push(
                <div className="RAG" id="Red" />
            );
        } else {
            RAG.push(
                <div className="RAG" id="Amber" />
            );
        }
    return(
            <fieldset className="TraineeCard">
    <legend>{this.props.name}</legend>
    <div className="row">
        <div className="ReviewColumn" id="MetricsColumn">
            {this.props.metrics}
        </div>
        <div className="ReviewColumn">
            Last Review <br /> {this.props.lastReview} /10
                    </div>
        <div className="ReviewColumn">
            Average Review <br /> {this.props.averageReview} /10
                    </div>
        <div className="ReviewColumn">
            {RAG}
        </div>
    </div>
</fieldset>
        );
    }
}

export default Trainee;
