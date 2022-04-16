import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from '../src/Pages/Home/Home/Home'
import About from './Pages/About/About';
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import Contact from './Pages/Contact/Contact'
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
       <Header></Header>
          <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
               <Route path='/signup' element={<SignUp></SignUp>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
    </div>
  );
}

export default App;
