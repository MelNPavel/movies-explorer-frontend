import React from 'react';
import './ErrorMeasageMovies.css';


function ErrorMeasageMovies({handleError}) {

    return(
        <section className="error-measage-movies">
            <span className='error-measage-movies__input'>
                {handleError}
            </span>

        </section>
    )
};

export default ErrorMeasageMovies;