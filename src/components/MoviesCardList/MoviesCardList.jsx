import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import './MoviesCardList.css';


function MoviesCardList ({cards, moreButtonVisibility}) {
    return(
        <section className='movies-list'>
            <ul className='movies-list__card'>
                { cards.map(card => 
                <MoviesCard 
                    card={cards}
                    key= {cards.id} 
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