import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './component/login/Login';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Datalist from './component/datalist/Datalist';
import Update from './component/update/Update';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='data-list' element={<Datalist/>}/>
        <Route path='update/:id' element={<Update/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </>
  );
}

export default App;
