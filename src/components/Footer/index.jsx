import { Container } from '@mui/material';
import React from 'react';
import './styles.scss'
import '../../mainColor/color.scss'
import { Email, FacebookSharp, GitHub, Instagram, LocationOn, Phone, Send, YouTube } from '@mui/icons-material';

Footer.propTypes = {

};

function Footer(props) {
    return (
        <div className='footer'>
            <Container>
                <div className="footer__container">
                    <div className="footer__logo">
                        <div className="logo">
                            <p>HaLe</p>
                            <span>Cosmetics</span>
                        </div>

                        <div className="intro">
                            <p>Mew Cosmetic luôn tôn trọng khách hàng, lấy niềm vui, sự hài lòng của khách hàng để làm động lực, không ngừng tìm kiếm các sản phẩm tốt nhất để mỗi khách hàng đều có thể trở nên tự tin và xinh đẹp hơn.</p>
                        </div>

                        <div className="address">
                            <LocationOn className='address__icon'></LocationOn>
                            <p>Số 10, ngõ 265 Chiến Thắng, Văn Quán, Hà Đông, Hà Nội</p>
                        </div>

                        <div className="phone">
                            <Phone className='phone__icon'></Phone>
                            <p>039 377 6638</p>
                        </div>

                        <div className="email">
                            <Email className='email__icon'></Email>
                            <p>Hale.contact@gmail.com</p>
                        </div>
                    </div>

                    <div className="footer__sales">

                        <p className='sales__title'>Về chúng tôi</p>

                        <ul className="about">
                            <li className="list-about">
                                <a href="#">Trang chủ</a>
                            </li>
                            <li className="list-about">
                                <a href="#">Bộ sưu tập</a>
                            </li>
                            <li className="list-about">
                                <a href="#">Sản phẩm</a>
                            </li>
                            <li className="list-about">
                                <a href="#">Giới thiệu</a>
                            </li>
                            <li className="list-about">
                                <a href="#">Tin tức</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__brand">

                        <p className='brand__title'>Thương hiệu</p>

                        <ul className="brand__list">
                            <li className="items">
                                <a href="#">OHUI</a>
                            </li>
                            <li className="items">
                                <a href="#">Innisfree</a>
                            </li>
                            <li className="items">
                                <a href="#">3CE</a>
                            </li>
                            <li className="items">
                                <a href="#">BIORÉ</a>
                            </li>
                            <li className="items">
                                <a href="#">BLACK ROUGE</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__policy">

                        <p className='policy__title'>Chính sách</p>

                        <ul className="list-policy">
                            <li className="list">
                                <a href="#">Chính sách bảo mật</a>
                            </li>
                            <li className="list">
                                <a href="#">Chính sách vận chuyển</a>
                            </li>
                            <li className="list">
                                <a href="#">Chính sách đổi trả</a>
                            </li>
                            <li className="list">
                                <a href="#">Chính sách mua bán</a>
                            </li>
                            <li className="list">
                                <a href="#">Chính sách bảo hành</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </Container>
            <div className="title__contact">
                <p>Liên hệ với chúng tôi để nhận ưu đãi</p>
            </div>
            <Container>
                <div className="contact">
                    <div className="social__media">
                        <p>Truyền thông xã hội</p>
                        <div className="social__media-icon">
                            <FacebookSharp></FacebookSharp>
                            <YouTube></YouTube>
                            <Instagram></Instagram>
                            <GitHub>    </GitHub>
                        </div>
                    </div>
                    <div className="send__email">
                        <p>Gửi email cho HaLe</p>

                        <div className="email__input">
                            <input placeholder='Nhập email của bạn...' type="text" />
                            <button>Gửi</button>
                        </div>
                    </div>
                </div>
                <div className="thanks">
                    <p><span>HaLe</span> Comestic xin trân thành cảm ơn !!!</p>
                </div>
            </Container>
        </div>
    );
}

export default Footer;