import React from 'react';
// import NavTab from '../NavTab/Navtab'

function Tech () {
    return(
        <section className="techs" id='techs'>
            <h2 className="techs__subtitle">Технологии</h2>
            <p className='techs__quantity'>7 технологий</p>
            <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__enumeration'>
                <li className='techs__enumeration-input'>HTML</li>
                <li className='techs__enumeration-input'>CSS</li>
                <li className='techs__enumeration-input'>JS</li>
                <li className='techs__enumeration-input'>React</li>
                <li className='techs__enumeration-input'>Git</li>
                <li className='techs__enumeration-input'>Express.js</li>
                <li className='techs__enumeration-input'>mongoDB</li>
            </ul>
        </section>
    )
};

export default Tech;