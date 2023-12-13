import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper } from '@mui/material';
import './product.scss'
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';
import productService from '../../service/product';
import img from 'D:/Deepcare/website-mypham-fe/src/assets/img/3ce.jpg'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

Product.propTypes = {

};



function Product() {
    // const products =  async () => {
    //     try {
    //         return await productService.getAllProduct();
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const imgaa = [
        {
            img: 'D:/Deepcare/website-mypham-fe/src/assets/img/3ce.jpg',
            img2: 'img2'
        }
    ];

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const responseData = await productService.getAllProduct();

                setProduct(responseData);
            } catch (err) { }
        };
        fetchProduct();
    }, []);






    return (
        <React.Fragment>
            <Header></Header>
            <div className='product'>
                <Container>
                    <Grid container className='flashsales__container'>

                        <Grid xs={12} md={5} lg={2} className='flashsale-4'>
                            <div className="category">

                                <div className="category__product-type">
                                    <h3>Loại sản phẩm</h3>
                                    <ul>
                                        <li>
                                            <a href="">Kem dưỡng</a>
                                        </li>

                                        <li>
                                            <a href="">Sữa tắm</a>
                                        </li>

                                        <li>
                                            <a href="">Son môi</a>
                                        </li>

                                        <li>
                                            <a href="">Mặt nạ</a>
                                        </li>

                                        <li>
                                            <a href="">Tẩy trang</a>
                                        </li>

                                        <li>
                                            <a href="">Kẻ mắt</a>
                                        </li>

                                        <li>
                                            <a href="">Sữa rửa mặt</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="category__product-brand">
                                    <h3>Thương hiệu</h3>
                                    <ul>
                                        <li>
                                            <a href="">GUCCI</a>
                                        </li>

                                        <li>
                                            <a href="">CHANEL</a>
                                        </li>

                                        <li>
                                            <a href="">V7</a>
                                        </li>

                                        <li>
                                            <a href="">ORIGINAL</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="category__product-price">
                                    <h3>Giá sản phẩm</h3>
                                    <ul>
                                        <li>
                                            <a href="">Nhỏ hơn 100.000đ</a>
                                        </li>

                                        <li>
                                            <a href="">100.000đ - 500.000đ</a>
                                        </li>

                                        <li>
                                            <a href="">500.000d - 1.000.000đ </a>
                                        </li>

                                        <li>
                                            <a href="">Lớn hơn 1.000.000đ </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Grid>

                        <Grid container xs={12} md={7} lg={10} className='flashsale-9'>
                            {/* ddaay nhes t call cho m rooif ddaasy  chia component rooif truyeefn vafo nhes */}
                            {product?.map((item) => (

                                < Grid xs={6} lg={2.8} className='grid25' >
                                    <a href={"/detail-product/" + item.productId} className='button-link'>
                                        <div className="hot__product">
                                            <p>NEW</p>
                                        </div>
                                        <div className="img">
                                            <img src={item.img1} className='img1' alt="Đây là ảnh" />

                                            <img src={item.img2} className='img2' alt="Đây là ảnh" />

                                        </div>
                                        <div className="title">
                                            <p>{item.productName}</p>
                                        </div>
                                        <div className="price">
                                            <span className='newprice'>{item.price}</span>
                                            <span className='old-price'>{item.oldPrice}</span>
                                        </div>
                                        <div className="button__buy">
                                            <a href="/order-product">Mua ngay</a>
                                        </div>
                                    </a>
                                </Grid>
                            ))}

                            <div className="page">
                                <KeyboardDoubleArrowLeft className='icon__left'></KeyboardDoubleArrowLeft>
                                <div className="page-number">
                                    <a href="" className='page__active'>1</a>
                                    <a href="">2</a>
                                    <a href="">3</a>
                                </div>
                                <KeyboardDoubleArrowRight className='icon__right'></KeyboardDoubleArrowRight>
                            </div>
                        </Grid>

                    </Grid>
                </Container>
            </div >
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Product;
