import React from 'react';
// import foto from '../../images/jonathan.jpg'

function Footer () {
    return(
        <section className="footer">
            <h4 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            <div className='footer__podval'>
                <p className='footer__copyright'>&#169; 2022</p>
                <div className='footer__links'>
                    <a className='footer__link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
                    <a className='footer__link' href='https://github.com/'>Github</a>
                </div>
            </div>
        </section>
    )
};

export default Footer;