import React from 'react';
import flag from '../../images/flag.svg';
import './MoviesCard.css';

function MoviesCard ({card}) {
    return(
        <li className='movies-card'>
            <div className='movies-card__data'>
                <ul className='movies-card__data-input'>
                <li className='movies-card__title'>{card.nameRU}</li>
                <li className='movies-card__time'>{card.time}</li>
                </ul>
                <button className='movies-card__flag' type='button'>
                    <img className='movies-card__flag-icon' src={flag} alt='флаг лайка' />
                </button>
            </div>
            <img className='movies-card__image' src={card.image} alt={card.title} />
        </li>
    )
};

export default MoviesCard;