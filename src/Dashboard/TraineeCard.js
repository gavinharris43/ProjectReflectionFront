import React from 'react';
import { Link } from 'react-router-dom';

function TraineeCard({ id, name, metrics, currentHowsYourWeek, averageReview, match }) {


    let RAG = [];
    if (currentHowsYourWeek > 7) {
        RAG.push(<div className="RAG" key={'Trainee: ' + id} id="Green" />);
    } else if (currentHowsYourWeek < 4) {
        RAG.push(<div className="RAG" key={'Trainee: ' + id} id="Red" />);
    } else {
        RAG.push(<div className="RAG" key={'Trainee: ' + id} id="Amber" />);
    }

    return (
        <fieldset className="TraineeCard">
            <legend>
                <Link to={"/dashboard" +
                    "/trainee" +
                    "/" +
                    id}>{"- " + name + " -"}</Link>
            </legend>

            <div className="row">
                <div className="ReviewColumn" id="MetricsColumn">{metrics}</div>
                <div className="ReviewColumn">Last Review <br /> {currentHowsYourWeek} /10</div>
                <div className="ReviewColumn">Average Review <br /> {averageReview} /10</div>
                <div className="ReviewColumn">{RAG}</div>
            </div>


        </fieldset>
    );
}

export default TraineeCard;
