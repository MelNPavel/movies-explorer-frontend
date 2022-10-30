import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function SavedMovies() {
    const moviesCard = [
        {
            id: 1,
            title: '33 слова о дизайне',
            time: '1ч 47м',
            image:'https://images.unsplash.com/photo-1666812272845-c5dcaae45453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        },
        {
            id: 2,
            title: '33 слова о дизайне',
            time: '1ч 47м',
            image:'https://images.unsplash.com/photo-1666668321985-105042873ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        },
        {
            id: 3,
            title: '33 слова о дизайне',
            time: '1ч 47м',
            image:'https://images.unsplash.com/photo-1666834744271-af5ef132a179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        }
    ]

    return(
        <section className="movies">
            <SearchForm />
            <MoviesCardList
            moviesCard={moviesCard}
            moreButtonVisibility = {false}/>
        </section>
    )
};

export default SavedMovies;