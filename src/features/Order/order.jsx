import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Table } from 'reactstrap';
import a from '../../assets/img/kcn2.jpg'
Order.propTypes = {

};



function Order(props) {
    return (
        <React.Fragment>
            <Header></Header>
            <div className="order">
                <Container className='container' >

                    <div className="title">
                        <h2>Danh sách đặt hàng</h2>
                    </div>

                    <div className="main">
                        <TableContainer className='table'>
                            <Table sx={{ minWidth: 650 }} aria-label="caption table" className='tb_item'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">STT</TableCell>
                                        <TableCell align="center">Hình ảnh</TableCell>
                                        <TableCell align="center">Mã sản phẩm</TableCell>
                                        <TableCell align="center">Tên sản phẩm</TableCell>
                                        <TableCell align="center">Giá</TableCell>
                                        <TableCell align="center">Số lượng</TableCell>
                                        <TableCell align="center">Trạng thái</TableCell>
                                        <TableCell align="center">Chức năng</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>

                                    <TableRow>
                                        <TableCell align="left">1</TableCell>
                                        <TableCell align="center">
                                            <img src={a} alt="" style={{ width: '100px' }} />
                                        </TableCell>
                                        <TableCell align="center">KCN</TableCell>
                                        <TableCell align="center">Kem Dưỡng Da Dạng Gói...</TableCell>
                                        <TableCell align="center">199.000đ</TableCell>
                                        <TableCell align="center">1</TableCell>
                                        <TableCell align="center">Đang xử lý</TableCell>
                                        <TableCell align="center" className='btn'>
                                            <a href="/admin-detail-product/" className='btn-detail'>Chi tiết</a>
                                            <span>|</span>
                                            <button className='btn-delete'>Delete</button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                </Container>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Order;