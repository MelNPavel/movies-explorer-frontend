import React, { useState} from 'react';
import magnifier from '../../images/magnifier.png';
import searchButton from '../../images/searchButton.png';
import './SearchForm.css';

function SearchForm () {
    const [oncheck, setonCheck] = useState(true);

    return(
        <div className='search'>
            <form className='search-form'>
                <div className='search__input-area'>
                    <div className='search__input'>
                        <img src={magnifier} className='search__magnifier' alt='поле поиска значек лупы'/>
                        <input className='search__textarea' type="text" placeholder='Фильм'/>
                    </div>
                    <button className='search__button' type="submit"> 
                        <img src={searchButton} alt='кнопка начала поиска'/>
                    </button>
                </div>
                <div className='search__control'>
                    <div className='search__checkbox-area'>
                        <input type='checkbox' checked={oncheck} onChange={() => setonCheck(!oncheck)} className ='search__checkbox' id='checkbox-lable'/>
                        <lable className='search__checkbox-lable' htmlFor='checkbox-lable' />
                        <p className='searc__checkbox-film'>Короткометражки</p>
                    </div>
                    
                </div>
            </form>
        </div>
    )
};

export default SearchForm;
