import React from 'react';
import { Route } from 'react-router-dom';
import './Footer.css';

function Footer () {
    const points = [
        "/",
        "/movies",
        "/saved-movies"
    ]
    return(
        <Route exact path={points}>
        <section className="footer">
            <h4 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            <div className='footer__podval'>
                <p className='footer__copyright'>&#169; 2022</p>
                <div className='footer__links'>
                    <a className='footer__link' href='https://practicum.yandex.ru/' target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a className='footer__link' href='https://github.com/' target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
        </section>
        </Route>
    )
};

export default Footer;