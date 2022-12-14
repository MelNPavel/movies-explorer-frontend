import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import NavHeader from '../NavHeader/NavHeader.jsx';
import NavHeaderReg from '../NavHeaderReg/NavHeaderReg.jsx';

function Header ({loggedIn}) {
    const points = [
        "/movies",
        "/saved-movies/",
        "/profile"
    ]

    return (
        
        <Switch>
            
            <Route path={points}>
                {loggedIn ? <NavHeaderReg /> : <NavHeader />}
                <Navigation 
                loggedIn={loggedIn}
                />
            </Route>
            
            <Route path={"/signup"}>
                <header className="header header__logo-auth-page">
                    <Link to="/" target="_blank" rel="noreferrer">
                        <img className=".header__logo-auth-page"  alt="Логотип" src={logo} />
                    </Link>
                </header>
            </Route>

            <Route path={"/signin"}>
                <header className="header header__logo-auth-page">
                    <Link to="/" target="_blank" rel="noreferrer">
                        <img className=".header__logo-auth-page"  alt="Логотип" src={logo} />
                    </Link>
                </header>
            </Route>

            <Route exact path="/">
                {loggedIn ? <NavHeaderReg /> : <NavHeader />}
                <Navigation 
                loggedIn={loggedIn}
                mainPage = {true}
                />
            </Route>
            
        </Switch> 
        
    )
};

export default Header;
