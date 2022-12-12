import React from 'react';
import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
// import Preloader from '../Preloader/Preloader.jsx';
import ErrorMeasageMovies from '../ErrorMeasageMovies/ErrorMeasageMovies.jsx';
import {filterSearch, shortFiterFilms} from  '../../utils/utils.jsx';

function SavedMovies({saveMovie, likeUnPut}) {
    // const [load, setLoad] = useState(false);
    const [searchFilmQuery, setSearchFilmQuery] = useState('');
    const [shortFilmCheck, setShortFilmCheck] = useState(false);
    const [errorFormMessage, setErrorFormMessage] = useState('');
    const [errorsSearchMovies, setErrorsSearchMovies] = useState('');
    // const [cards, setCards] = useState([]);
    const [filmsFilter, setfilmsFilter] = useState([saveMovie]);
    
    const checkShortFilm = () => {
        setShortFilmCheck(!shortFilmCheck);
    }

    function handleFilmSearchSubmit(searchFilmQuery) {

        if (searchFilmQuery){
            setSearchFilmQuery(searchFilmQuery); 
            listMoviesCards (saveMovie, searchFilmQuery, shortFilmCheck);
        }else{
            setErrorFormMessage('Нужно ввести ключевое слово');
        }

        if (!filmsFilter.length && searchFilmQuery) {
            setErrorsSearchMovies('Ничего не найдено');
        }
    }

    const listMoviesCards = (cards, searchFilmQuery, shortFilmCheck) => {
        const spisokFilmov = filterSearch(cards, searchFilmQuery);
        setfilmsFilter( shortFilmCheck ? shortFiterFilms(spisokFilmov) : spisokFilmov);
    };

    useEffect(()=>{
        listMoviesCards (saveMovie, searchFilmQuery, shortFilmCheck)
        }, [saveMovie, searchFilmQuery, shortFilmCheck])

    useEffect(()=>{
        if (!filmsFilter) {
            setErrorsSearchMovies('Ничего не найдено');
        }
        }, [filmsFilter])

    return(
        <section className="movies">
            <SearchForm 
                filmSearchSubmit={handleFilmSearchSubmit}
                shortFilmCheck={shortFilmCheck}
                chandgeShortFilmCheck={checkShortFilm}
                errorFormMessage={errorFormMessage}
                pageSaveMovie = {true}
            />
            { filmsFilter.length
                        ? <MoviesCardList
                            cards={filmsFilter}
                            likeUnPut={likeUnPut}
                            saveMovie={saveMovie}
                            pageSaveMovie = {true}
                            moreButtonVisibility = {false}
                        />
                        : <ErrorMeasageMovies handleError = {errorsSearchMovies}/>
            }
        </section>
    )
};

export default SavedMovies;