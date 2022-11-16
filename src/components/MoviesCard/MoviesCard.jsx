import React from 'react';
import flag from '../../images/flag.svg';
import './MoviesCard.css';
import { configApiMovies } from '../../utils/constants.jsx';

function MoviesCard ({card, likeFlag, likePut, likeUnPut, saveMovie, pageSaveMovie}) {

    const durationOnHour = (card) => {
        const minutes = card.duration
        const realmin = minutes % 60
        const hours = Math.floor(minutes / 60)
        return `${hours}ч ${realmin}мин`;
    }

    const duration = durationOnHour(card);

    const cardLikeButtonClassName = (
        `movies-card__flag ${pageSaveMovie ? 'movies-card__flag_green': ''}`
    ); 

    const handleLike = (e) => {
        e.preventDefault();
        if (pageSaveMovie){
            likeUnPut(card);
        }else{
            likePut(card);
        }

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
                onClick={handleLike} 
                type='button'>
                    <img className='movies-card__flag-icon' src={flag} alt='флаг лайка' />
                </button>
            </div>
            <img className='movies-card__image' src={ !pageSaveMovie ? `${configApiMovies.baseUrl}${card.image.url}` : card.image} alt={card.title} />
        </li>
    )
};

export default MoviesCard;