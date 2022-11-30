import React, { useState} from 'react';
import { useEffect } from 'react';
import magnifier from '../../images/magnifier.svg';
import searchButton from '../../images/searchButton.svg';
import './SearchForm.css';

function SearchForm ({filmSearchSubmit, shortFilmCheck, chandgeShortFilmCheck, errorFormMessage}) {

    const [error, setError] = useState([]);
    const [valid, setValid] = useState([]);
    const [filmQuery, setFilmQuery] = useState({});
    
    const [filmSearch, setFilmSearch] = useState({});

    const handleChandge = (e) => {
        const {name, value} = e.target;
        setFilmSearch ({
            ...filmSearch,
            [name]: value,
        });
        setError ({
            ...error,
            [name]: e.target.validationMessage,
        })
        setValid ( e.target.closest('form').checkValidity() );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        filmSearchSubmit(filmSearch.film);
    }

    useEffect(()=>{
        const saveLocalStorageQuery = localStorage.getItem('searchFilmQuery');
        if (saveLocalStorageQuery) {
            setFilmQuery(saveLocalStorageQuery);
        }
    }, [setFilmQuery]);

    return(
        <div className='search'>
            <form className='search-form' onSubmit={handleSubmit} id="myform" noValidate>
                <div className='search__input-area'>
                    <div className='search__input'>
                        <img src={magnifier} className='search__magnifier' alt='поле поиска значек лупы'/>
                        <input
                        className='search__textarea'
                        type="text"
                        name="film"
                        value={filmQuery.value}
                        onChange={handleChandge}
                        placeholder='Фильм'
                        required
                        error={errorFormMessage}
                        />
                        
                    </div>
                    <button className='search__button' type="submit" form="myform"> 
                        <img src={searchButton} alt='кнопка начала поиска'/>
                    </button>
                </div>
                <div className='search__control'>
                    <div className='search__checkbox-area'>
                        <input 
                            className ='search__checkbox' id='checkbox-lable'
                            type='checkbox' 
                            checked={shortFilmCheck} 
                            onChange={chandgeShortFilmCheck}
                        />
                        <label className='search__checkbox-lable' htmlFor='checkbox-lable' />
                        <p className='searc__checkbox-film'>Короткометражки</p>
                    </div>
                    
                </div>
            </form>
                <span className="search-input__error">{errorFormMessage}</span>
                
        </div>
    )
};

export default SearchForm;
