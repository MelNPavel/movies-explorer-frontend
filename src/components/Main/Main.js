import React from 'react';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Tech from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';
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