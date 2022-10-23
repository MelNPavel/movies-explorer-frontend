import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
// import { CurrentUserContext } from '../context/CurrentUserContext.js';



function App() {

    return (
        // <CurrentUserContext.Provider>
            <div className="app">
                <Header />
                <Main />
                <Footer />
            </div>
        // </CurrentUserContext.Provider>
    )
};

export default App;