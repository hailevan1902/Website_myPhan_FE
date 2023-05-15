// import './App.css';
import './'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './features/Login/login';
import Register from './features/Register/register';
import Footer from './components/Footer';
import { Switch } from '@mui/material';
import NotFound from './components/NotFound/notFound';
import Home from './features/Home/home';
import Product from './features/Product/product';
import Detailproduct from './features/Product/components/detailproduct';
import '@fontsource/roboto'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/product-hale' element={<Product />}></Route>
          <Route path='/intro-hale' element={<Register />}></Route>
          <Route path='/detail-product' element={<Detailproduct />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div >
  );
}

export default App;
