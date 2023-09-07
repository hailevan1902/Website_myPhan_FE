import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AccountCircle, AccountCircleOutlined, Add, CardTravel, Category, Home, Inventory, LocalMall, Logout, Newspaper, Person } from '@mui/icons-material';
import './styles.scss'
import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import userService from '../../../../service/user';




UserAdmin.propTypes = {

};

function UserAdmin(props) {

    const [user, setUser] = useState([]);

    const deleteUser = async (id) => {
        try {
            const responseData = await userService.deleteUser(id);
            fetchUser();
        } catch (err) { }
    };

    const fetchUser = async () => {
        try {
            const responseData = await userService.getAllUser();

            setUser(responseData);
        } catch (err) { }
    };

    useEffect(() => {

        fetchUser();
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

                        <li style={{ backgroundColor: '#cccccc5c', borderRadius: '10px' }}>
                            <AccountCircle></AccountCircle>
                            <a href="/admin-user">Người dùng</a>
                        </li>

                        <li>
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
                            <h1>Danh sách người dùng</h1>
                            <div className="add">
                                <a href="/admin-add-user">
                                    <Add></Add>
                                    Thêm người dùng
                                </a>
                            </div>
                        </div>

                        <div className="detail-website">
                            <TableContainer>
                                <Table sx={{ minWidth: 650 }} aria-label="caption table">

                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">STT</TableCell>
                                            <TableCell align="center">Email</TableCell>
                                            <TableCell align="center">Họ và tên</TableCell>
                                            <TableCell align="center">Địa chỉ</TableCell>
                                            <TableCell align="center">SDT</TableCell>
                                            <TableCell align="center">Quyền</TableCell>
                                            <TableCell align="center">Chức năng</TableCell>

                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {user?.map((row, key) => (

                                            < TableRow key={key} >
                                                <TableCell align="left">{key + 1}</TableCell>
                                                <TableCell align="center">{row.email}</TableCell>
                                                <TableCell align="center">{row.fullName}</TableCell>
                                                <TableCell align="center">{row.address}</TableCell>
                                                <TableCell align="center">{row.phone}</TableCell>
                                                <TableCell align="center">{row.roles}</TableCell>
                                                <TableCell align="center" className='btn'>
                                                    <a href={"/admin-detail-user/" + row.userId} className='btn-detail'>Chi tiết</a>
                                                    <span>|</span>
                                                    <button onClick={() => deleteUser(row.userId)} className='btn-delete'>Delete</button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>

                    </Container>
                </div>
            </div >
        </div >
    );
}

export default UserAdmin;