import React from 'react';
import { useState, useEffect } from 'react';
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
    const [shortFilmCheck, setShortFilmCheck] = useState(
        localStorage.getItem('shortFilmChec') === 'true' ? true : false
    );
    const [errorFormMessage, setErrorFormMessage] = useState('');
    const [errorsSearchMovies, setErrorsSearchMovies] = useState('');
    // const [cards, setCards] = useState([]);
    const [filmsFilter, setfilmsFilter] = useState([]);
    const [moreButtonVisibility, setMoreButtonVisibility] = useState(false);
    
 
    const checkShortFilm = () => {
        setShortFilmCheck(!shortFilmCheck);
        localStorage.setItem('shortFilmChec', !shortFilmCheck);
    }

    function handleFilmSearchSubmit(searchFilmQuery) {
        if (searchFilmQuery){
            setLoad(true);
            setSearchFilmQuery(searchFilmQuery); 
            localStorage.setItem('searchFilmQuery', searchFilmQuery);
            localStorage.setItem('shortFilmChec', shortFilmCheck);
            
            if (!localStorage.getItem('cardsMovies')) {
                moviesApi.getMoviesCards()
                .then((data) => {
                    // setCards(data);
                    setMoreButtonVisibility(true);
                    listMoviesCards(data, searchFilmQuery, shortFilmCheck);
                    localStorage.setItem('cardsMovies', JSON.stringify(data));
                    setErrorFormMessage('');
                })
                .catch((err) => {
                    setErrorsSearchMovies('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
                    setErrorFormMessage('');
                })
                .finally(()=>{
                    setLoad(false);
                })
            }else{
                listMoviesCards(JSON.parse(localStorage.getItem('cardsMovies')), searchFilmQuery, shortFilmCheck);
                setMoreButtonVisibility(true);
                setErrorFormMessage('');
                setLoad(false);

            }
        }else{
            setLoad(false);
            setErrorFormMessage('Нужно ввести ключевое слово');
            setErrorsSearchMovies('');
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
        const foundCard = JSON.parse(localStorage.getItem('cardsMovies'));
        const searchQuery = localStorage.getItem('searchFilmQuery');
        if (foundCard && searchQuery) {
            listMoviesCards(foundCard, searchQuery, shortFilmCheck);
        }
    }, [searchFilmQuery, shortFilmCheck]);

  

    return(
        <section className="movies">
            <SearchForm 
                filmSearchSubmit={handleFilmSearchSubmit}
                shortFilmCheck={shortFilmCheck}
                chandgeShortFilmCheck={checkShortFilm}
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