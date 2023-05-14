import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper } from '@mui/material';
import './product.scss'
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';

Product.propTypes = {

};

function Product(props) {
    return (
        <div className='product'>
            <Container>
                <Grid container className='flashsales__container'>
                    <Grid xs={12} md={5} lg={3} className='flashsale-4'>
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

                    <Grid container xs={12} md={7} lg={9} className='flashsale-9'>

                        <Grid xs={6} lg={2.8} className='grid25'>
                            <a href="/detail-product" className='button-link'>
                                <div className="hot__product">
                                    <p>NEW</p>
                                </div>
                                <div className="img">
                                    <img className='img1' alt="Đây là ảnh" />
                                    <img className='img2' alt="Đây là ảnh" />
                                </div>
                                <div className="title">
                                    <p>3CE Son kem Velvet Lip Tint chính hãng mỹ phẩm Hàn Quốc</p>
                                </div>
                                <div className="price">
                                    <span className='newprice'>199.000đ</span>
                                    <span className='old-price'>249.000đ</span>
                                </div>

                                <div className="button__buy">
                                    <a href="/">Mua ngay</a>
                                </div>
                            </a>
                        </Grid>

                        <Grid xs={6} lg={2.8} className='grid25'>
                            <a href="/" className='button-link'>
                                <div className="hot__product">
                                    <p>NEW</p>
                                </div>
                                <div className="img">
                                    <img className='img1' alt="Đây là ảnh" />
                                    <img className='img2' alt="Đây là ảnh" />
                                </div>
                                <div className="title">
                                    <p>3CE Son kem Velvet Lip Tint chính hãng mỹ phẩm Hàn Quốc</p>
                                </div>
                                <div className="price">
                                    <span className='newprice'>199.000đ</span>
                                    <span className='old-price'>249.000đ</span>
                                </div>

                                <div className="button__buy">
                                    <a href="/">Mua ngay</a>
                                </div>
                            </a>
                        </Grid>

                        <Grid xs={6} lg={2.8} className='grid25'>
                            <a href="/" className='button-link'>
                                <div className="hot__product">
                                    <p>NEW</p>
                                </div>
                                <div className="img">
                                    <img className='img1' alt="Đây là ảnh" />
                                    <img className='img2' alt="Đây là ảnh" />
                                </div>
                                <div className="title">
                                    <p>3CE Son kem Velvet Lip Tint chính hãng mỹ phẩm Hàn Quốc</p>
                                </div>
                                <div className="price">
                                    <span className='newprice'>199.000đ</span>
                                    <span className='old-price'>249.000đ</span>
                                </div>

                                <div className="button__buy">
                                    <a href="/">Mua ngay</a>
                                </div>
                            </a>
                        </Grid>

                        <Grid xs={6} lg={2.8} className='grid25'>
                            <a href="/" className='button-link'>
                                <div className="hot__product">
                                    <p>NEW</p>
                                </div>
                                <div className="img">
                                    <img className='img1' alt="Đây là ảnh" />
                                    <img className='img2' alt="Đây là ảnh" />
                                </div>
                                <div className="title">
                                    <p>3CE Son kem Velvet Lip Tint chính hãng mỹ phẩm Hàn Quốc</p>
                                </div>
                                <div className="price">
                                    <span className='newprice'>199.000đ</span>
                                    <span className='old-price'>249.000đ</span>
                                </div>

                                <div className="button__buy">
                                    <a href="/">Mua ngay</a>
                                </div>
                            </a>
                        </Grid>

                        <Grid xs={6} lg={2.8} className='grid25'>
                            <a href="/" className='button-link'>
                                <div className="hot__product">
                                    <p>NEW</p>
                                </div>
                                <div className="img">
                                    <img className='img1' alt="Đây là ảnh" />
                                    <img className='img2' alt="Đây là ảnh" />
                                </div>
                                <div className="title">
                                    <p>3CE Son kem Velvet Lip Tint chính hãng mỹ phẩm Hàn Quốc</p>
                                </div>
                                <div className="price">
                                    <span className='newprice'>199.000đ</span>
                                    <span className='old-price'>249.000đ</span>
                                </div>

                                <div className="button__buy">
                                    <a href="/">Mua ngay</a>
                                </div>
                            </a>
                        </Grid>

                        <Grid xs={6} lg={2.8} className='grid25'>
                            <a href="/" className='button-link'>
                                <div className="hot__product">
                                    <p>NEW</p>
                                </div>
                                <div className="img">
                                    <img className='img1' alt="Đây là ảnh" />
                                    <img className='img2' alt="Đây là ảnh" />
                                </div>
                                <div className="title">
                                    <p>3CE Son kem Velvet Lip Tint chính hãng mỹ phẩm Hàn Quốc</p>
                                </div>
                                <div className="price">
                                    <span className='newprice'>199.000đ</span>
                                    <span className='old-price'>249.000đ</span>
                                </div>

                                <div className="button__buy">
                                    <a href="/">Mua ngay</a>
                                </div>
                            </a>
                        </Grid>

                        <Grid xs={6} lg={2.8} className='grid25'>
                            <a href="/" className='button-link'>
                                <div className="hot__product">
                                    <p>NEW</p>
                                </div>
                                <div className="img">
                                    <img className='img1' alt="Đây là ảnh" />
                                    <img className='img2' alt="Đây là ảnh" />
                                </div>
                                <div className="title">
                                    <p>3CE Son kem Velvet Lip Tint chính hãng mỹ phẩm Hàn Quốc</p>
                                </div>
                                <div className="price">
                                    <span className='newprice'>199.000đ</span>
                                    <span className='old-price'>249.000đ</span>
                                </div>

                                <div className="button__buy">
                                    <a href="/">Mua ngay</a>
                                </div>
                            </a>
                        </Grid>

                        <Grid xs={6} lg={2.8} className='grid25'>
                            <a href="/" className='button-link'>
                                <div className="hot__product">
                                    <p>NEW</p>
                                </div>
                                <div className="img">
                                    <img className='img1' alt="Đây là ảnh" />
                                    <img className='img2' alt="Đây là ảnh" />
                                </div>
                                <div className="title">
                                    <p>3CE Son kem Velvet Lip Tint chính hãng mỹ phẩm Hàn Quốc</p>
                                </div>
                                <div className="price">
                                    <span className='newprice'>199.000đ</span>
                                    <span className='old-price'>249.000đ</span>
                                </div>

                                <div className="button__buy">
                                    <a href="/">Mua ngay</a>
                                </div>
                            </a>
                        </Grid>

                        <Grid xs={6} lg={2.8} className='grid25'>
                            <a href="/" className='button-link'>
                                <div className="hot__product">
                                    <p>NEW</p>
                                </div>
                                <div className="img">
                                    <img className='img1' alt="Đây là ảnh" />
                                    <img className='img2' alt="Đây là ảnh" />
                                </div>
                                <div className="title">
                                    <p>3CE Son kem Velvet Lip Tint chính hãng mỹ phẩm Hàn Quốc</p>
                                </div>
                                <div className="price">
                                    <span className='newprice'>199.000đ</span>
                                    <span className='old-price'>249.000đ</span>
                                </div>

                                <div className="button__buy">
                                    <a href="/">Mua ngay</a>
                                </div>
                            </a>
                        </Grid>

                        <Grid xs={6} lg={2.8} className='grid25'>
                            <a href="/" className='button-link'>
                                <div className="hot__product">
                                    <p>NEW</p>
                                </div>
                                <div className="img">
                                    <img className='img1' alt="Đây là ảnh" />
                                    <img className='img2' alt="Đây là ảnh" />
                                </div>
                                <div className="title">
                                    <p>3CE Son kem Velvet Lip Tint chính hãng mỹ phẩm Hàn Quốc</p>
                                </div>
                                <div className="price">
                                    <span className='newprice'>199.000đ</span>
                                    <span className='old-price'>249.000đ</span>
                                </div>

                                <div className="button__buy">
                                    <a href="/">Mua ngay</a>
                                </div>
                            </a>
                        </Grid>

                        <Grid xs={6} lg={2.8} className='grid25'>
                            <a href="/" className='button-link'>
                                <div className="hot__product">
                                    <p>NEW</p>
                                </div>
                                <div className="img">
                                    <img className='img1' alt="Đây là ảnh" />
                                    <img className='img2' alt="Đây là ảnh" />
                                </div>
                                <div className="title">
                                    <p>3CE Son kem Velvet Lip Tint chính hãng mỹ phẩm Hàn Quốc</p>
                                </div>
                                <div className="price">
                                    <span className='newprice'>199.000đ</span>
                                    <span className='old-price'>249.000đ</span>
                                </div>

                                <div className="button__buy">
                                    <a href="/">Mua ngay</a>
                                </div>
                            </a>
                        </Grid>

                        <Grid xs={6} lg={2.8} className='grid25'>
                            <a href="/" className='button-link'>
                                <div className="hot__product">
                                    <p>NEW</p>
                                </div>
                                <div className="img">
                                    <img className='img1' alt="Đây là ảnh" />
                                    <img className='img2' alt="Đây là ảnh" />
                                </div>
                                <div className="title">
                                    <p>3CE Son kem Velvet Lip Tint chính hãng mỹ phẩm Hàn Quốc</p>
                                </div>
                                <div className="price">
                                    <span className='newprice'>199.000đ</span>
                                    <span className='old-price'>249.000đ</span>
                                </div>

                                <div className="button__buy">
                                    <a href="/">Mua ngay</a>
                                </div>
                            </a>
                        </Grid>

                        <Grid xs={6} lg={2.8} className='grid25'>
                            <a href="/" className='button-link'>
                                <div className="hot__product">
                                    <p>NEW</p>
                                </div>
                                <div className="img">
                                    <img className='img1' alt="Đây là ảnh" />
                                    <img className='img2' alt="Đây là ảnh" />
                                </div>
                                <div className="title">
                                    <p>3CE Son kem Velvet Lip Tint chính hãng mỹ phẩm Hàn Quốc</p>
                                </div>
                                <div className="price">
                                    <span className='newprice'>199.000đ</span>
                                    <span className='old-price'>249.000đ</span>
                                </div>

                                <div className="button__buy">
                                    <a href="/">Mua ngay</a>
                                </div>
                            </a>
                        </Grid>

                        <Grid xs={6} lg={2.8} className='grid25'>
                            <a href="/" className='button-link'>
                                <div className="hot__product">
                                    <p>NEW</p>
                                </div>
                                <div className="img">
                                    <img className='img1' alt="Đây là ảnh" />
                                    <img className='img2' alt="Đây là ảnh" />
                                </div>
                                <div className="title">
                                    <p>3CE Son kem Velvet Lip Tint chính hãng mỹ phẩm Hàn Quốc</p>
                                </div>
                                <div className="price">
                                    <span className='newprice'>199.000đ</span>
                                    <span className='old-price'>249.000đ</span>
                                </div>

                                <div className="button__buy">
                                    <a href="/">Mua ngay</a>
                                </div>
                            </a>
                        </Grid>

                        <Grid xs={6} lg={2.8} className='grid25'>
                            <a href="/" className='button-link'>
                                <div className="hot__product">
                                    <p>NEW</p>
                                </div>
                                <div className="img">
                                    <img className='img1' alt="Đây là ảnh" />
                                    <img className='img2' alt="Đây là ảnh" />
                                </div>
                                <div className="title">
                                    <p>3CE Son kem Velvet Lip Tint chính hãng mỹ phẩm Hàn Quốc</p>
                                </div>
                                <div className="price">
                                    <span className='newprice'>199.000đ</span>
                                    <span className='old-price'>249.000đ</span>
                                </div>

                                <div className="button__buy">
                                    <a href="/">Mua ngay</a>
                                </div>
                            </a>
                        </Grid>

                        <Grid xs={6} lg={2.8} className='grid25'>
                            <a href="/" className='button-link'>
                                <div className="hot__product">
                                    <p>NEW</p>
                                </div>
                                <div className="img">
                                    <img className='img1' alt="Đây là ảnh" />
                                    <img className='img2' alt="Đây là ảnh" />
                                </div>
                                <div className="title">
                                    <p>3CE Son kem Velvet Lip Tint chính hãng mỹ phẩm Hàn Quốc</p>
                                </div>
                                <div className="price">
                                    <span className='newprice'>199.000đ</span>
                                    <span className='old-price'>249.000đ</span>
                                </div>

                                <div className="button__buy">
                                    <a href="/">Mua ngay</a>
                                </div>
                            </a>
                        </Grid>
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
        </div>
    );
}

export default Product;