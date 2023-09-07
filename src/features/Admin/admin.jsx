import React, { useEffect, useState } from 'react';

import { AccountCircle, AccountCircleOutlined, CardTravel, Category, Home, Inventory, LocalMall, Logout, Newspaper, Person } from '@mui/icons-material';
import { Container } from 'reactstrap';
import './admin.scss';
import productService from '../../service/product';
import userService from '../../service/user';
import newsService from '../../service/news';
import orderService from '../../service/order';

Admin.propTypes = {

};





function Admin(props) {

    const [product, setProduct] = useState([]);


    const fetchProduct = async () => {
        try {
            const responseData = await productService.getAllProduct();

            setProduct(responseData);
        } catch (err) { }
    };

    useEffect(() => {

        fetchProduct();
    }, []);


    const [user, setUser] = useState([]);


    const fetchUser = async () => {
        try {
            const responseData = await userService.getAllUser();

            setUser(responseData);
        } catch (err) { }
    };

    useEffect(() => {

        fetchUser();
    }, []);


    const [news, setNews] = useState([]);


    const fetchNews = async () => {
        try {
            const responseData = await newsService.getAllNews();

            setNews(responseData);
        } catch (err) { }
    };

    useEffect(() => {

        fetchNews();
    }, []);


    const [order, setOrder] = useState([]);


    const fetchOrder = async () => {
        try {
            const responseData = await orderService.getAllOrder();

            setOrder(responseData);
        } catch (err) { }
    };

    useEffect(() => {

        fetchOrder();
    }, []);

    return (
        <div className="manage">
            <div className="manage__category">

                <div className="logo">
                    HALE COSMETICS
                </div>

                <div className="manage-list">
                    <ul>
                        <li style={{ backgroundColor: '#cccccc5c', borderRadius: '10px' }}>
                            <Home></Home>
                            <a href="/manager">Trang chủ</a>
                        </li>

                        <li>
                            <AccountCircle></AccountCircle>
                            <a href="/admin-user">Người dùng</a>
                        </li>

                        <li>
                            <Inventory></Inventory>
                            <a href="/admin-product">Sản phẩm</a>
                        </li>

                        <li>
                            <Category></Category>
                            <a href="/admin-category">Danh mục</a>
                        </li>

                        <li>
                            <Newspaper></Newspaper>
                            <a href="/admin-news">Tin tức</a>
                        </li>

                        <li>
                            <CardTravel></CardTravel>
                            <a href="/admin-order">Đơn hàng</a>
                        </li>

                        <li className='logout'>
                            <Logout></Logout>
                            <a href="/manager-login">Đăng xuất</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="manage__main">
                <div className="header">
                    <div className="logo">
                        Admin
                    </div>

                    <div className="search">
                        <input type="text" placeholder='Nhập thông tin tìm kiếm...' />
                    </div>

                    <div className="acc">
                        <a href="#">
                            <AccountCircleOutlined></AccountCircleOutlined>
                        </a>
                    </div>
                </div>
                <div className="container">
                    <Container className='container-main'>
                        <div className="detail-website">
                            <div className="detail-items">
                                <div className="flex">
                                    <div className="icon" style={{ backgroundColor: '#FF0099' }}>
                                        <Person></Person>
                                    </div>

                                    <div className="detail">
                                        <p>Người dùng</p>

                                        <span>{user.length}</span>


                                    </div>
                                </div>

                                <div className="percent">
                                    <span>+55%</span>tháng trước
                                </div>

                            </div>

                            <div className="detail-items">
                                <div className="flex">
                                    <div className="icon" style={{ backgroundColor: '#0000FF' }}>
                                        <Inventory></Inventory>
                                    </div>

                                    <div className="detail">
                                        <p>Sản phẩm</p>
                                        <span>{product.length}</span>
                                    </div>
                                </div>

                                <div className="percent">
                                    <span>+55%</span>tháng trước
                                </div>

                            </div>

                            <div className="detail-items">
                                <div className="flex">
                                    <div className="icon" style={{ backgroundColor: '#006600' }}>
                                        <LocalMall></LocalMall>
                                    </div>

                                    <div className="detail">
                                        <p>Đơn hàng</p>
                                        <span>{order.length}</span>
                                    </div>
                                </div>

                                <div className="percent">
                                    <span>+55%</span>tháng trước
                                </div>

                            </div>

                            <div className="detail-items">
                                <div className="flex">
                                    <div className="icon" style={{ backgroundColor: '#001100' }}>
                                        <Newspaper></Newspaper>
                                    </div>

                                    <div className="detail">
                                        <p>Tin tức</p>
                                        <span>{news.length}</span>
                                    </div>
                                </div>

                                <div className="percent">
                                    <span>+55%</span>tháng trước
                                </div>

                            </div>
                        </div>

                    </Container>
                </div>
            </div >
        </div >
    );

}

export default Admin;