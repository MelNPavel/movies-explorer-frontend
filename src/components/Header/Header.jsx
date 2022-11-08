import React from 'react';
import { Link, NavLink, Switch, Route } from 'react-router-dom';
import './Header.css';

import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header (props) {
    const points = [
        "/movies",
        "/saved-movies/",
        "/profile"
    ]
    return (
        
        <Switch>
            
            <Route path={points}>
                <header className="header">
                    <nav className='header__auth-area'>
                        <NavLink to="/" rel="noreferrer"><img className="header__logo"  alt="Логотип" src={logo} /></NavLink>
                        <div className='header__link-movies'>
                            <NavLink to="/movies" rel="noreferrer" className="header__link">Фильмы</NavLink>
                            <NavLink to="/saved-movies" rel="noreferrer" className="header__link">Сохраненые фильмы</NavLink>
                        </div>
                    </nav>
                    <NavLink to="/profile" rel="noreferrer" className="header__link">Аккаунт</NavLink>
                    <Navigation />
                </header>
            </Route>
            
            <Route path={"/signup"}>
                <header className="header header__logo-auth-page">
                    <Link to="/" target="_blank" rel="noreferrer"><img className=".header__logo-auth-page"  alt="Логотип" src={logo} /></Link>
                </header>
            </Route>

            <Route path={"/signin"}>
                <header className="header header__logo-auth-page">
                <Link to="/" target="_blank" rel="noreferrer"><img className=".header__logo-auth-page"  alt="Логотип" src={logo} /></Link>
                </header>
            </Route>


            <Route exact path="/">
                <header className="header">
                    <Link to="/" target="_blank" rel="noreferrer"><img className="header__logo"  alt="Логотип" src={logo} /></Link>
                    <nav className='header__auth-area-main'>
                        <Link to="/signup" className="header__link-main"  rel="noreferrer">Регистрация</Link>
                        <Link to="/signin" className="header__link-main"  rel="noreferrer">Войти</Link>
                    </nav>
                </header>
            </Route>
            
        </Switch> 
        
    )
};

export default Header;
