import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login (props) {
    const [error, setError] = useState([]);
    const [valid, setValid] = useState([]);

    const [loginData, setLoginData] = useState({
        email:'',
        password:'',
    })

    const handleChandge = (e) => {
        const {name, value} = e.target;
        setLoginData ({
            ...loginData,
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
            ...loginData
        });
    }

    return(
        <div className="login">
            <h2 className='login__title'>Рады видеть!</h2>
            <form className='login__form' onSubmit={handleSubmit} id="myform">
                <div className='login__input-email-block'>
                    <p className='login__input-name-field'>Email</p>
                    <input
                        id="type-email"
                        className="login__input login__input_type_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        minLength="7"
                        maxLength="40"
                        error={error.email}
                        required
                        onChange={handleChandge}
                        value={loginData.email}
                    />
                    <span className="login__error" id="type-email-error">{error.email}</span>
                </div>
                <div className='login__input-password-block'>
                    <p className='login__input-password-field'>Пароль</p>
                    <input
                        id="type-password"
                        className="login__input login__input_type_password"
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        minLength="8"
                        maxLength="50"
                        error={error.password}
                        required
                        onChange={handleChandge}
                        value={loginData.password}
                    />
                    <span className="login__error" id="type-password-error">{error.password}</span>
                </div>
            </form>
            <div className='login__buttons'>
                <button
                className= {`login__button-reg ${!valid ? 'login__button-reg_disable' : ''}`}
                form="myform"
                >
                    Войти
                </button>
                <button className='login__link-signin'>
                    Еще не зарегистрированы? 
                    <Link to="/signup" className="login__link">Зарегистрироваться</Link>
                </button>
            </div>
        </div>
    )
};

export default Login;