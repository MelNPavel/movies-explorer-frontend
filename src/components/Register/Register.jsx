import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
// import { CurrentUserContext } from '../../context/CurrentUserContext.jsx';
import { useEffect } from 'react';
// import {getErrorMessage} from '../../utils/utils.jsx'; 

function Register(props) {
    // const currentUser = React.useContext(CurrentUserContext);
    const [error, setError] = useState([]);
    const [valid, setValid] = useState(false);
    const [errorMainApi, setErrorMainApi] = useState('');
    
    const [registerData, setRegisterData] = useState({
        name:'',
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

    useEffect(() => {
        if (props.regError === 401) {
            setErrorMainApi('Отказ в доступе');
        };
        if (props.regError === 409) {
            setErrorMainApi('Пользователь с такими данными уже существует');
        };
        if (props.regError === 400) {
            setErrorMainApi('Ошибка в запросе');
        };
        if (props.regError === 500) {
            setErrorMainApi('Произошла ошибка на сервере');
        };
    }, [props.regError])
    

    return(
        <div className="register">
            <h2 className='register__title'>Добро пожаловать!</h2>
            <form className='register__form' onSubmit={handleSubmit} id="myform">
                <div className='register__input-name-block'>
                    <p className='register__input-name-field'>Имя</p>
                    <input
                        id="type-name"
                        className="register__input register__input_type_name"
                        type="text"
                        name="name"
                        placeholder='Введите имя'
                        minLength="2"
                        maxLength="40"
                        required
                        error={error.name}
                        onChange={handleChandge}
                        value={registerData.name}
                        pattern="^[A-ZА-ЯЁa-zа-яё  -]+$"
                    />
                    <span className="register__error type-name-error">{error.name}</span>
                </div>
                <div className='register__input-email-block'>
                    <p className='register__input-name-field'>Email</p>
                    <input
                        id="type-email"
                        className="register__input register__input_type_email"
                        type="email"
                        name="email"
                        placeholder="Введите Email"
                        minLength="7"
                        maxLength="40"
                        error={error.email}
                        required
                        onChange={handleChandge}
                        value={registerData.email}
                        pattern="^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,}$"
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
            <span className="register-input__error">{errorMainApi}</span>
                <button 
                className={`login__button-reg ${!valid ? 'login__button-reg_disable' : ''}`}
                form="myform"
                >
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