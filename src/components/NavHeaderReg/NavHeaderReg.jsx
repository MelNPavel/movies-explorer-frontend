import React from 'react';
import { Link } from 'react-router-dom';
import './NavHeaderReg.css';

import logo from '../../images/logo.svg';
import {useGetWidthWindow} from '../../utils/utils.jsx';

function NavHeaderReg () {

    const width = useGetWidthWindow();

    return (
        <div className='nav-header-reg'>
            <nav className="nav-header-reg__auth-area">
                <Link to="/" rel="noreferrer"><img className="header__logo"  alt="Логотип" src={logo} /></Link>
                <div className='nav-header-reg__link-movies'>
                    <Link to="/movies" rel="noreferrer" className={`nav-header-reg__link ${width<769 ? 'nav-header-reg__link_disable' : ''}`}>Фильмы</Link>
                    <Link to="/saved-movies" rel="noreferrer" className={`nav-header-reg__link ${width<769 ? 'nav-header-reg__link_disable' : ''}`}>Сохраненые фильмы</Link>
                </div>
            </nav>
            <Link to="/profile" rel="noreferrer" className={`nav-header-reg__link ${width<769 ? 'nav-header-reg__link_disable' : ''}`}>Аккаунт</Link>
        </div>
    )
};

export default NavHeaderReg;
