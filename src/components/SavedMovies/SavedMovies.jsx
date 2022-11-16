import React from 'react';
import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import './SavedMovies.css';
import Preloader from '../Preloader/Preloader.jsx';
import ErrorMeasageMovies from '../ErrorMeasageMovies/ErrorMeasageMovies.jsx';

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
    
    const filterSearch = (cards, searchFilmQuery) => {
        return cards.filter(item => item.nameRU.toLowerCase().includes(searchFilmQuery.toLowerCase()));
    }

    const shortFiterFilms = (spisokFilmov) =>{
        return spisokFilmov.filter(item => item.duration < 40);
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
            />
            { load 
                ? <Preloader />
                    : filmsFilter.length
                        ? <MoviesCardList
                            cards={filmsFilter}
                            likeUnPut={likeUnPut}
                            saveMovie={saveMovie}
                            moreButtonVisibility = {false}
                        />
                        : <ErrorMeasageMovies handleError = {errorsSearchMovies}/>
            }
        </section>
    )
};

export default SavedMovies;