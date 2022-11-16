import React from 'react';


function ErrorMeasageMovies({handleError}) {

    return(
        <div className="error-measage-movies">
            <p className='error-measage-movies__input'>
                {handleError}
            </p>

        </div>
    )
};

export default ErrorMeasageMovies;