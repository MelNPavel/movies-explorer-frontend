import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register(props) {
    const [error, setError] = useState([]);
    const [valid, setValid] = useState([]);

    const [registerData, setRegisterData] = useState({
        email:'',
        password:'',
    })

    const handleChandge = (e) => {
        const {name, value} = e.target;
        setRegisterData ({
            ...registerData,
            [name]: value,
        });
        setError ({
            ...error,
            [name]: e.target.validationMessage,
        })
        setValid ( e.target.closest('form').checkValidity() );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onUpdateAuth({
            ...registerData
        });
    }


    return(
        <div className="register">
            <h2 className='register__title'>Добро пожаловать!</h2>
            <form className='register__form' onSubmit={handleSubmit}>
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
                        onChange={handleChandge}
                        value={registerData.name}
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
                        placeholder="Email"
                        minLength="7"
                        maxLength="40"
                        error={error.email}
                        required
                        onChange={handleChandge}
                        value={registerData.email}
                    />
                    <span className="register__error" id="type-email-error">{error.email}</span>
                </div>
                <div className='register__input-password-block'>
                    <p className='register__input-password-field'>Пароль</p>
                    <input
                        id="type-password"
                        className="register__input register__input_type_password"
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        minLength="8"
                        maxLength="50"
                        error={error.password}
                        required
                        onChange={handleChandge}
                        value={registerData.password}
                    />
                    <span className="register__error" id="type-password-error">{error.password}</span>
                </div>
            </form>
            <div className='register__buttons'>
                <button className={`login__button-reg ${!valid ? 'login__button-reg_disable' : ''}`}>
                    Зарегистрироваться
                </button>
                <button className='register__link-signin'>
                    Уже зарегистрированы? 
                    <Link to="/signin" className="register__link">Войти</Link>
                </button>
            </div>
        </div>
    )
};

export default Register;