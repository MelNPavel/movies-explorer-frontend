import React from 'react';
import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import './Movies.css';
import moviesApi from '../../utils/MoviesApi.jsx';
import ErrorMeasageMovies from '../ErrorMeasageMovies/ErrorMeasageMovies.jsx';
import {filterSearch, shortFiterFilms} from  '../../utils/utils.jsx';

function Movies ({likePut, likeUnPut, likeFlag, saveMovie}) {
    const [load, setLoad] = useState(false);
    const [searchFilmQuery, setSearchFilmQuery] = useState('');
    const [shortFilmCheck, setShortFilmCheck] = useState(false);
    const [errorFormMessage, setErrorFormMessage] = useState('');
    const [errorsSearchMovies, setErrorsSearchMovies] = useState('');
    const [cards, setCards] = useState([]);
    const [filmsFilter, setfilmsFilter] = useState([]);
    const [moreButtonVisibility, setMoreButtonVisibility] = useState(false);

    function handleFilmSearchSubmit(searchFilmQuery) {
        if(searchFilmQuery){
            setLoad(true);
            setSearchFilmQuery(searchFilmQuery); 
            localStorage.setItem('searchFilmQuery', searchFilmQuery);
            localStorage.setItem('shortFilmChec', shortFilmCheck);
            
            if (!localStorage.getItem('cardsMovies')) {
                moviesApi.getMoviesCards()
                .then((data) => {
                    setCards(data);
                    setMoreButtonVisibility(true);
                    listMoviesCards(cards, searchFilmQuery, shortFilmCheck);
                    localStorage.setItem('cardsMovies', JSON.stringify(data));
                    setErrorFormMessage('');
                })                
                .catch((err) => {
                    setLoad(false);
                    setErrorsSearchMovies('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
                    setErrorFormMessage('');
                }
                );
            }else{
                setLoad(false);
                listMoviesCards(JSON.parse(localStorage.getItem('cardsMovies')), searchFilmQuery, shortFilmCheck)
                setMoreButtonVisibility(true);
                setErrorFormMessage('');

            }
        }else{
            setLoad(false);
            setErrorFormMessage('Нужно ввести ключевое слово');
            setErrorsSearchMovies('');
        }
    }

    const listMoviesCards = (cards, searchFilmQuery, shortFilmCheck) => {
        const spisokFilmov = filterSearch(cards, searchFilmQuery);
        setfilmsFilter( shortFilmCheck ? shortFiterFilms(spisokFilmov) : spisokFilmov);
    };

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
                            moreButtonVisibility = {moreButtonVisibility}
                            likeFlag={likeFlag}
                            likePut={likePut}
                            likeUnPut={likeUnPut}
                            saveMovie={saveMovie}
                        />
            : <ErrorMeasageMovies handleError = {errorsSearchMovies}/>
            }
        </section>
    )
};

export default Movies;