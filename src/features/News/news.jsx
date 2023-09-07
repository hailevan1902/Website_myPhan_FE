import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import './news.scss'
import news from '../../assets/img/news.jpg'
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import a from '../../assets/img/fls1.jpg'
import b from '../../assets/img/fls2.jpg'
import c from '../../assets/img/fls3jpg.jpg'
import d from '../../assets/img/fls4.jpg'
import e from '../../assets/img/fls5.jpg'
import f from '../../assets/img/fls6.jpg'

News.propTypes = {

};

function News(props) {
    return (
        <React.Fragment>
            <Header></Header>
            <div className='news'>
                <Container>
                    <p className='title'>Tin tức </p>

                    <div className="main">
                        <div className="news-items">
                            <a href="" className="news-link">
                                <div className="img">
                                    <img src={d} alt="" />
                                </div>
                                <p className="title-news">
                                    Top 4 cách bảo vệ da khỏi tác động của ánh nắng mặt trời khi mùa hè tới
                                </p>
                                <p className="content-news">
                                    Sở hữu một làn da đẹp luôn là điều các phái đẹp mong muốn. Dưới ảnh hưởng của ánh nắng ngày hè, nếu không biết
                                </p>
                            </a>
                        </div>

                        <div className="news-items">
                            <a href="" className="news-link">
                                <div className="img">
                                    <img src={b} alt="" />
                                </div>
                                <p className="title-news">
                                    Top 4 cách bảo vệ da khỏi tác động của ánh nắng mặt trời khi mùa hè tới
                                </p>
                                <p className="content-news">
                                    Sở hữu một làn da đẹp luôn là điều các phái đẹp mong muốn. Dưới ảnh hưởng của ánh nắng ngày hè, nếu không biết
                                </p>
                            </a>
                        </div>

                        <div className="news-items">
                            <a href="" className="news-link">
                                <div className="img">
                                    <img src={a} alt="" />
                                </div>
                                <p className="title-news">
                                    Top 4 cách bảo vệ da khỏi tác động của ánh nắng mặt trời khi mùa hè tới
                                </p>
                                <p className="content-news">
                                    Sở hữu một làn da đẹp luôn là điều các phái đẹp mong muốn. Dưới ảnh hưởng của ánh nắng ngày hè, nếu không biết
                                </p>
                            </a>
                        </div>

                        <div className="news-items">
                            <a href="" className="news-link">
                                <div className="img">
                                    <img src={e} alt="" />
                                </div>
                                <p className="title-news">
                                    Top 4 cách bảo vệ da khỏi tác động của ánh nắng mặt trời khi mùa hè tới
                                </p>
                                <p className="content-news">
                                    Sở hữu một làn da đẹp luôn là điều các phái đẹp mong muốn. Dưới ảnh hưởng của ánh nắng ngày hè, nếu không biết
                                </p>
                            </a>
                        </div>

                        <div className="news-items">
                            <a href="" className="news-link">
                                <div className="img">
                                    <img src={f} alt="" />
                                </div>
                                <p className="title-news">
                                    Top 4 cách bảo vệ da khỏi tác động của ánh nắng mặt trời khi mùa hè tới
                                </p>
                                <p className="content-news">
                                    Sở hữu một làn da đẹp luôn là điều các phái đẹp mong muốn. Dưới ảnh hưởng của ánh nắng ngày hè, nếu không biết
                                </p>
                            </a>
                        </div>

                        <div className="news-items">
                            <a href="" className="news-link">
                                <div className="img">
                                    <img src={news} alt="" />
                                </div>
                                <p className="title-news">
                                    Top 4 cách bảo vệ da khỏi tác động của ánh nắng mặt trời khi mùa hè tới
                                </p>
                                <p className="content-news">
                                    Sở hữu một làn da đẹp luôn là điều các phái đẹp mong muốn. Dưới ảnh hưởng của ánh nắng ngày hè, nếu không biết
                                </p>
                            </a>
                        </div>
                    </div>

                    <div className="page">
                        <div className="center">
                            <div className="page-number">
                                <KeyboardDoubleArrowLeft className='icon__left'></KeyboardDoubleArrowLeft>
                                <a href="" className='page__active'>1</a>
                                <a href="">2</a>
                                <a href="">3</a>
                                <KeyboardDoubleArrowRight className='icon__right'></KeyboardDoubleArrowRight>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default News;