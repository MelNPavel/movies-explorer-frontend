import React from 'react';
import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import './Movies.css';
import moviesApi from '../../utils/MoviesApi.jsx';

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