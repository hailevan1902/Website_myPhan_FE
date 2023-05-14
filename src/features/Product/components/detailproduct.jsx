import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './detailproduct.scss'
import { Container } from '@mui/material';
import { Add, AddShoppingCart, Remove, Star, StarHalf } from '@mui/icons-material';
import { set } from 'react-hook-form';
import kcn from '../../../assets/img/kcn1.jpg'
import kcn2 from '../../../assets/img/kcn2.jpg'

Detailproduct.propTypes = {

};

function Detailproduct(props) {
    const [count, setcount] = useState(1);

    const remove = () => {
        if (count <= 1) {
            setcount(1)
        }
        else {
            setcount(count - 1);
        }
    }

    const add = () => {
        setcount(count + 1);
    }
    return (
        <div className='detailproduct'>
            <Container className='detailproduct-container'>
                <div className="img">
                    <div className="detailproduct__img">
                        <div className="detailproduct__img-lage">
                            <img src={kcn2} alt="" />
                        </div>
                        <div className="detailproduct__img-small">
                            <img src={kcn} alt="" className='img1' />
                            <img src={kcn} alt="" className='img2' />
                            <img src={kcn} alt="" className='img3' />
                        </div>
                    </div>

                    <div className="detail">
                        <p className="title">
                            Kem Dưỡng Da Dạng Gói Phù Hợp Để Theo Du Lịch BERRISOM PETITE POCKET_Mỹ phẩm Hàn Quốc chính hãng
                        </p>

                        <div className="rate">
                            <div className="star">
                                <Star></Star>
                                <Star></Star>
                                <Star></Star>
                                <Star></Star>
                                <StarHalf></StarHalf>
                            </div>

                            <p>1k Đánh Giá </p>
                            <p>12,5k Đã Bán </p>

                        </div>

                        <p className='status'>Tình trạng : Còn hàng</p>

                        <p className="protect">Bảo hiểm :        Bảo hiểm quyền lợi người tiêu dùng</p>

                        <div className="price">
                            <div className="new-price">
                                <p>199.000đ</p>
                            </div>

                            <div className="old-price">
                                <p>299.000đ</p>
                            </div>

                        </div>

                        <div className="quantity">
                            <p>Số lượng :</p>
                            <button onClick={remove}><Remove /></button>
                            <input type='text' value={count}></input>
                            <button onClick={add}><Add /></button>
                        </div>

                        <div className="button">
                            <button> Mua ngay </button>

                            <div className="add__toCart">
                                <AddShoppingCart />
                                <p>Thêm vào giỏ hàng</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detail__product">
                    <p>Chi tiết sản phẩm</p>
                    <div className="detail">
                        <div className="left">
                            <ul>
                                <li>Tên sản phẩm </li>
                                <li>Hạn sử dụng </li>
                                <li>Thể tích  </li>
                                <li>Trọng lượng  </li>
                                <li>Giao hàng từ</li>
                            </ul>
                        </div>
                        <div className="center">
                            <ul>
                                <li>:</li>
                                <li>:</li>
                                <li>:</li>
                                <li>:</li>
                                <li>:</li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul>
                                <li>Kem chống nắng Hàn Quốc</li>
                                <li>24 tháng</li>
                                <li>100ml</li>
                                <li>100g</li>
                                <li>Hà Nội</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="product__description">
                    <p>Mô tả sản phẩm</p>
                    <span>
                        Có phải bạn đang muốn tìm tắm trắng với công dụng làm sạch & trắng da toàn thân, mờ thâm, mờ đồi mồi, giúp làm ẩm da, mịn & dưỡng da, giúp da săn chắc, ngừa lão hóa và chống nhăn da?
                        Hãy cùng tham khảo sản phẩm Tắm trắng Collagen X3 Luxury Mix Saffron của Công ty TNHH MTV Mỹ Phẩm
                        Đông Anh nhé!
                        --------
                        ✅ Công dụng của tắm trắng Collagen X3 Mix Saffron
                        Làm sạch da, làm trắng da toàn thân, mờ thâm, mờ đồi mồi, giúp làm mịn & dưỡng da, giữ ẩm và giúp da săn
                        chắn, ngừa lão hóa và chống nhăn da.
                        Đặc biệt, khi bạn tắm trắng, tinh chất the mát từ tắm trắng Collagen sẽ giúp bạn thư giãn. Bạn sẽ cảm thấy rất
                        thoải mái.
                        Mẫu tắm trắng Collagen này đi kèm với hương nước hoa thơm nồng và mùi thơm ấy lưu lại trên da cũng rất lâu.
                        Sau khi tắm xong, da của bạn không những trắng mà lại còn rất thơm.
                        <br />
                        ✅ Hướng dẫn sử dụng
                        Bạn cần làm ướt da, sau đó lấy 1 gói tắm trắng Saffron thoa đều lên toàn bộ cơ thể (trừ vùng mặt hoặc vết
                        thương bị trầy xước). Cần massage cho tinh chất thấm đều. Sau 15 – 20 phút, tắm lại với nước sạch.
                        Duy trì sử dụng 2 lần / tuần để đạt độ trắng như ý.
                        Ủ trắng là liệu pháp làm trắng nhanh và sâu. Bạn nên kết hợp sử dụng kem body hằng ngày để nhanh chóng sở
                        hữu làn da trắng hồng.
                        --------
                        <br />
                        CÔNG TY TNHH MỘT THÀNH VIÊN MỸ PHẨM ĐÔNG ANH
                        <br />
                        Địa chỉ: số 233 võ thị sáu , khóm 4 , phường 7 , thành phố bạc liêu, bạc liêu
                        <br />
                        #mỹphẩmđônganh
                        <br />
                        #collagenx3luxury
                        <br />
                        #body_ủ_đêm_collagen_x3 #body_collagen_x3_LUXURY
                        <br />
                        #body_collagen_x3_chính-hãng #body_collagen_x3
                        <br />
                        #body_collagen_x3_đông_anh #body_collagen_x3_LUXURY_chính-hãng
                        <br />
                        #body_collagen_giáng_kiều
                        <br />
                        #body_collagen_mẫu_mới #TẮM_TRẮNG_COLLAGEN_LUXURY
                        <br />
                        #body_collagen_xanh #TẮM_TRẮNG_COLLAGEN_X12
                        <br />
                        #body_collagen_màu_xanh
                        <br />
                        #TẮM_TRẮNG_LUXURY_X3  #TẮM_TRẮNG_COLLAGEN_X3
                    </span>
                </div>
            </Container >

        </div >
    );
}

export default Detailproduct;