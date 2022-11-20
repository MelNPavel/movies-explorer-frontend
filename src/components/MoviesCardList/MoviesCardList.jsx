import React, { useState } from 'react';
import { useEffect } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import './MoviesCardList.css';
import {useGetWidthWindow} from '../../utils/utils.jsx';


function MoviesCardList ({cards, moreButtonVisibility, likePut, likeUnPut, saveMovie, pageSaveMovie}) {
    const [quantityList, setQuantityList] = useState([]);
    const [quantityCard, setQuantityCard] = useState({quantity: 0, moreQuantityCard: 0 });

    const width = useGetWidthWindow();

    const insertMoreCards = () => {
        if ((cards.length - quantityList.length) > 0){
            const insertCards = cards.slice(
                quantityList.length,
                quantityList.length + quantityCard.moreQuantityCard
            )
            setQuantityList([...quantityList, ...insertCards])
        }
    }

    useEffect(()=>{
        if (width <= 767){
            setQuantityCard({
                quantity: 5,
                moreQuantityCard: 2
            })
        }
        
        if (width > 767 && width <= 1279) {
            setQuantityCard({
                quantity: 8,
                moreQuantityCard: 2
            })
        }

        if (width > 1279){
            setQuantityCard({
                quantity: 12,
                moreQuantityCard: 3
            })
        }
    }, [width])

    useEffect(()=>{
        if (cards.length && !pageSaveMovie) {
            const cardsList = cards.filter((item, index) => index < quantityCard.quantity)
            setQuantityList(cardsList);
        }else{
            setQuantityList(cards);
        }
    }, [cards, quantityCard.quantity, pageSaveMovie])

    return(
        <section className='movies-list'>
            <ul className='movies-list__card'>
                {quantityList.map( card => (
                    <MoviesCard 
                    card={card} 
                    key= {card.id || card.movieId} 
                    pageSaveMovie={pageSaveMovie}
                    likePut={likePut}
                    likeUnPut={likeUnPut}
                    saveMovie={saveMovie}
                    />))
                }
            </ul>
            <div className='movies-list__more'>
                <button 
                className={`movies-list__more-button ${moreButtonVisibility ? 'movies-list__more-button-visibility' : ''}`} 
                type='button'
                onClick={insertMoreCards}
                >
                    Ещё
                </button>
            </div>
        </section>
    )
};

export default MoviesCardList;