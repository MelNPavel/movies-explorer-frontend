import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

// import logo from '../../images/logo.svg';

function Navigation() {
    
    return (
    <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
        </label>

        <ul className="menu__box">
            <li className='menu__box-item'><Link to="/" className="menu__item" rel="noreferrer">Главная</Link></li>
            <li className='menu__box-item'><Link to="/movies" className="menu__item" rel="noreferrer">Фильмы</Link></li>
            <li className='menu__box-item'><Link to="/saved-movies" className="menu__item" rel="noreferrer">Сохраненные фильмы</Link></li>
            <li className='menu__box-item'><Link to="/profile" className="menu__item" rel="noreferrer">Аккаунт</Link></li>
        </ul>
    </div>
    )
};

export default Navigation;