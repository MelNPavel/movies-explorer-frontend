import React from 'react';
import flag from '../../images/flag.svg';
import './MoviesCard.css';
import { configApiMovies } from '../../utils/constants.jsx';
import SavedMovies from '../SavedMovies/SavedMovies';

function MoviesCard ({card, likeFlag}) {

    const durationOnHour = (card) => {
        const minutes = card.duration
        const realmin = minutes % 60
        const hours = Math.floor(minutes / 60)
        return `${hours}ч ${realmin}мин`;
    }

    const duration = durationOnHour(card);

    const cardLikeButtonClassName = (
        `movies-card__flag ${likeFlag ? 'movies-card__flag_green': ''}`
    ); 

    const addSavedMovies = () => {

    }

    return(
        <li className='movies-card'>
            <div className='movies-card__data'>
                <ul className='movies-card__data-input'>
                <li className='movies-card__title'>{card.nameRU}</li>
                <li className='movies-card__time'>{duration}</li>
                </ul>
                <button 
                className={cardLikeButtonClassName} 
                onClick={addSavedMovies} 
                type='button'>
                    <img className='movies-card__flag-icon' src={flag} alt='флаг лайка' />
                </button>
            </div>
            <img className='movies-card__image' src={ `${configApiMovies.baseUrl}${card.image.url}`} alt={card.title} />
        </li>
    )
};

export default MoviesCard;