import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import {useGetWidthWindow} from '../../utils/utils.jsx';

function Navigation({loggedIn}) {

    const width = useGetWidthWindow();

    return (
    <div className={`hamburger-menu ${width>768 ? 'hamburger-menu__disable' : !loggedIn ? 'hamburger-menu__disable' : ''}`} >
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
        </label>
        <ul className="menu__box">
            <li className='menu__box-item'><NavLink exact to="/"  className="menu__item" activeClassName='menu__item_selected' rel="noreferrer">Главная</NavLink></li>
            <li className='menu__box-item'><NavLink to="/movies" className="menu__item" activeClassName='menu__item_selected' rel="noreferrer">Фильмы</NavLink></li>
            <li className='menu__box-item'><NavLink to="/saved-movies" className="menu__item" activeClassName='menu__item_selected' rel="noreferrer">Сохраненные фильмы</NavLink></li>
            <li className='menu__box-item'><NavLink to="/profile" className="menu__item" activeClassName='menu__item_selected' rel="noreferrer">Аккаунт</NavLink></li>
        </ul>
    </div>
    )
};

export default Navigation;