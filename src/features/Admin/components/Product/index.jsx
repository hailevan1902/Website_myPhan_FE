import { AccountCircle, AccountCircleOutlined, Add, CardTravel, Category, Home, Inventory, Logout, Newspaper } from '@mui/icons-material';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './styles.scss';
import productService from '../../../../service/product';


ProductAdmin.propTypes = {

};

function ProductAdmin(props) {

    const [product, setProduct] = useState([]);
    const deleteProduct = async (id) => {
        try {
            const responseData = await productService.deleteProduct(id);
            fetchProduct();
        } catch (err) { }
    };

    const fetchProduct = async () => {
        try {
            const responseData = await productService.getAllProduct();

            setProduct(responseData);
        } catch (err) { }
    };

    useEffect(() => {

        fetchProduct();
    }, []);

    return (
        <div className="manage-user">
            <div className="manage__category">

                <div className="logo">
                    HALE COSMETICS
                </div>

                <div className="manage-list">
                    <ul>
                        <li >
                            <Home></Home>
                            <a href="/manager">Trang chủ</a>
                        </li>

                        <li >
                            <AccountCircle></AccountCircle>
                            <a href="/admin-user">Người dùng</a>
                        </li>

                        <li style={{ backgroundColor: '#cccccc5c', borderRadius: '10px' }}>
                            <Inventory></Inventory>
                            <a href="/admin-product">Sản phẩm</a>
                        </li>

                        <li>
                            <Category></Category>
                            <a href="/admin-category">Danh mục</a>
                        </li>

                        <li>
                            <Newspaper></Newspaper>
                            <a href="/admin-news">Tin tức</a>
                        </li>

                        <li>
                            <CardTravel></CardTravel>
                            <a href="admin-order">Đơn hàng</a>
                        </li>

                        <li className='logout'>
                            <Logout></Logout>
                            <a href="#">Đăng xuất</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="manage__main">
                <div className="header">
                    <div className="logo">
                        Admin
                    </div>

                    <div className="search">
                        <input type="text" placeholder='Nhập thông tin tìm kiếm...' />
                    </div>

                    <div className="acc">
                        <a href="#">
                            <AccountCircleOutlined></AccountCircleOutlined>
                        </a>
                    </div>
                </div>
                <div className="container">

                    <Container className='container-main'>
                        <div className="title">
                            <h1>Danh sách sản phẩm</h1>
                            <div className="add">
                                <a href="/admin-add-product">
                                    <Add></Add>
                                    Thêm sản phẩm
                                </a>
                            </div>
                        </div>

                        <div className="detail-website">
                            <TableContainer>
                                <Table sx={{ minWidth: 650 }} aria-label="caption table">

                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">STT</TableCell>
                                            <TableCell align="center">Mã sản phẩm</TableCell>
                                            <TableCell align="center">Tên sản phẩm</TableCell>
                                            <TableCell align="center">Giá</TableCell>
                                            <TableCell align="center">Trạng thái</TableCell>
                                            <TableCell align="center">Đánh giá</TableCell>
                                            <TableCell align="center">Chức năng</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {product?.map((row, key) => (
                                            <TableRow key={key}>
                                                <TableCell align="left">{key + 1}</TableCell>
                                                <TableCell align="center">{row.productCode}</TableCell>
                                                <TableCell align="center">{row.productName}</TableCell>
                                                <TableCell align="center">{row.price}</TableCell>
                                                <TableCell align="center">{row.status}</TableCell>
                                                <TableCell align="center">{row.rate}</TableCell>
                                                <TableCell align="center" className='btn'>
                                                    <a href={"/admin-detail-product/" + row.productId} className='btn-detail'>Chi tiết</a>
                                                    <span>|</span>
                                                    <button onClick={() => deleteProduct(row.productId)} className='btn-delete'>Delete</button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>

                    </Container>
                </div>
            </div>
        </div>
    );
}

export default ProductAdmin;