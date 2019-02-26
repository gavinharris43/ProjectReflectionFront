import React from 'react';
import axios from 'axios'
import Dashboard from './Dashboard.js'
import { REFLECTIONURL } from '../Constants.js'


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
