import React from 'react';
import PropTypes from 'prop-types';
import './baseRes.css'
import './flashSales.css'
import './flashSales.scss'
import a from '../../../../assets/img/fls2.jpg'
import { FormatListBulleted, Forward } from '@mui/icons-material';
FlashSales.propTypes = {

};

function FlashSales(props) {
    return (
        <div className='flash_sales'>
            <div class="container">
                <div class="grid wide">

                    <div className="flash_sales-title">
                        <div className="fls_bgr">
                            <h2 className='fls_text'>Sản phẩm bán chạy</h2>
                        </div>

                    </div>

                    <div class="list-products">
                        <div class="row">
                            <div class="col l-3 m-0 c-0">
                                <div class="category">
                                </div>
                            </div>
                            <div class="col l-9 m-12 c-12">
                                <div class="list">
                                    <div class="row">
                                        <div class="col l-3 m-4 c-12 fls_items" >
                                            <div class="list-product">
                                                <a href="/">
                                                    <div className="img_fls">
                                                        <img src={a} alt="#" />
                                                    </div>

                                                    <div className="title_fls">
                                                        <p>
                                                            Đây là tiêu đề của sản phẩm của HaLe, xin mời các mày nhanh tay đánh giá và mua hàng
                                                        </p>
                                                    </div>
                                                    <div className="price_fls">
                                                        <span className='newprice'>199.000đ</span>
                                                        <span className='old-price'>249.000đ</span>
                                                    </div>
                                                    <div className="button_fls">
                                                        <a href="/">Mua ngay</a>
                                                    </div>
                                                </a>
                                            </div>


                                        </div>

                                    </div>

                                    <div className="button_all_fls">
                                        <a href="/">Xem tất cả </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlashSales;