import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import './MoviesCardList.css';


function MoviesCardList ({moviesCard, moreButtonVisibility}) {
    return(
        <section className='movies-list'>
            <ul className='movies-list__card'>
                { moviesCard.map(card => 
                <MoviesCard 
                    card={card}
                    key= {card.id} 
                />)}
            </ul>
            <div className='movies-list__more'>
                <button className={`movies-list__more-button ${moreButtonVisibility ? 'movies-list__more-button-visibility' : ''}`} type='button'>
                    Ещё
                </button>
            </div>
        </section>
    )
};

export default MoviesCardList;