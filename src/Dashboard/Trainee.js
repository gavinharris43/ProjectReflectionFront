import React, { Component } from 'react';
import TraineeFull from './TraineeFull.js';

function Trainee({ match }) {
    return (
        <div>
            {match.params.topicId}
            <TraineeFull/>
        </div>
    );
}

export default Trainee;
