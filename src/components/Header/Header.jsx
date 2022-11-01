import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
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
                        <Link to="/"><img className="header__logo"  alt="Логотип" src={logo} /></Link>
                        <div className='header__link-movies'>
                            <Link to="/movies" className="header__link">Фильмы</Link>
                            <Link to="/saved-movies" className="header__link">Сохраненые фильмы</Link>
                        </div>
                    </nav>
                    <Link to="/profile" className="header__link">Аккаунт</Link>
                    <Navigation />
                </header>
            </Route>
            
            <Route path={"/signup"}>
                <header className="header header__logo-auth-page">
                    <Link to="/"><img className=".header__logo-auth-page"  alt="Логотип" src={logo} /></Link>
                </header>
            </Route>

            <Route path={"/signin"}>
                <header className="header header__logo-auth-page">
                <Link to="/"><img className=".header__logo-auth-page"  alt="Логотип" src={logo} /></Link>
                </header>
            </Route>


            <Route exact path="/">
                <header className="header">
                    <Link to="/"><img className="header__logo"  alt="Логотип" src={logo} /></Link>
                    <nav className='header__auth-area-main'>
                        <Link to="/signup" className="header__link-main">Регистрация</Link>
                        <Link to="/signin" className="header__link-main">Войти</Link>
                    </nav>
                </header>
            </Route>
            
        </Switch> 
        
    )
};

export default Header;
