import React from 'react';
import { Switch, Route } from "react-router-dom";
// import ProtectedRoute from '../../utils/ProtectedRoute.js';
import './App.css';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
// import { CurrentUserContext } from '../context/CurrentUserContext.js';



function App() {

    return (
        // <CurrentUserContext.Provider>
            <div className="app">
                <Header />
                <Switch>
                    
                    <Route exact path="/">
                        <Main />
                    </Route>
                    
                    <Route path="/movies">
                        <Movies />
                    </Route>

                    <Route path="/saved-movies">
                        <SavedMovies />
                    </Route>
                    
                    <Route path="/profile">
                        <Profile />
                    </Route>

                    <Route path="/signup">
                        <Register />
                    </Route>

                    <Route path="/signin">
                        <Login />
                    </Route>

                    <Route component={ErrorPage}/>

                </Switch>
                <Footer />
            </div>
        // </CurrentUserContext.Provider>
    )
};

export default App;