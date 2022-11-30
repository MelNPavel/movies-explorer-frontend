import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                    <NavLink to="/movies" rel="noreferrer" className={`nav-header-reg__link ${width<769 ? 'nav-header-reg__link_disable' : ''}`} activeClassName='nav-header-reg__link_selected'>Фильмы</NavLink>
                    <NavLink to="/saved-movies" rel="noreferrer" className={`nav-header-reg__link ${width<769 ? 'nav-header-reg__link_disable' : ''}`} activeClassName='nav-header-reg__link_selected'>Сохраненые фильмы</NavLink>
                </div>
            </nav>
            <NavLink to="/profile" rel="noreferrer" className={`nav-header-reg__link ${width<769 ? 'nav-header-reg__link_disable' : ''}`} activeClassName='nav-header-reg__link_selected'>Аккаунт</NavLink>
        </div>
    )
};

export default NavHeaderReg;
