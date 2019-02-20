import React, { Component } from 'react';
import './Dashboard.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
class TraineeFull extends Component {
    render() {
        let reviews = [];
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
        for (let i = 0; i < 12; i++) {
            reviews.push(
                <fieldset>
                    Review
                </fieldset>
            )
        }
        return (
            <div className="MainBar">
                <fieldset className="">
                    <legend>
                        Trainee
                </legend>
                    {reviews}
                </fieldset>
            </div>
        );
    }
}

export default TraineeFull;