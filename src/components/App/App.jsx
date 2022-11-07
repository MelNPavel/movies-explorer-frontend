import { CurrentUserContext } from '../../context/CurrentUserContext.jsx';
import React, { useState, useEffect,use } from 'react';
import { Switch, Route, useHistory } from "react-router-dom";
import ProtectedRoute from '../../utils/ProtectedRoute.jsx';
import './App.css';
import api from '../../utils/api.jsx'
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import { auth, authorize, getContent, logout } from "../../utils/Auth.jsx";



function App() {
    const [currentUser, setcurrentUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const [infoTooltip, setInfoTooltip] = useState(false);
    const history = useHistory();
    const [email, setEmail] = useState("");

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
    getContent()
        .then((res) => {
            setLoggedIn(true);
            console.log(res);
            history.push ('/movies');
        })
        .catch((err) => console.log(err));
}

//Регистрация
const handleRegister = (data) => {
    auth(data.email, data.password)
        .then((res) => {
            if (res.data) {
                setInfoTooltip(true);
                setLoggedIn(true);
                setEmail(data.email);
                history.push ('/signin');
            }
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
    api.addUser(data.name, data.email)
        .then((res) => {
            setcurrentUser(res)
        })
        .catch((err) => {
            console.log ('Ошибка' + err);
        })
}

//Вход через логин
const handleLogin = (data) => {
    authorize(data.email, data.password)
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
    logout()
        .then(() => {
            setLoggedIn(false);
            setEmail("");
            history.push ('/');
        })
        .catch((err) => {
            console.log(err)
        })
}

useEffect(()=>{
    tokenCheck();
 }, [loggedIn]);


    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="app">
                <Header />
                <Switch>
                    
                    <ProtectedRoute
                        exact path="/movies"
                        loggedIn={loggedIn}
                        component={Movies}
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