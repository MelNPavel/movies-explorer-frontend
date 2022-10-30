import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
// import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function Movies () {
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
        },
        {
            id: 4,
            title: '33 слова о дизайне',
            time: '1ч 47м',
            image:'https://images.unsplash.com/photo-1666625628272-a1071f6f7173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        },
        {
            id: 5,
            title: '33 слова о дизайне',
            time: '1ч 47м',
            image:'https://images.unsplash.com/photo-1666625628272-a1071f6f7173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        },
        {
            id: 6,
            title: '33 слова о дизайне',
            time: '1ч 47м',
            image:'https://images.unsplash.com/photo-1666625628272-a1071f6f7173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        },
        {
            id: 7,
            title: '33 слова о дизайне',
            time: '1ч 47м',
            image:'https://images.unsplash.com/photo-1666625628272-a1071f6f7173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        },
        {
            id: 8,
            title: '33 слова о дизайне',
            time: '1ч 47м',
            image:'https://images.unsplash.com/photo-1666625628272-a1071f6f7173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        },
        {
            id: 9,
            title: '33 слова о дизайне',
            time: '1ч 47м',
            image:'https://images.unsplash.com/photo-1666625628272-a1071f6f7173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        },
        {
            id: 10,
            title: '33 слова о дизайне',
            time: '1ч 47м',
            image:'https://images.unsplash.com/photo-1666625628272-a1071f6f7173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        },
        {
            id: 11,
            title: '33 слова о дизайне',
            time: '1ч 47м',
            image:'https://images.unsplash.com/photo-1666625628272-a1071f6f7173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        },
    ]

    return(
        <section className="movies">
            <SearchForm />
            <MoviesCardList
            moviesCard={moviesCard}
            moreButtonVisibility = {true} />
            {/* <Preloader /> */}
        </section>
    )
};

export default Movies;