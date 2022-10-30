import React from 'react';
import magnifier from '../../images/magnifier.png';
import searchButton from '../../images/searchButton.png';

function SearchForm () {
    return(
        <div className='search'>
            <form className='search-form'>
                <div className='search__input-area'>
                    <img src={magnifier} alt='поле поиска значек лупы'/>
                    <input className='search__textarea' type="text" placeholder='Фильм'/>
                </div>
                <div className='search__control'>
                    <button className='search__button' type="submit"> 
                        <img src={searchButton} alt='кнопка начала поиска'/>
                    </button>
                    <lable className='search__checkbox'>
                        <button className='switch-btn switch-on'></button>
                        Короткометражки
                    </lable>
                </div>
            </form>
        </div>
    )
};

export default SearchForm;