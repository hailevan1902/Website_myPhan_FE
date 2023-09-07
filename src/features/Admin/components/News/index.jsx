import { AccountCircle, AccountCircleOutlined, CardTravel, Category, Home, Inventory, Logout, Newspaper } from '@mui/icons-material';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import newsService from '../../../../service/news';
import './styles.scss';

NewsAdmin.propTypes = {

};

function NewsAdmin(props) {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const responseData = await newsService.getAllNews();

                setNews(responseData);
            } catch (err) { }
        };
        fetchNews();
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

                        <li >
                            <Inventory></Inventory>
                            <a href="/admin-product">Sản phẩm</a>
                        </li>

                        <li>
                            <Category></Category>
                            <a href="/admin-category">Danh mục</a>
                        </li>

                        <li style={{ backgroundColor: '#cccccc5c', borderRadius: '10px' }}>
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
                                            <TableCell align="center">Tiêu đề</TableCell>
                                            <TableCell align="center">Nội dung</TableCell>
                                            <TableCell align="center">Ngày đăng</TableCell>

                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {news?.map((row, key) => (
                                            <TableRow key={key}>
                                                <TableCell align="left">{key + 1}</TableCell>
                                                <TableCell align="center">{row.newsTitle}</TableCell>
                                                <TableCell align="center">{row.newsContent}</TableCell>
                                                <TableCell align="center">{row.date}</TableCell>
                                                <TableCell align="center" className='btn'>
                                                    <a href="#" className='btn-detail'>Chi tiết</a>
                                                    <span>|</span>
                                                    <button href="#" className='btn-delete'>Delete</button>
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

export default NewsAdmin;