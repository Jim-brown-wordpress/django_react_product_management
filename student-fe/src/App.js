import logo from './logo.svg';
// import './App.css';
import { Header } from './components/Header';
import { Landing } from './components/Landing';
import { Footer } from './components/Footer';

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { SingUp } from './components/Auth/SignUp';
import { SignIn } from './components/Auth/SignIn';
import {Provider} from 'react-redux';
import {store} from './redux/store';


function App() {
  return (
    <Provider store = {store}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element = {<Landing />} />
          <Route path='/signup' element = {<SingUp />} />
          <Route path='/signin' element = {<SignIn />} />
        </Routes>
        <Footer />
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short" />
        </a>
      </Router>
    </Provider>
  );
}

export default App;
