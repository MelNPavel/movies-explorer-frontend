import React from 'react';
import './ErrorPage.css';

function ErrorPage() {
    function onback () {
        window.history.back();
    }
    
    return(
        <div className="error-page">
            <div className='error-page__block'>
                <h2 className='error-page__title'>404</h2>
                <p className='error-page__text'>Страница не найдена</p>
            </div>
            <button 
            className='error-page__button'
            type='button'
            onClick={onback}
            >назад</button>
        </div>
    )
};

export default ErrorPage;