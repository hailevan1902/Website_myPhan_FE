import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    AccountCircle,
    AccountCircleOutlined,
    CardTravel,
    Category,
    Home,
    Inventory,
    Logout,
    Newspaper,
} from "@mui/icons-material";

import {
    Container,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
} from "@mui/material";
import "./styles.scss";
import { useParams } from 'react-router-dom';
import userService from '../../../../../service/user';

AdminDetailUser.propTypes = {

};

function AdminDetailUser(props) {

    const [user, setUser] = useState();
    const [isUpdate, setIsUpdate] = useState(true);

    // const params = useParams();
    const { id } = useParams();

    const handleInput = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const updateUser = async () => {
        try {
            const response = await userService.updateUser(id, user);
            console.log("response", response);

        } catch (error) {
            console.log(error);
        }
    };

    const handelSubmit = () => {
        updateUser(id, user);
        console.log(user);
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const responseData = await userService.getUser(id);
                setUser(responseData);
            } catch (err) { }
        };
        fetchProduct();
    }, []);

    const update = () => {
        setIsUpdate(!isUpdate);
    };

    return (
        <div className="manage-user">
            <div className="manage__category">
                <div className="logo">HALE COSMETICS</div>

                <div className="manage-list">
                    <ul>
                        <li>
                            <Home></Home>
                            <a href="/manager">Trang chủ</a>
                        </li>

                        <li style={{ backgroundColor: "#cccccc5c", borderRadius: "10px" }}>
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

                        <li>
                            <Newspaper></Newspaper>
                            <a href="/admin-news">Tin tức</a>
                        </li>

                        <li>
                            <CardTravel></CardTravel>
                            <a href="admin-order">Đơn hàng</a>
                        </li>

                        <li className="logout">
                            <Logout></Logout>
                            <a href="#">Đăng xuất</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="manage__main">
                <div className="header">
                    <div className="logo">Admin</div>

                    <div className="search">
                        <input type="text" placeholder="Nhập thông tin tìm kiếm..." />
                    </div>

                    <div className="acc">
                        <a href="#">
                            <AccountCircleOutlined></AccountCircleOutlined>
                        </a>
                    </div>
                </div>
                <div className="container">
                    <Container className="container-main">
                        <div className="title">
                            <h1>Chi tiết người dùng</h1>
                        </div>

                        <div className="detail-website">
                            <div className="admin-detail-user">
                                <Container className="container">
                                    <div className="main">
                                        <form action="">
                                            <div className="code__name">
                                                <div className="code">
                                                    <p>Email :</p>
                                                    <TextField
                                                        disabled={isUpdate}
                                                        value={user?.email}
                                                        fullWidth
                                                        size="small"
                                                        name="email"
                                                        onChange={handleInput}
                                                    ></TextField>
                                                </div>

                                                <div className="name">
                                                    <p>Họ và tên :</p>
                                                    <TextField
                                                        disabled={isUpdate}
                                                        value={user?.fullName}
                                                        fullWidth
                                                        size="small"
                                                        name="fullName"
                                                        onChange={handleInput}
                                                    ></TextField>
                                                </div>
                                            </div>

                                            <div className="price">
                                                <div className="oldPrice">
                                                    <p>Địa chỉ :</p>
                                                    <TextField
                                                        disabled={isUpdate}
                                                        value={user?.address}
                                                        fullWidth
                                                        size="small"
                                                        name="address"
                                                        onChange={handleInput}
                                                    ></TextField>
                                                </div>

                                                <div className="newPrice">
                                                    <p>Số điện thoại :</p>
                                                    <TextField
                                                        disabled={isUpdate}
                                                        value={user?.phone}
                                                        fullWidth
                                                        size="small"
                                                        name="phone"
                                                        onChange={handleInput}
                                                    ></TextField>
                                                </div>
                                            </div>

                                            <p>Ngày sinh :</p>
                                            <TextField
                                                disabled={isUpdate}
                                                value={user?.dob}
                                                fullWidth
                                                size="small"
                                                className="description"
                                                name="dob"
                                                onChange={handleInput}
                                            ></TextField>

                                            <div className="img">
                                                <div className="img1">
                                                    <p>Ảnh đại diện :</p>
                                                    <TextField
                                                        type="file"
                                                        name="avt"
                                                        onChange={handleInput}
                                                    ></TextField>
                                                </div>

                                                <div className="status">
                                                    <p>Quyền :</p>
                                                    <TextField
                                                        disabled={isUpdate}
                                                        fullWidth
                                                        value={user?.roles}
                                                        size="small"
                                                        name="roles"
                                                        onChange={handleInput}
                                                    ></TextField>
                                                </div>
                                            </div>
                                        </form>

                                        <div className="button">
                                            <button
                                                disabled={!isUpdate}
                                                onClick={update}
                                                type="button"
                                                className="btn2"
                                            >
                                                Update
                                            </button>
                                            <a
                                                disabled={isUpdate}
                                                onClick={handelSubmit}
                                                className="btn3"
                                                href="/admin-user"
                                            >
                                                Apply
                                            </a>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default AdminDetailUser;