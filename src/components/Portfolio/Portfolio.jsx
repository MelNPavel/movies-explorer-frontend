import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio () {
    return(
        <section className="portfolio">
                <h3 className='portfolio__title'>Портфолио</h3>
                <a className='porfolio__inputs' href='https://github.com/MelNPavel/russian-travel'>
                    <p className='porfolio__input'>Статичный сайт</p>
                    <img src={arrow} alt='картинка стрелки с сылкой на проект'/>
                </a>
                <a className='porfolio__inputs' href='https://github.com/MelNPavel/mesto'>
                    <p className='porfolio__input'>Адаптивный сайт</p>
                    <img src={arrow} alt='картинка стрелки с сылкой на проект'/>
                </a>
                <a className='porfolio__inputs' href='https://github.com/MelNPavel/react-mesto-api-full'>
                    <p className='porfolio__input'>Одностраничное приложение</p>
                    <img src={arrow} alt='картинка стрелки с сылкой на проект'/>
                </a>
        </section>
    )
};

export default Portfolio;