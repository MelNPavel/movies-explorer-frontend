import React from 'react';
import './Portfolio.css';

function Portfolio () {
    return(
        <section className="portfolio">
                <h3 className='portfolio__title'>Портфолио</h3>
                <div className='porfolio__inputs'>
                    <p className='porfolio__input'>Статичный сайт</p>
                    <a className='porfolio__input' href='https://github.com/MelNPavel/russian-travel'>↗</a>
                </div>
                <div className='porfolio__inputs'>
                    <p className='porfolio__input'>Адаптивный сайт</p>
                    <a className='porfolio__input' href='https://github.com/MelNPavel/mesto'>↗</a>
                </div>
                <div className='porfolio__inputs'>
                    <p className='porfolio__input'>Одностраничное приложение</p>
                    <a className='porfolio__input' href='https://github.com/MelNPavel/react-mesto-api-full'>↗</a>
                </div>
        </section>
    )
};

export default Portfolio;