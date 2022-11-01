import React from 'react';
import Promo from '../Promo/Promo.jsx';
import AboutProject from '../AboutProject/AboutProject.jsx';
import Tech from '../Techs/Techs.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import './Main.css';
// import Profile from '../Profile/Profile.js';

function Main (props) {
    return (
       <section>
       <Promo />
       <AboutProject />
       <Tech />
       <AboutMe />
       <Portfolio />
       </section>
    );
};


export default Main;