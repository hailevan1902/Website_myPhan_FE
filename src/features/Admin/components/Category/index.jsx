import { AccountCircle, AccountCircleOutlined, CardTravel, Category, Home, Inventory, Logout, Newspaper } from '@mui/icons-material';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './styles.scss';
import productService from '../../../../service/product';
import categoryService from '../../../../service/category';
import CategoryList from './components/tb_cate';

CategoryAdmin.propTypes = {

};

function CategoryAdmin(props) {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const responseData = await categoryService.getAllCategory();

                setCategory(responseData);
            } catch (err) { }
        };
        fetchCategory();
    }, []);

    console.log(category);

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

                        <li >
                            <Inventory></Inventory>
                            <a href="/admin-product">Sản phẩm</a>
                        </li>

                        <li style={{ backgroundColor: '#cccccc5c', borderRadius: '10px' }}>
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
                            <h1>Danh sách danh mục website</h1>
                        </div>

                        <div className="detail-website">
                            <TableContainer>
                                <Table sx={{ minWidth: 650 }} aria-label="caption table">

                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">STT</TableCell>
                                            <TableCell align="center">Mã danh mục</TableCell>
                                            <TableCell align="center">Tên danh mục</TableCell>
                                            <TableCell align="center">Mô tả</TableCell>
                                            <TableCell align="center">Chức năng</TableCell>

                                        </TableRow>
                                    </TableHead>

                                    {/* <TableBody>
                                        {category?.map((row, key) => (
                                            <TableRow key={key}>
                                                <TableCell align="left">{key + 1}</TableCell>
                                                <TableCell align="center">{row.categoryCode}</TableCell>
                                                <TableCell align="center">{row.categoryName}</TableCell>
                                                <TableCell align="center">{row.description}</TableCell>
                                                <TableCell align="center" className='btn'>
                                                    <a href="#" className='btn-detail'>Chi tiết</a>
                                                    <span>|</span>
                                                    <a href="#" className='btn-delete'>Delete</a>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody> */}
                                    <CategoryList categoryList={category} />
                                </Table>
                            </TableContainer>
                        </div>

                    </Container>
                </div>
            </div>
        </div>
    );
}

export default CategoryAdmin;