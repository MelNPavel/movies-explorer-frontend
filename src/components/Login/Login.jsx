import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return(
        <div className="login">
            <h2 className='login__title'>Рады видеть!</h2>
            <form className='login__form'>
                <div className='login__input-email-block'>
                    <p className='login__input-name-field'>Email</p>
                    <input
                        id="type-email"
                        className="login__input login__input_type_email"
                        type="email"
                        name="email"
                        placeholder="email@yandex.ru"
                        minLength="8"
                        required
                        // onChange={handleChangeDescription}
                        // value={description}
                    />
                    <span className="login__error" id="type-email-error"></span>
                </div>
                <div className='login__input-password-block'>
                    <p className='login__input-password-field'>Пароль</p>
                    <input
                        id="type-password"
                        className="login__input login__input_type_password"
                        type="password"
                        name="password"
                        minLength="8"
                        required
                        // onChange={handleChangeDescription}
                        // value={description}
                    />
                    <span className="login__error" id="type-password-error"></span>
                </div>
            </form>
            <div className='login__buttons'>
                <button className='login__button-reg'>Войти</button>
                <button className='login__link-signin'>
                    Еще не зарегистрированы? 
                    <Link to="/signup" className="login__link">Зарегистрироваться</Link>
                </button>
            </div>
        </div>
    )
};

export default Login;