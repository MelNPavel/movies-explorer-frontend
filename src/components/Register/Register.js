import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return(
        <div className="register">
            <h2 className='register__title'>Добро пожаловать!</h2>
            <form className='register__form'>
                <div className='register__input-name-block'>
                    <p className='register__input-name-field'>Имя</p>
                    <input
                        id="type-name"
                        className="register__input register__input_type_name"
                        type="text"
                        name="name"
                        placeholder='Павел'
                        minLength="2"
                        maxLength="40"
                        required
                        // onChange={handleChangeName}
                        // value={name}
                    />
                    <span className="register__error type-name-error"></span>
                </div>
                <div className='register__input-email-block'>
                    <p className='register__input-name-field'>Email</p>
                    <input
                        id="type-email"
                        className="register__input register__input_type_email"
                        type="email"
                        name="email"
                        placeholder="email@yandex.ru"
                        minLength="8"
                        required
                        // onChange={handleChangeDescription}
                        // value={description}
                    />
                    <span className="register__error" id="type-email-error"></span>
                </div>
                <div className='register__input-password-block'>
                    <p className='register__input-password-field'>Пароль</p>
                    <input
                        id="type-password"
                        className="register__input register__input_type_password"
                        type="password"
                        name="password"
                        minLength="8"
                        required
                        // onChange={handleChangeDescription}
                        // value={description}
                    />
                    <span className="register__error" id="type-password-error"></span>
                </div>
            </form>
            <div className='register__buttons'>
                <button className='register__button-reg'>Зарегистрироваться</button>
                <button className='register__link-signin'>
                    Уже зарегистрированы? 
                    <Link to="/signin" className="register__link">Войти</Link>
                </button>
            </div>
        </div>
    )
};

export default Register;