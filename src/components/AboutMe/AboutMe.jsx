import React from 'react';
import foto from '../../images/jonathan.jpg'
import './AboutMe.css';

function AboutMe () {
    return(
        <section className="about-me" id='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__student'>
                <div className='about-me__data'>
                    <div className='about-me__data-about'>
                        <h3 className='about-me__data-name'>Павел</h3>
                        <p className='about-me__data-age'>Студент Яндекс-практикума, 35 лет</p>
                        <p className='about-me__data-biography'>Родился крестился живуРодился крестился Родился крестился живуРодился крестился живуРодился крестился живу
                        </p>
                    </div>
                    <nav className='about-me__data-link'>
                        <a className='about-me__link' href='https://vk.com/'>VK</a>
                        <a className='about-me__link' href='https://github.com/MelNPavel'>Gihtub</a>
                    </nav>
                </div>
                <img className='about-me__foto' src={foto} alt='фото студента'/>
            </div>
        </section>
    )
};

export default AboutMe;