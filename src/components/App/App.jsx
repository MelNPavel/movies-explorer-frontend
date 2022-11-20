import { CurrentUserContext } from '../../context/CurrentUserContext.jsx';
import React, { useState, useEffect,use } from 'react';
import { Switch, Route, useHistory } from "react-router-dom";
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
import { configApiMovies } from '../../utils/constants.jsx';
import { filterMovieCardsUser } from '../../utils/utils.jsx';

function App() {
    const [currentUser, setcurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [infoTooltip, setInfoTooltip] = useState(false);
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [saveMovie, setSaveMovie] = useState([]);

   

//первоначальная загрузка пользователя
useEffect(() => {
    api.getUserInfo()
        .then((res) => {
            setcurrentUser(res)
        })
        .catch((err) => {
            console.log ('Ошибка' + err);
        })
}, [loggedIn])

 //Если есть токен заходи
 const tokenCheck = () => {
    api.getContent()
        .then((res) => {
            setLoggedIn(true);
            history.push ('/movies');
        })
        .catch((err) => console.log(err));
}

//Регистрация
const handleRegister = (data) => {
    api.registration(data.name, data.email, data.password)
        .then((res) => {
            setcurrentUser(res)
            setLoggedIn(true);
            history.push ('/movies');
        })
        .catch((err) => {
            setInfoTooltip(true);
            setLoggedIn(false);
            console.log(err);
            }
        );
}

//Обновление данных пользователя
const handleEditProfile = (data) => {
    api.editProfile(data)
        .then((res) => {
            setcurrentUser(res)
        })
        .catch((err) => {
            console.log ('Ошибка' + err);
        })
}

//Вход через логин
const handleLogin = (data) => {
    api.authorize(data.email, data.password)
        .then((res) => {
            setLoggedIn(true);
            history.push ('/movies');
})
        .catch((err) => {
            setInfoTooltip(true);
            console.log(err)
    });
}

//Выход
const onlogOut = () => {
    api.logout()
        .then(() => {
            setLoggedIn(false);
            history.push ('/');
        })
        .catch((err) => {
            console.log(err)
        })
}

useEffect(()=>{
    tokenCheck();
 }, [loggedIn]);


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
                    />

                    <Route exact path="/">
                        <Main />
                    </Route>

                    <Route path="/signup">
                        {loggedIn ? <Movies /> : <Register 
                        onUpdateAuth = {handleRegister}
                        />}
                    </Route>

                    <Route path="/signin">
                    {loggedIn ? <Movies /> : <Login 
                        onUpdateAuth={handleLogin}
                            />
                    }
                    </Route>

                    <Route component={ErrorPage}/>

                </Switch>
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    )
};

export default App;