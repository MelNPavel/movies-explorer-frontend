import React from 'react';
import './Navtab.css';

function Navtab () {
    return(
        <section className='navtab'>
            <a className='navtab__link' href = '#about-project'>О проекте</a>
            <a className='navtab__link' href = '#techs'>Технологии</a>
            <a className='navtab__link' href = '#about-me'>Студент</a>
        </section>
    )
};

export default Navtab;