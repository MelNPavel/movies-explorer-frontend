import React from 'react';
import { Link } from 'react-router-dom';
import './NavHeader.css';

import logo from '../../images/logo.svg';

function NavHeader () {

    return (
        <div className='nav-header'>
           <Link to="/" target="_blank" rel="noreferrer"><img className="header__logo"  alt="Логотип" src={logo} /></Link>
                <nav className='nav-header__auth-area-main'>
                    <Link to="/signup" className="nav-header__link-main"  rel="noreferrer">Регистрация</Link>
                    <Link to="/signin" className="nav-header__link-main"  rel="noreferrer">Войти</Link>
                    </nav>
        </div>
    )
};

export default NavHeader;
