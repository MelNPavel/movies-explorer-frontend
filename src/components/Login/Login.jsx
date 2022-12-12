import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation.jsx';

function Login ({onUpdateAuth, regError, unRegError}) {
    
    const {values, handleChange, errors, isValid, setErrors, setValues, resetForm} = useFormWithValidation();

    const [errorMainApi, setErrorMainApi] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateAuth({
            ...values
        });
    }

    useEffect(() => {
        if (regError === 401) {
            setErrorMainApi('Отказ в доступе');
        };
        if (regError === 404) {
            setErrorMainApi('Такого пользователя нет');
        }
        if (regError === 400) {
            setErrorMainApi('Ошибка в запросе');
        };
    }, [regError])

    useEffect(()=>{
        resetForm();
    }, [resetForm]);

    useEffect(()=>{
        setErrorMainApi('');
        unRegError('');
    }, [values]);
    
    return(
        <div className="login">
            <h2 className='login__title'>Рады видеть!</h2>
            <form className='login__form' onSubmit={handleSubmit} id="myform" noValidate>
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
                        error={values.email}
                        required
                        onChange={handleChange}
                        value={values.email || ''}
                        pattern="^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,}$"
                    />
                    <span className="login__error" id="type-email-error">{errors.email}</span>
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
                        error={errors.password}
                        required
                        onChange={handleChange}
                        value={values.password || ''}
                    />
                    <span className="login__error" id="type-password-error">{errors.password}</span>
                </div>
            </form>
            <div className='login__buttons'>
                <span className="login-input__error">{errorMainApi}</span>
                <button
                className= {`login__button-reg ${!isValid ? 'login__button-reg_disable' : ''}`}
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