import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio () {
    return(
        <section className="portfolio">
                <h3 className='portfolio__title'>Портфолио</h3>
                <ul className='portfolio__inputs'>
                    <li>
                        <a className='portfolio__link' target="_blank" rel="noreferrer" href='https://github.com/MelNPavel/russian-travel'>
                            <p className='portfolio__type-project'>Статичный сайт</p>
                            <img src={arrow} alt='картинка стрелки с сылкой на проект'/>
                        </a>
                    </li>
                    <li>
                        <a className='portfolio__link' target="_blank" rel="noreferrer" href='https://github.com/MelNPavel/mesto'>
                            <p className='portfolio__type-project'>Адаптивный сайт</p>
                            <img src={arrow} alt='картинка стрелки с сылкой на проект'/>
                        </a>
                    </li>
                    <li>
                        <a className='portfolio__link' target="_blank" rel="noreferrer" href='https://github.com/MelNPavel/react-mesto-api-full'>
                            <p className='portfolio__type-project'>Одностраничное приложение</p>
                            <img src={arrow} alt='картинка стрелки с сылкой на проект'/>
                        </a>
                    </li>
                </ul>
        </section>
    )
};

export default Portfolio;