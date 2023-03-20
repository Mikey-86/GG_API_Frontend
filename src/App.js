
import './App.css';
import Translations from './Translations';
import Header from "./Header";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} exact/>
        <Route path='/Translations' element={<Translations/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
