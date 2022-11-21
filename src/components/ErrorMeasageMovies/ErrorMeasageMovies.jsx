import React from 'react';
import './ErrorMeasageMovies.css';


function ErrorMeasageMovies({handleError}) {

    return(
        <div className="error-measage-movies">
            <span className='error-measage-movies__input'>
                {handleError}
            </span>

        </div>
    )
};

export default ErrorMeasageMovies;