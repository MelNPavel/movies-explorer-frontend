import React from 'react';
import foto from '../../images/jonathan.jpg'

function Profile () {
    return(
        <section className="profile">
            <h2 className='profile__subtitle'>Студент</h2>
            <div className='profile__student'>
                <div className='profile__data'>
                    <div className='profile__data-about'>
                        <h3 className='profile__data-name'>Павел</h3>
                        <p className='profile__data-age'>Студент Яндекс-практикума, 35 лет</p>
                        <p className='profile__data-biography'>Родился крестился живуРодился крестился Родился крестился живуРодился крестился живуРодился крестился живу
                        </p>
                    </div>
                    <ul className='profile__data-link'>
                        <li>Facebook</li>
                        <li>Gihtub</li>
                    </ul>
                </div>
                <img className='profile__foto' src={foto} alt='фото студента'/>
            </div>
            <div>
                <h3 className='profile__portfolio'>Портфолио</h3>
                <div className='profile__porfolio-inputs'>
                    <p className='profile__porfolio-input'>Статичный сайт</p>
                    <a className='profile__porfolio-input' href='https://github.com/MelNPavel/russian-travel'>↗</a>
                </div>
                <div className='profile__porfolio-inputs'>
                    <p className='profile__porfolio-input'>Адаптивный сайт</p>
                    <a className='profile__porfolio-input' href='https://github.com/MelNPavel/mesto'>↗</a>
                </div>
                <div className='profile__porfolio-inputs'>
                    <p className='profile__porfolio-input'>Одностраничное приложение</p>
                    <a className='profile__porfolio-input' href='https://github.com/MelNPavel/react-mesto-api-full'>↗</a>
                </div>
            </div>
        </section>
    )
};

export default Profile;