import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext.jsx';
import { useFormWithValidation } from '../../hooks/useFormWithValidation.jsx';
import './Profile.css';

function Profile ({onlogOut, onUpdateAuth, regError, profileMessage, unRegError, unProfileMessage}) {

    const [errorMainApi, setErrorMainApi] = useState('');
    const [profileMessageUse, setProfileMessageUse] = useState('');
    const currentUser = React.useContext(CurrentUserContext);
    
    const {values, handleChange, errors, isValid, setErrors, setValues} = useFormWithValidation();


    const writeButton = isValid && (values.name !== currentUser.name || values.email !== currentUser.email);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateAuth({
            name: values.name,
            email: values.email
        });
    };

    // const firstClearMessage = () => {
    //     setProfileMessageUse('');
    // }
   
    // firstClearMessage();

    const handleChandgeInter = (e) => {
        handleChange(e);

        setErrorMainApi('');
        unRegError('');
        unProfileMessage('');
        setProfileMessageUse('');
    }
    
    useEffect(() => {
        setValues({
            name:currentUser.name,
            email:currentUser.email,
        });
    }, [currentUser]);

   
    useEffect(() => {
        if (regError === 409) {
            setErrorMainApi('Пользователь с такими данными уже существует');
        };
        if (regError === 400) {
            setErrorMainApi('Ошибка в запросе');
        };
        if (regError === 404) {
            setErrorMainApi('Пользователь по указанному _id не найден.');
        };
        if (regError === 500) {
            setErrorMainApi('Произошла ошибка на сервере');
        };
    }, [regError])

     useEffect(()=>{
        if (profileMessage) {
            setProfileMessageUse('Данные пользователя изменены');
        }
    }, [profileMessage])

    // useEffect(()=>{
    //     setErrorMainApi('');
    //     unRegError('');
    //     unProfileMessage('');
    //     setProfileMessageUse('');
    // }, [setValues]);

     useEffect(()=>{
        setProfileMessageUse(!profileMessageUse);
     }, [])

    return(
        <div className="profile">
            <h2 className='profile__title'>Привет {currentUser.name}!</h2>
            <form className='profile__form' onSubmit={handleSubmit} id="myform" noValidate>
                <div className='profile__input-name'>
                    <div className='profile__input-name-block'>
                        <p className='profile__input-name-field'>Имя</p>
                        <input
                            id="type-name"
                            className="profile__input profile__input_type_name"
                            type="text"
                            name="name"
                            placeholder='Введите имя'
                            minLength="2"
                            maxLength="40"
                            required
                            error={values.errorName}
                            onChange={handleChandgeInter}
                            value={values.name || ''}
                            pattern="^[A-ZА-ЯЁa-zа-яё  -]+$"
                        />
                    </div>
                    <span className="profile__error type-name-error">{errors.name}</span>
                </div>
                <div className='profile__input-email-block'>
                    <p className='profile__input-name-field'>Email</p>
                    <input
                        id="type-email"
                        className="profile__input popup__input_type_email"
                        type="email"
                        name="email"
                        placeholder="email@yandex.ru"
                        minLength="7"
                        maxLength="40"
                        error={values.errorEmail}
                        required
                        onChange={handleChandgeInter}
                        value={values.email || ''}
                        pattern="^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,}$"
                    />
                </div>
                    <span className="profile__error" id="type-email-error">{errors.email}</span>
            </form>
            <div className='profile__buttons'>
                <span className="profile-input__error">{errorMainApi || profileMessageUse}</span>
                <button
                className= {`profile__button-edit ${!writeButton ? 'profile__button-edit_disable' : ''}`}
                form="myform"
                >
                    Редактировать
                </button>
            <button className='profile__onlogout' onClick={onlogOut}>
                Выйти из акаунта
            </button>
            </div>
        </div>
    )
};

export default Profile;