import { CurrentUserContext } from '../../context/CurrentUserContext.jsx';
import React, { useState, useEffect,use } from 'react';
import { Switch, Route, useHistory } from "react-router-dom";
import ProtectedRoute from '../../utils/ProtectedRoute.jsx';
import './App.css';
import api from '../../utils/MainApi.jsx'
import moviesApi from '../../utils/MoviesApi.jsx';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';

function App() {
    const [currentUser, setcurrentUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [infoTooltip, setInfoTooltip] = useState(false);
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [cards, setCards] = useState([]);

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
            console.log(res);
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

  //Загрузка карточек первоначальная
  useEffect(() => {
    if (loggedIn){
    moviesApi.getTasksCards()
        .then(res => {
            setCards(res)
        })
        .catch((err) => {
            console.log ('Ошибка' + err);
        })
}}, [loggedIn])



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
                        cards={cards}
                    />

                    <ProtectedRoute
                        exact path="/saved-movies"
                        loggedIn={loggedIn}
                        component={SavedMovies}
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