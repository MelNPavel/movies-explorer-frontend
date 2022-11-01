import React from 'react';
import './Profile.css';

function Profile () {
    return(
        <div className="profile">
            <h2 className='profile__title'>Привет Павел!</h2>
            <form className='profile__form'>
                <div className='profile__input-name-block'>
                    <p className='profile__input-name-field'>Имя</p>
                    <input
                        id="type-name"
                        className="profile__input profile__input_type_name"
                        type="text"
                        name="name"
                        placeholder='Павел'
                        minLength="2"
                        maxLength="40"
                        required
                        dir="rtl"
                        // onChange={handleChangeName}
                        // value={name}
                    />
                    <span className="profile__error type-name-error"></span>
                </div>
                <div className='profile__input-email-block'>
                    <p className='profile__input-name-field'>Email</p>
                    <input
                        id="type-email"
                        className="profile__input popup__input_type_email"
                        type="email"
                        name="email"
                        placeholder="email@yandex.ru"
                        minLength="8"
                        required
                        dir="rtl"
                        // onChange={handleChangeDescription}
                        // value={description}
                    />
                    <span className="profile__error" id="type-email-error"></span>
                </div>
            </form>
            <div className='profile__buttons'>
            <button className='profile__button-edit'>Редактировать</button>
            <button className='profile__onlogout'>
                Выйти из акаунта
            </button>
            </div>
        </div>
    )
};

export default Profile;