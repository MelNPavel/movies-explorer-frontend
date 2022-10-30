import React from 'react';

function Profile () {
    return(
        <div className="profile">
            <h2 className='profile__title'>Привет Павел!</h2>
            <form className='profile__form'>
            <input
                id="type-name"
                className="profile__input profile__input_type_name"
                type="text"
                name="name"
                placeholder='Павел'
                minLength="2"
                maxLength="40"
                required
                // onChange={handleChangeName}
                // value={name}
            />
            <span className="profile__error type-name-error"></span>
            <input
                id="type-email"
                className="profile__input popup__input_type_email"
                type="email"
                name="email"
                placeholder="email@yandex.ru"
                minLength="8"
                required
                // onChange={handleChangeDescription}
                // value={description}
            />
            <span className="profile__error" id="type-email-error"></span>

            <button className='profile__button-edit'>Редактировать</button>
            </form>
            <button className='onlogout'>
                Выйти из акаунта
            </button>
        </div>
    )
};

export default Profile;