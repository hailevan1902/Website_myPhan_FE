import React from 'react';
import PropTypes from 'prop-types';
import { Cached, CardGiftcard, ChevronRight, LocalShipping, Support, SupportAgent } from '@mui/icons-material';
import './home.scss'
import { Box, Container, Grid } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import background from '../../assets/img/3ce.jpg'
import son2 from '../../assets/img/son2.jpeg'
import bannersmall1 from '../../assets/img/banner_small.jpg'
import bannersmall2 from '../../assets/img/banner_small2.jpg'
import a from '../../assets/img/fls1.jpg'
import b from '../../assets/img/fls2.jpg'
import c from '../../assets/img/fls3jpg.jpg'
import d from '../../assets/img/fls4.jpg'
import e from '../../assets/img/fls5.jpg'
import f from '../../assets/img/fls6.jpg'
import FlashSales from './components/FlashSales/flashSales';
import BannerSmall from './components/BannerSmall/BannerSmall';



function Home() {
    return (
        <React.Fragment>
            <Header></Header>
            <div className='home'>
                <div className="slide__policy">

                    <div className="slide">

                    </div>

                    <div className="policy">
                        <div className="free-ship">
                            <LocalShipping></LocalShipping>
                            <p>Giao hàng toàn quốc</p>
                            <span>Miễn phí vận chuyển với các đơn hàng nội thành trị giá trên 500K và ngoại thành trị giá 1000K</span>
                        </div>

                        <div className="free-support">
                            <SupportAgent></SupportAgent>
                            <p>Hỗ trợ Online 24/24</p>
                            <span>Luôn hỗ trợ khách hàng 24/24 các ngày trong tuần kể cả lễ, Tết</span>
                        </div>

                        <div className="free-restore">
                            <Cached></Cached>
                            <p>Dễ dàng đổi trả</p>
                            <span>Miễn phí đổi trả hàng trong 30 ngày đầu tiên cho tất cả mặt hàng</span>
                        </div>

                        <div className="free-combo">
                            <CardGiftcard></CardGiftcard>
                            <p>Quà tặng hấp dẫn</p>
                            <span>Chương trình khuyến mãi cực lớn và hấp dẫn hàng tháng của cửa hàng</span>
                        </div>
                    </div>
                </div>

                {/* <div className="flashsales">
                    <Container>
                        <div className="flashsales__title">
                            <p>Sản phẩm bán chạy</p>
                            <span>Bộ sưu tập sản phẩm được nhiều khách hàng mua nhất của HALE</span>
                        </div>

                        <div className="hr"></div>

                        <Grid container className='flashsales__container'>
                            <Grid xs={6} md={5} lg={3} className='flashsale-4'>
                                <div className="img"></div>
                            </Grid>

                            <Grid container xs={12} md={7} lg={9} className='flashsale-9'>

                                <Grid xs={6} lg={2.8} className='grid25'>
                                    <a href="/" className='button-link'>
                                        <div className="hot__product">
                                            <p>NEW</p>
                                        </div>
                                        <div className="img">
                                            <img className='img1' src={background} alt="Đây là ảnh" />
                                            <img className='img2' src={son2} alt="Đây là ảnh" />
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
                                            <img className='img1' src={son2} alt="Đây là ảnh" />
                                            <img className='img2' src={background} alt="Đây là ảnh" />
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
                                            <img className='img1' src={a} alt="Đây là ảnh" />
                                            <img className='img2' src={b} alt="Đây là ảnh" />
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
                                            <img className='img1' src={d} alt="Đây là ảnh" />
                                            <img className='img2' src={c} alt="Đây là ảnh" />
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
                                            <img className='img1' src={c} alt="Đây là ảnh" />
                                            <img className='img2' src={d} alt="Đây là ảnh" />
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
                                            <img className='img1' src={b} alt="Đây là ảnh" />
                                            <img className='img2' src={a} alt="Đây là ảnh" />
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
                                            <img className='img1' src={e} alt="Đây là ảnh" />
                                            <img className='img2' src={f} alt="Đây là ảnh" />
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
                                            <img className='img1' src={f} alt="Đây là ảnh" />
                                            <img className='img2' src={e} alt="Đây là ảnh" />
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
                            </Grid>
                        </Grid>

                        <div className="flashsales__all">
                            <a href="/">Xem tất cả</a>

                        </div>
                    </Container>
                </div> */}

                <FlashSales></FlashSales>

                {/* <div className="banner-small">
                    <Container className='banner-container'>
                        <div className="banner1">
                            <img src={bannersmall1} alt="" />
                        </div>
                        <div className="banner2">
                            <img src={bannersmall2} alt="" />
                        </div>
                    </Container>
                </div> */}

                <BannerSmall></BannerSmall>

                <div className="new-product">
                    <Container>
                        <div className="flashsales__title">
                            <p>Sản phẩm mới nhất</p>
                            <span>Những sản phẩm mới nhất vừa được cập nhật của nhà HALE</span>
                        </div>

                        <div className="hr"></div>

                        <Grid container className='flashsales__container'>

                            <Grid xs={12} md={5} lg={3} className='flashsale-4'>
                                <div className="img"></div>
                            </Grid>

                            <Grid container xs={12} md={7} lg={9} className='flashsale-9'>

                                <Grid xs={6} lg={2.8} className='grid25'>
                                    <a href="/" className='button-link'>
                                        <div className="hot__product">
                                            <p>NEW</p>
                                        </div>
                                        <div className="img">
                                            <img className='img1' src={background} alt="Đây là ảnh" />
                                            <img className='img2' src={son2} alt="Đây là ảnh" />
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
                                            <img className='img1' src={son2} alt="Đây là ảnh" />
                                            <img className='img2' src={background} alt="Đây là ảnh" />
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
                                            <img className='img1' src={a} alt="Đây là ảnh" />
                                            <img className='img2' src={b} alt="Đây là ảnh" />
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
                                            <img className='img1' src={d} alt="Đây là ảnh" />
                                            <img className='img2' src={c} alt="Đây là ảnh" />
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
                                            <img className='img1' src={c} alt="Đây là ảnh" />
                                            <img className='img2' src={d} alt="Đây là ảnh" />
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
                                            <img className='img1' src={b} alt="Đây là ảnh" />
                                            <img className='img2' src={a} alt="Đây là ảnh" />
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
                                            <img className='img1' src={e} alt="Đây là ảnh" />
                                            <img className='img2' src={f} alt="Đây là ảnh" />
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
                                            <img className='img1' src={f} alt="Đây là ảnh" />
                                            <img className='img2' src={e} alt="Đây là ảnh" />
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
                            </Grid>
                        </Grid>

                        <div className="flashsales__all">
                            <a href="/">Xem tất cả</a>

                        </div>
                    </Container>
                </div>

                <div className="hot-news">
                    <Container className='hotnews__container'>

                        <div className="flashsales__title">
                            <p>TIN TỨC & BÍ KÍP CHĂM SÓC CƠ THỂ </p>
                            <span>Tổng hợp những tin tức khuyến mại và bí kíp chăm sóc cơ thể</span>
                        </div>

                        <div className="hr"></div>

                        <div className="main">
                            <div className="hotnew__items">
                                <a href="#">
                                    <div className="date">
                                        <p>08</p>
                                        <span>03/2023</span>
                                    </div>

                                    <div className="img">
                                        <img src={a} alt="" />
                                    </div>

                                    <div className="title">
                                        <p>Đây là tiêu đề của tin tức</p>
                                    </div>

                                    <div className="content">
                                        <p>
                                            Đây là nguyên tắc quan trọng nhất với kem chống nắng cho mọi loại da nói chung chứ không chỉ da dầu. Phổ chống nắng phụ thuộc vào 3 chỉ số sau đây:
                                            SPF đo khả năng chống tia UVB, nên dùng kem chống nắng có SPF từ 30 – 50, nhưng không cần cao hơn vì SPF trên 50 không còn nhiều ý nghĩa (như hình bên dưới).
                                            PA đo khả năng chống tia UVA, nên dùng kem chống nắng có PA từ +++ trở lên, có thể bảo vệ da khỏi 90% UVA
                                            PPD đo khả năng chống lại sự sạm nám da do tia UVA gây ra của kem chống nắng. Ví dụ: PPD=16 nghĩa là cần thời gian dài gấp 16 lần để tia UVA làm da bạn sạm đi, so với khi không bôi kem chống nắng. PPD là chỉ số không phổ biến, chủ yếu ở châu u và cũng chưa có quy định chặt chẽ. Thông thường, PPD từ 8 – 16 được xem là tương đương PA+++
                                            (Lưu ý: những số liệu này chỉ đúng khi bạn bôi đủ lượng kem chống nắng: 2 mg/cm2)

                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div className="hotnew__items">
                                <a href="#">
                                    <div className="date">
                                        <p>08</p>
                                        <span>03/2023</span>
                                    </div>

                                    <div className="img">
                                        <img src={d} alt="" />
                                    </div>

                                    <div className="title">
                                        <p>Đây là tiêu đề của tin tức</p>
                                    </div>

                                    <div className="content">
                                        <p>
                                            Đây là nguyên tắc quan trọng nhất với kem chống nắng cho mọi loại da nói chung chứ không chỉ da dầu. Phổ chống nắng phụ thuộc vào 3 chỉ số sau đây:
                                            SPF đo khả năng chống tia UVB, nên dùng kem chống nắng có SPF từ 30 – 50, nhưng không cần cao hơn vì SPF trên 50 không còn nhiều ý nghĩa (như hình bên dưới).
                                            PA đo khả năng chống tia UVA, nên dùng kem chống nắng có PA từ +++ trở lên, có thể bảo vệ da khỏi 90% UVA
                                            PPD đo khả năng chống lại sự sạm nám da do tia UVA gây ra của kem chống nắng. Ví dụ: PPD=16 nghĩa là cần thời gian dài gấp 16 lần để tia UVA làm da bạn sạm đi, so với khi không bôi kem chống nắng. PPD là chỉ số không phổ biến, chủ yếu ở châu u và cũng chưa có quy định chặt chẽ. Thông thường, PPD từ 8 – 16 được xem là tương đương PA+++
                                            (Lưu ý: những số liệu này chỉ đúng khi bạn bôi đủ lượng kem chống nắng: 2 mg/cm2)

                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div className="hotnew__items">
                                <a href="#">
                                    <div className="date">
                                        <p>28</p>
                                        <span>03/2023</span>
                                    </div>

                                    <div className="img">
                                        <img src={e} alt="" />
                                    </div>

                                    <div className="title">
                                        <p>Đây là tiêu đề của tin tức</p>
                                    </div>

                                    <div className="content">
                                        <p>
                                            Đây là nguyên tắc quan trọng nhất với kem chống nắng cho mọi loại da nói chung chứ không chỉ da dầu. Phổ chống nắng phụ thuộc vào 3 chỉ số sau đây:
                                            SPF đo khả năng chống tia UVB, nên dùng kem chống nắng có SPF từ 30 – 50, nhưng không cần cao hơn vì SPF trên 50 không còn nhiều ý nghĩa (như hình bên dưới).
                                            PA đo khả năng chống tia UVA, nên dùng kem chống nắng có PA từ +++ trở lên, có thể bảo vệ da khỏi 90% UVA
                                            PPD đo khả năng chống lại sự sạm nám da do tia UVA gây ra của kem chống nắng. Ví dụ: PPD=16 nghĩa là cần thời gian dài gấp 16 lần để tia UVA làm da bạn sạm đi, so với khi không bôi kem chống nắng. PPD là chỉ số không phổ biến, chủ yếu ở châu u và cũng chưa có quy định chặt chẽ. Thông thường, PPD từ 8 – 16 được xem là tương đương PA+++
                                            (Lưu ý: những số liệu này chỉ đúng khi bạn bôi đủ lượng kem chống nắng: 2 mg/cm2)

                                        </p>
                                    </div>
                                </a>
                            </div>

                        </div>
                        <div className="flashsales__all">
                            <a href="/">Xem tất cả</a>

                        </div>
                    </Container>
                </div>

                <div className="brand">
                    <Container>
                        <div className="flashsales__title">
                            <p>Thương hiệu</p>
                            <span>Bộ sưu tập thương hiệu nổi tiếng của HALE</span>
                        </div>

                        <div className="hr"></div>
                        <div className="brand__main">
                            <div className="brand__items items1">
                            </div>

                            <div className="brand__items items2">
                            </div>

                            <div className="brand__items items3">
                            </div>

                            <div className="brand__items items4">
                            </div>

                            <div className="brand__items items5">
                            </div>

                            <div className="brand__items items6">
                            </div>
                        </div>
                    </Container>
                </div>
            </div >
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Home;