import React from 'react';
import flag from '../../images/flag.svg';
import './MoviesCard.css';
import { configApiMovies } from '../../constants/constants.jsx';

function MoviesCard ({card, likePut, likeUnPut, saveMovie, pageSaveMovie}) {

    const durationOnHour = (card) => {
        const minutes = card.duration
        const realmin = minutes % 60
        const hours = Math.floor(minutes / 60)
        return `${hours}ч ${realmin}мин`;
    }
    
    const findCard = (cardMovie, massiveSaveMovie) => {
        return massiveSaveMovie.find(item => 
            item.movieId === cardMovie.id)
    }

    const findCardMoovie = findCard(card, saveMovie)
    
    const duration = durationOnHour(card);

    const cardLikeButtonClassName = (
        `movies-card__flag ${pageSaveMovie || findCardMoovie ? 'movies-card__flag_green': ''}`
    ); 

    const handleLike = (e) => {
        e.preventDefault();
        if (findCardMoovie || pageSaveMovie){
            likeUnPut(pageSaveMovie ? card : findCardMoovie);
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
            <a href = {!pageSaveMovie ? `${card.trailerLink}` : card.trailerLink} rel="noreferrer" target="_blank" ><img className='movies-card__image' src={ !pageSaveMovie ? `${configApiMovies.baseUrl}${card.image.url}` : card.image} alt={card.title} /></a>
        </li>
    )
};

export default MoviesCard;