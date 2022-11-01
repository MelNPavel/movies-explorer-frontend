import React from 'react';
import { Link } from 'react-router-dom';

// import logo from '../../images/logo.svg';

function Navigation() {
    return (
    <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
        <span></span>
        </label>

        <ul class="menu__box">
            <li><Link to="/" className="menu__item">Главная</Link></li>
            <li><Link to="/movies" className="menu__item" >Фильмы</Link></li>
            <li><Link to="/saved-movies"className="menu__item" href="#">Сохраненные фильмы</Link></li>
            <li><Link to="/profile"className="menu__item" href="#">Аккаунт</Link></li>
        </ul>
  </div>
    )
};

export default Navigation;