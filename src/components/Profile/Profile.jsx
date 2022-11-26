import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext.jsx';
import './Profile.css';

function Profile (props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorName, setErrorName] = useState([]);
    const [errorEmail, setErrorEmail] = useState([]);
    const [valid, setValid] = useState([]);
    const [errorMainApi, setErrorMainApi] = useState('');

    const currentUser = React.useContext(CurrentUserContext);

    const writeButton = valid && (name !== currentUser.name || email !== currentUser.email);

    const handleChandgeName = (e) => {
        setName(e.target.value);
        setErrorName(e.target.validationMessage);
        if (writeButton){
            setValid (e.target.closest('form').checkValidity() );
        };
    };

    const handleChandgeEmail = (e) => {
        setEmail(e.target.value);
        setErrorEmail(e.target.validationMessage)
        if (writeButton){
            setValid (e.target.closest('form').checkValidity() );
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onUpdateAuth({
            name,
            email
        });
    };
    
    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);
    
    useEffect(() => {
        if (props.regError === 409) {
            setErrorMainApi('Пользователь с такими данными уже существует');
        };
        if (props.regError === 400) {
            setErrorMainApi('Ошибка в запросе');
        };
        if (props.regError === 404) {
            setErrorMainApi('Пользователь по указанному _id не найден.');
        };
        if (props.regError === 500) {
            setErrorMainApi('Произошла ошибка на сервере');
        };
    }, [props.regError])
    

    return(
        <div className="profile">
            <h2 className='profile__title'>Привет {currentUser.name}!</h2>
            <form className='profile__form' onSubmit={handleSubmit} id="myform">
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
                            error={errorName}
                            onChange={handleChandgeName}
                            value={name}
                            pattern="^[A-ZА-ЯЁa-zа-яё  -]+$"
                        />
                    </div>
                    <span className="profile__error type-name-error">{errorName}</span>
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
                        error={errorEmail}
                        required
                        onChange={handleChandgeEmail}
                        value={email}
                        
                    />
                </div>
                    <span className="profile__error" id="type-email-error">{errorEmail}</span>
            </form>
            <div className='profile__buttons'>
                <span className="profile-input__error">{errorMainApi}</span>
                <button
                className= {`profile__button-edit ${!writeButton ? 'profile__button-edit_disable' : ''}`}
                form="myform"
                >
                    Редактировать
                </button>
            <button className='profile__onlogout' onClick={props.onlogOut}>
                Выйти из акаунта
            </button>
            </div>
        </div>
    )
};

export default Profile;