import React from 'react';

function AboutProject () {
    return(
        <section className='about-project' id='about-project'>
            <h2 className='about-project__subtitle'>О проекте</h2>
            <div className='about-project__description'> 
                <div className='about-project__column'> 
                    <p className='about-project__column-title'>Дипломный проект включал 5 этапов</p>
                    <p className='about-project__column-text'>
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className='about-project__column'> 
                    <p className='about-project__column-title'>На выполнение диплома ушло 5 недель</p>
                    <p className='about-project__column-text'> 
                    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='about-project__period'>
                    <p className='about-project__period-line'>1 неделя</p>
                    <p className='about-project__period-line'>4 недели</p>
                    <p className='about-project__period-prof'>Back-end</p>
                    <p className='about-project__period-prof'>Front-end</p>
            </div>
        </section>
    )
};

export default AboutProject;