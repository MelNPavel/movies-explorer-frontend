import React from 'react';
import { useEffect } from 'react';
import magnifier from '../../images/magnifier.svg';
import searchButton from '../../images/searchButton.svg';
import './SearchForm.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation.jsx';

function SearchForm ({filmSearchSubmit, shortFilmCheck, chandgeShortFilmCheck, errorFormMessage, pageSaveMovie}) {

    const {values, handleChange, setValues} = useFormWithValidation();

    const handleSubmit = (event) => {
        event.preventDefault();
        filmSearchSubmit(values.film);
    }

    useEffect(()=>{
        if (!pageSaveMovie){
            const film = localStorage.getItem('searchFilmQuery');
            if (film) {
                setValues({film});
            };
        }
    }, [setValues, pageSaveMovie]);

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
                        value={values.film || ''}
                        // ? values.film : values.saveLocalStorageQuery
                        onChange={handleChange}
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
                <span className="search-input__error">{!errorFormMessage || values.film ? '' : errorFormMessage}</span>
                
        </div>
    )
};

export default SearchForm;
