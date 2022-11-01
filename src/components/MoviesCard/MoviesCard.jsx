import React from 'react';
import flag from '../../images/flag.png';
import './MoviesCard.css';

function MoviesCard ({card}) {
    return(
        <div className='movies-card'>
            <div className='movies-card__data'>
                <div>
                <p className='movies-card__title'>{card.title}</p>
                <p className='movies-card__time'>{card.time}</p>
                </div>
                <button className='movies-card__flag'>
                    <img className='movies-card__flag-icon' src={flag} alt='флаг лайка' />
                </button>
            </div>
            <img className='movies-card__image' src={card.image} alt={card.title} />
        </div>
    )
};

export default MoviesCard;