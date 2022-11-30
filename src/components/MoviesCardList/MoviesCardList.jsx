import React, { useState } from 'react';
import { useEffect } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import './MoviesCardList.css';
import {useGetWidthWindow} from '../../utils/utils.jsx';
import {
    WIDTH_BIG,
    WIDTH_SMALL,
    QUANTITY_CARDS_SMALL,
    QUANTITY_CARDS_AVERAGE,
    QUANTITY_CARDS_MANY,
    QUANTITY_CARDS_MORE_SMALL,
    QUANTITY_CARDS_MORE_MANY
    } from '../../constants/constants.jsx';

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
        if (width <= WIDTH_SMALL){
            setQuantityCard({
                quantity: QUANTITY_CARDS_SMALL,
                moreQuantityCard: QUANTITY_CARDS_MORE_SMALL
            })
        }
        
        if (width > WIDTH_SMALL && width <= WIDTH_BIG) {
            setQuantityCard({
                quantity: QUANTITY_CARDS_AVERAGE,
                moreQuantityCard: QUANTITY_CARDS_MORE_SMALL
            })
        }

        if (width > WIDTH_BIG){
            setQuantityCard({
                quantity: QUANTITY_CARDS_MANY,
                moreQuantityCard: QUANTITY_CARDS_MORE_MANY
            })
        }
    }, [width])

    useEffect(()=>{
        if (cards.length && !pageSaveMovie) {
            const cardsList = cards.filter((item, index) => index < quantityCard.quantity)
            setQuantityList(cardsList);
        }else{
            setQuantityList(saveMovie);
        }
    }, [cards, quantityCard.quantity, saveMovie, pageSaveMovie])

    return(
        <section className='movies-list'>
            <ul className='movies-list__card'>
                {quantityList.map(item => (
                    <MoviesCard 
                    key={item.id || item.movieId} 
                    card={item} 
                    pageSaveMovie={pageSaveMovie}
                    likePut={likePut}
                    likeUnPut={likeUnPut}
                    saveMovie={saveMovie}
                    />))
                }
            </ul>
            <div className='movies-list__more'>
                <button 
                className={`movies-list__more-button ${cards.length !== quantityList.length && !pageSaveMovie ? 'movies-list__more-button-visibility' : ''}`} 
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