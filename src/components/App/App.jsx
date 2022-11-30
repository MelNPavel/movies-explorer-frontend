import { CurrentUserContext } from '../../context/CurrentUserContext.jsx';
import React, { useState, useEffect} from 'react';
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import ProtectedRoute from '../../utils/ProtectedRoute.jsx';
import './App.css';
import api from '../../utils/MainApi.jsx'
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import { configApiMovies } from '../../constants/constants.jsx';
import { filterMovieCardsUser } from '../../utils/utils.jsx';

function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    // const [infoTooltip, setInfoTooltip] = useState(false);
    const history = useHistory();
    const [saveMovie, setSaveMovie] = useState([]);
    const [regError, setRegError] = useState();
    const [profileMessage, setProfileMessage] = useState('');

    useEffect(() => {
        api.getUserInfo()
            .then((res) => {
                setCurrentUser(res)
            })
            .catch((err) => {
                console.log ('Ошибка : ' + err.status);
                // setRegError(err.status);
            })
    }, [loggedIn])
    
    //Если есть токен заходи
    const tokenCheck = () => {
    api.getContent()
        .then((res) => {
            setLoggedIn(true)
        })
        .catch((err) => {
            console.log ('Ошибка : ' + err.status);
            // setRegError(err.status)
            setCurrentUser({});
            setLoggedIn(false);
            localStorage.clear();
        });
}
    
//Вход через логин
const handleLogin = (data) => {
    api.authorize(data.email, data.password)
        .then((res) => {
            setLoggedIn(true);
            setCurrentUser(res);
            history.push ('/movies');
})
        .catch((err) => {
            // setInfoTooltip(true);
            console.log ('Ошибка : ' + err.status);
            setRegError(err.status);
    });
}

//Регистрация
const handleRegister = (data) => {
    api.registration(data.name, data.email, data.password)
        .then(() => {
            handleLogin({email: data.email, password: data.password});
        })
        .catch((err) => {
            // setInfoTooltip(true);
            setLoggedIn(false);
            console.log ('Ошибка : ' + err.status);
            setRegError(err.status);
            }
        );
}

//Обновление данных пользователя
const handleEditProfile = (data) => {
    api.editProfile(data)
        .then((res) => {
            setCurrentUser(res)
            setProfileMessage('Данные пользователя изменены')

        })
        .catch((err) => {
            console.log ('Ошибка : ' + err.status);
            setRegError(err.status);
        })
}

//Выход
const onlogOut = () => {
    api.logout()
        .then(() => {
            setCurrentUser({});
            setLoggedIn(false);
            localStorage.clear();
            history.push ('/');
        })
        .catch((err) => {
            console.log ('Ошибка : ' + err.status)
            setRegError(err.status)
        })
}

//сопоставление полей
const cardData = (card) => {
    const { country, director, duration, year, description,  trailerLink, nameRU, nameEN, id, } = card;

  return {
    country, director, duration, year, description, trailerLink, nameRU, nameEN, 
    movieId:id,
    image: `${configApiMovies.baseUrl}${card.image.url}`,
    thumbnail: `${configApiMovies.baseUrl}${card.image.formats.thumbnail.url}`,
    };
};

//добавление лайка
const saveCardsMovie = (card) => {
    const cardDataMovies = cardData(card);
    console.log(cardDataMovies);
    api.addCard(cardDataMovies)
    .then(input => {
        setSaveMovie([input, ...saveMovie]);
    })
    .catch((err) => {
        console.log(err)
    })
}

//массив карточек без лайков 
const filterMovies = (saveMovie, id) =>{
    return saveMovie.filter(item => item._id !== id);
}

//удаление лайка
const deleteSaveCard = (card) => {
    console.log(card._id);
    api.deleteCard(card._id)
    .then(() => {
        const massiveWithoutSaveMovies = filterMovies (saveMovie, card._id); 
        setSaveMovie(massiveWithoutSaveMovies);
    })
    .catch((err) => {
        console.log(err)
    })
}

useEffect(()=>{
    tokenCheck();
 },[loggedIn]);

useEffect(()=>{
    api.getSaveCards()
    .then((data) => {
        const saveMovieFilterUser = filterMovieCardsUser(data, currentUser._id)
        setSaveMovie(saveMovieFilterUser);
    })
    .catch((err) => {
        console.log(err)
    })
 }, [loggedIn, currentUser]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="app">
                <Header 
                loggedIn={loggedIn}
                />
                <Switch>
                    
                    <ProtectedRoute
                        exact path="/movies"
                        loggedIn={loggedIn}
                        component={Movies}
                        likePut={saveCardsMovie}
                        likeUnPut={deleteSaveCard}
                        saveMovie={saveMovie}
                    />

                    <ProtectedRoute
                        exact path="/saved-movies"
                        loggedIn={loggedIn}
                        component={SavedMovies}
                        likeUnPut={deleteSaveCard}
                        saveMovie={saveMovie}
                    />

                    <ProtectedRoute
                        exact path="/profile"
                        loggedIn={loggedIn}
                        component={Profile}
                        onlogOut={onlogOut}
                        onUpdateAuth={handleEditProfile}
                        regError={regError}
                        profileMessage={profileMessage}
                    />

                    <Route exact path="/">
                        <Main />
                    </Route>

                    <Route path="/signup">
                        {loggedIn ? <Redirect to='Movies' /> : <Register 
                        onUpdateAuth = {handleRegister}
                        regError={regError}
                        />}
                    </Route>

                    <Route path="/signin">
                        {loggedIn ? <Redirect to='Movies' /> : <Login 
                            onUpdateAuth={handleLogin}
                            regError={regError}
                            />
                        }
                    </Route>

                    <Route path="*">
                        <ErrorPage />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    )
};

export default App;