import React from 'react';
import TraineeFull from './TraineeFull.js';


function Trainee({ match }) {
    return (
        <div>
            <TraineeFull
                id={match.params.id}
            />
        </div>
    );
}

export default Trainee;
