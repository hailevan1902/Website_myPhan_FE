import React from 'react';
import PropTypes from 'prop-types';
import { Container, Input, TextField } from '@mui/material';
import { AccountCircle, Search, ShoppingCart } from '@mui/icons-material';
import './styles.scss'
import '../../mainColor/color.scss'
import { Link } from 'react-router-dom';

Header.propTypes = {

};

function Header(props) {
    return (
        <div className='headerPage'>
            <div className="headerPage__news">
                <p>Miễn phí vận chuyển với đơn hàng nội thành từ 500K - Đổi trả trong 30 ngày - Đảm bảo chất lượng tuyệt đối</p>
            </div>

            <div className="headerPage__select">
                <Container className='header__container'>
                    <div className="logo">
                        <p>HaLe</p>
                        <span>Cosmetics</span>
                    </div>

                    <div className="search">
                        <input placeholder='Tìm kiếm...'></input>
                        <Search className='search-icon'></Search>
                    </div>

                    <div className="acc__cart">
                        <div className="account">
                            <AccountCircle className='acc__icon'></AccountCircle>
                            <p>HaiLeVan</p>
                        </div>

                        <div className="cart">
                            <ShoppingCart className='cart__icon'></ShoppingCart>
                            <p>Giỏ hàng</p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="headerPage__menu">
                <Container>
                    <ul className="menu__list">
                        <li className="menu__items">
                            <a href="/">Trang chủ</a>
                        </li>

                        <li className="menu__items">
                            <a href="/product-hale">Sản phẩm</a>
                        </li>

                        <li className="menu__items">
                            <a href="/intro-hale">Giới thiệu</a>
                        </li>

                        <li className="menu__items">
                            <a href="/news-hale">Tin tức</a>
                        </li>
                    </ul>
                </Container>
            </div>
        </div >
    );
}

export default Header;