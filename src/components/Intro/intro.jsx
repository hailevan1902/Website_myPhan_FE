import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import './intro.scss'
import Header from '../Header';
import Footer from '../Footer';

Intro.propTypes = {

};

function Intro(props) {
    return (
        <React.Fragment>
            <Header></Header>
            <div className='intro'>
                <Container>
                    <p className='title'>Giới thiệu thương hiệu mỹ phẩm HALE</p>
                    <span className='content'>
                        <span>HALE Cosmetic Việt Nam</span> trực tiếp sản xuất các dòng mỹ phẩm thiên nhiên, công ty đi theo hướng phát triển bền vững và lâu dài các dòng mỹ phẩm thiên nhiên an toàn cho da nhưng không kém phần hiệu quả. Hiện tại Delta Cosmetic có mạng lưới các nhà phân phối, đại lý bán lẻ các sản phẩm mỹ phẩm thiên nhiên phủ rộng khắp Hà Nội và các tỉnh miền Bắc. Với phương châm “Beauty secret from nature”  HALE Cosmetic tin rằng mình chính là chìa khóa giúp kết nối con người đến gần hơn với các sản phẩm mỹ phẩm từ thiên nhiên.

                        <br />
                        <span>Sứ mệnh: </span> Tự nhiên em đẹp là tràng web đem lại vẻ đẹp hoàn hảo, tự nhiên, lý tưởng nhất cho người Việt Nam, vẻ đẹp xuất phát từ nội tại bộc lộ ra bên ngoài.

                        <br />
                        <span>Tầm nhìn: </span> Phấn đấu trở thành cửa hàng kinh doanh mỹ phẩm 100% thiên nhiên đảm bảo chất lượng, có kiểm nghiệm hiệu quả, đảm bảo an toàn tuyệt đối cho người sử dụng.

                        <br />
                        <span>Điểm nổi bật: </span> Những mặt hàng mỹ phẩm tại cửa hàng luôn được kiểm duyệt chặc chẽ, luôn luôn tuân theo tiêu chí 100% chiết xuất thiên nhiên, an toàn tuyệt đối cho người sử dụng. Những sản phẩm luôn đạt chuẩn chất lượng và là những sản phẩm có nguồn gốc xuất xứ rõ ràng

                        <br />
                        Mỹ phẩm từ thiên nhiên hay còn được gọi là mỹ phẩm hữu cơ với thành phần chính là những chiết xuất từ những bộ phận của thực vật như hoa, quả, thân, lá cùng với những khoáng chất thiên nhiên để vừa mang tính trị liệu, vừa nuôi dưỡng tế bào da.
                        <br />
                        Do dược chiết xuất từ thiên nhiên nên những mỹ phẩm này rất an toàn cho da, kể cả những làn da cực kỳ nhạy cảm. Nếu bạn là người có da nhạy cảm, hay bị kích ứng hoặc thường xuyên gặp các vấn đề về da, hãy sử dụng những sản phẩm từ thiên nhiên với nhãn ghi trên vỏ hợp là hydro-allergenic (ít gây kích ứng da) để chăm sóc cho da bạn nhé!
                    </span>
                    <span style={{ display: 'block', marginBottom: '20px' }}>HALE Cosmetic xin trân thành cảm ơn quý khách hàng đã tin tưởng và sử dụng !!!</span>
                </Container>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Intro;