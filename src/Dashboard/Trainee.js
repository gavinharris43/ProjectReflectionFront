import TraineeFull from './TraineeFull.js';

function Trainee({ match }) {
    return (
        <div>
            {match.params.id}
            <TraineeFull
                id={match.params.id}
            />
        </div>
    );
}

export default Trainee;
