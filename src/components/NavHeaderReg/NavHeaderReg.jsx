import React from 'react';
import { Link } from 'react-router-dom';
import './NavHeaderReg.css';

import logo from '../../images/logo.svg';

function NavHeaderReg (props) {
    return (
        <div className='nav-header-reg'>
            <nav className='nav-header-reg__auth-area'>
                <Link to="/" rel="noreferrer"><img className="header__logo"  alt="Логотип" src={logo} /></Link>
                <div className='nav-header-reg__link-movies'>
                    <Link to="/movies" rel="noreferrer" className="nav-header-reg__link">Фильмы</Link>
                    <Link to="/saved-movies" rel="noreferrer" className="nav-header-reg__link">Сохраненые фильмы</Link>
                </div>
            </nav>
            <Link to="/profile" rel="noreferrer" className="nav-header-reg__link">Аккаунт</Link>
        </div>
    )
};

export default NavHeaderReg;
