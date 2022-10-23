import React from 'react';
import { Link } from 'react-router-dom';
// Route, Switch
import logo from '../../images/logo.svg';

function Header (props) {
    return (
        <header className="header">
            <img className="header__logo"  alt="Логотип" src={logo} />
            <nav className='header__auth-area'>
                <Link to="/signup" className="header__link">Регистрация</Link>
                <Link to="/signin" className="header__link">Войти</Link>
                    {/* <Switch>
                        <Route exact path="/">
                            
                        </Route>
                        <Route path="/signup">
                            <Link to="/signin" className="link-auth">Войти</Link>
                        </Route>
                        <Route path="/signin">
                            <Link to="/signup" className="link-auth">Регистрация</Link>
                        </Route>
                    </Switch> */}
                    
            </nav>
        </header>
    )
};

export default Header;