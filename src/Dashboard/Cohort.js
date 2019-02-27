import React from 'react';
import Dashboard from './Dashboard.js'

function Cohort({ match }) {
    return (
        <div>
            <Dashboard
                cohortId={match.params.id}
            />
        </div>
    );
}

export default Cohort;
