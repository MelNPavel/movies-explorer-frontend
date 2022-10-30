import React from 'react';
import { Switch, Route } from "react-router-dom";
// import ProtectedRoute from '../../utils/ProtectedRoute.js';

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
// import Login from '../Login/Login.js';
// import Register from '../Register/Register.js';
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

                    {/* <Route path="/signin">
                        <Login />
                    </Route>

                    <Route path="/signup">
                        <Register />
                    </Route> */}
                </Switch>
                <Footer />
            </div>
        // </CurrentUserContext.Provider>
    )
};

export default App;