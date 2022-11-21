import React from 'react';
import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import ErrorMeasageMovies from '../ErrorMeasageMovies/ErrorMeasageMovies.jsx';
import {filterSearch, shortFiterFilms} from  '../../utils/utils.jsx';

function SavedMovies({saveMovie, likeUnPut}) {
    const [load, setLoad] = useState(false);
    const [searchFilmQuery, setSearchFilmQuery] = useState('');
    const [shortFilmCheck, setShortFilmCheck] = useState(false);
    const [errorFormMessage, setErrorFormMessage] = useState('');
    const [errorsSearchMovies, setErrorsSearchMovies] = useState('');
    const [cards, setCards] = useState([]);
    const [filmsFilter, setfilmsFilter] = useState([]);
    
    function handleFilmSearchSubmit(searchFilmQuery) {

        if(searchFilmQuery){
            setLoad(true);
            setSearchFilmQuery(searchFilmQuery); 
            listMoviesCards (saveMovie, searchFilmQuery, shortFilmCheck);
            setLoad(false);
        }else{
            setLoad(false);
            setErrorFormMessage('Нужно ввести ключевое слово');
        }
    }

    const listMoviesCards = (cards, searchFilmQuery, shortFilmCheck) => {
        const spisokFilmov = filterSearch(cards, searchFilmQuery);
        setfilmsFilter( shortFilmCheck ? shortFiterFilms(spisokFilmov) : spisokFilmov);
    };

    useEffect(()=>{
        listMoviesCards (saveMovie, searchFilmQuery, shortFilmCheck)
        }, [saveMovie, searchFilmQuery, shortFilmCheck])

    return(
        <section className="movies">
            <SearchForm 
                filmSearchSubmit={handleFilmSearchSubmit}
                shortFilmCheck={shortFilmCheck}
                setShortFilmCheck={setShortFilmCheck}
                errorFormMessage={errorFormMessage}
            />
            { load 
                ? <Preloader />
                    : filmsFilter.length
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