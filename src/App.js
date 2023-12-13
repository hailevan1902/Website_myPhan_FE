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
import Intro from './components/Intro/intro';
import News from './features/News/news';
import Admin from './features/Admin/admin';
import UserAdmin from './features/Admin/components/User';
import ProductAdmin from './features/Admin/components/Product';
import CategoryAdmin from './features/Admin/components/Category';
import NewsAdmin from './features/Admin/components/News';
import AdminDetailProduct from './features/Admin/components/Product/DetailProduct/detailProduct';
import AdminAddProduct from './features/Admin/components/Product/AddProduct/addProduct';
import { useEffect, useState } from 'react';
import AddUser from './features/Admin/components/User/AddUser/addUser';
import AdminDetailUser from './features/Admin/components/User/DetailUser/detailUser';
import LoginAdmin from './features/Admin/Login/LoginAdmin';
import Order from './features/Order/order';



function App() {



  return (
    <div className="App">

      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          {/* <Route path='/' element={<Test></Test>}></Route> */}
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/product-hale' element={<Product />}></Route>

          <Route path='/detail-product' element={<Detailproduct />}></Route>
          <Route path='/detail-product/:id' element={<Detailproduct />}></Route>
          <Route path='/intro-hale' element={<Intro />}></Route>
          <Route path='/news-hale' element={<News />}></Route>
          <Route path='/order-product' element={<Order />}></Route>

          <Route path='*' element={<NotFound></NotFound>}></Route>

          <Route path='/manager-login' element={<LoginAdmin />}></Route>
          <Route path='/manager' element={<Admin/>}></Route>

          <Route path='/admin-user' element={<UserAdmin />}></Route>
          <Route path='/admin-add-user' element={<AddUser />}></Route>
          <Route path="/admin-detail-user/:id" element={<AdminDetailUser />}></Route>

          <Route path='/admin-product' element={<ProductAdmin />}></Route>
          <Route path='/admin-add-product' element={<AdminAddProduct />}></Route>
          <Route
            path="/admin-detail-product/:id"
            element={<AdminDetailProduct />}
          ></Route>

          <Route path='/admin-category' element={<CategoryAdmin />}></Route>
          <Route path='/admin-news' element={<NewsAdmin />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer></Footer> */}

    </div >
  );
}

export default App;
