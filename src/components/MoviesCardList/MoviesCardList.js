import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard.js';


function MoviesCardList ({moviesCard, moreButtonVisibility}) {
    return(
        <section className='movies-list'>
            <div className='movies-list__card'>
                { moviesCard.map(card => 
                <MoviesCard 
                    card={card}
                    key= {card.id} 
                />)}
            </div>
            <div className='movies-list__more'>
                <button className={`movies-list__more-button ${moreButtonVisibility ? 'movies-list__more-button-visibility' : ''}`}>
                    Ещё
                </button>
            </div>
        </section>
    )
};

export default MoviesCardList;