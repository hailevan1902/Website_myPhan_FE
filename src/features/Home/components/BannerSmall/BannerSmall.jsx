import React from 'react';
import PropTypes from 'prop-types';
import './BannerSmall.scss'
import '../../../../assets/css/base.css'
import bannersmall1 from '../../../../assets/img/banner_small.jpg'
import bannersmall2 from '../../../../assets/img/banner_small2.jpg'
BannerSmall.propTypes = {

};

function BannerSmall(props) {
    return (
        <div className='banner-small'>
            <div className="container">
                <div className="grid wide banner">
                    <div className="banner1">
                        <img src={bannersmall1} alt="" />
                    </div>
                    <div className="banner2">
                        <img src={bannersmall2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerSmall;