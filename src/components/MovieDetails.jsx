import React from 'react';

function MovieDetails({match}) {
    return (
        <div>
            {console.log(match)}
            <h1>{match.params.plot}</h1>
        </div>
    );
}

export default MovieDetails;