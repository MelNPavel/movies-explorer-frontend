import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext.jsx';
import './Profile.css';

function Profile (props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorName, setErrorName] = useState([]);
    const [errorEmail, setErrorEmail] = useState([]);
    const [valid, setValid] = useState([]);

    const currentUser = React.useContext(CurrentUserContext);

    useEffect(() => {
        if(currentUser) {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }}, [currentUser]); 

    const handleChandgeName = (e) => {
        setName(e.target.value);
        setErrorName(e.target.validationMessage)
        setValid(e.target.closest('form').checkValidity() );
    };

    const handleChandgeEmail = (e) => {
        setEmail(e.target.value);
        setErrorEmail(e.target.validationMessage)
        setValid (e.target.closest('form').checkValidity() );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onUpdateAuth({
            name,
            email
        });
    }


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
                <button
                className= {`profile__button-edit ${!valid ? 'profile__button-edit_disable' : ''}`}
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