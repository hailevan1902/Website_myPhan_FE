import React, { useState } from "react";
import PropTypes from "prop-types";
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
import { Container, TextField } from "@mui/material";
import userService from "../../../../../service/user";
import './addUser.scss'
AddUser.propTypes = {};



const initalState = {
    email: "", fullName: "", addres: "", phone: "", dob: "", avt: "", roles: ""
};

function AddUser(props) {
    const [state, setState] = useState(initalState);
    const { email, fullName, addres, phone, dob, avt, roles } = state;

    const addUser = async (state) => {
        try {
            const response = await userService.createUser(state);
            console.log("response", response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleInput = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handelSubmit = (e) => {
        addUser(state);
        // e.preventDefault();
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
                            <h1>Thêm người dùng mới</h1>
                        </div>

                        <div className="detail-website">
                            <div className="admin-detail-user">
                                <Container className="container">
                                    <div className="main">
                                        <form id="form">
                                            <div className="code__name">
                                                <div className="code">
                                                    <p>Email :</p>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        name="email"
                                                        onChange={handleInput}
                                                        value={email}
                                                    ></TextField>
                                                </div>

                                                <div className="name">
                                                    <p>Họ và tên :</p>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        name="fullName"
                                                        onChange={handleInput}
                                                        value={fullName}
                                                    ></TextField>
                                                </div>
                                            </div>

                                            <div className="price">
                                                <div className="oldPrice">
                                                    <p>Địa chỉ:</p>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        name="address"
                                                        onChange={handleInput}
                                                        value={addres}
                                                    ></TextField>
                                                </div>

                                                <div className="newPrice">
                                                    <p>Số điện thoại :</p>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        name="phone"
                                                        onChange={handleInput}
                                                        value={phone}
                                                    ></TextField>
                                                </div>
                                            </div>

                                            <p>Quyền :</p>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                className="description"
                                                name="roles"
                                                onChange={handleInput}
                                                value={roles}
                                            ></TextField>

                                            <div className="img">
                                                <div className="img1">
                                                    <p>Ảnh1 :</p>
                                                    <TextField
                                                        type="file"
                                                        name="avt"
                                                        onChange={handleInput}
                                                        value={avt}
                                                    ></TextField>
                                                </div>
                                            </div>

                                            {/*  tự css nhé */}
                                            <button onClick={handelSubmit}>
                                                <a className="btn3" href="/admin-user">
                                                    Thêm
                                                </a>
                                            </button>
                                        </form>
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

export default AddUser;
