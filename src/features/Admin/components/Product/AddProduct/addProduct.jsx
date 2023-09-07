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
import React, { useState } from "react";
import productService from "../../../../../service/product";



function AdminAddProduct(props) {

    const initalState = {
        productName: "",
        productCode: "",
        description: "",
        price: "",
        oldPrice: "",
        img1: "",
        img2: "",
        img3: "",
        status: "",
        rate: "",
        discount: ""
    };

    const [state, setState] = useState(initalState);

    const {
        productName,
        productCode,
        description,
        price,
        oldPrice,
        img1,
        img2,
        img3,
        status,
        rate,
        discount
    } = state;

    const addProduct = async (state) => {
        try {
            const response = await productService.createProduct(state);
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
        addProduct(state);
        // e.preventDefault();
    }


    const [selectedImage, setSelectedImage] = useState("");

    const handleImageUpload = (e) => {

        const file = e.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
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

                        <li>
                            <AccountCircle></AccountCircle>
                            <a href="/admin-user">Người dùng</a>
                        </li>

                        <li style={{ backgroundColor: "#cccccc5c", borderRadius: "10px" }}>
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
                            <h1>Thêm sản phẩm mới</h1>
                        </div>

                        <div className="detail-website">
                            <div className="admin-detail-product">
                                <Container className="container">
                                    <div className="main">
                                        <form id="form">
                                            <div className="code__name">
                                                <div className="code">
                                                    <p>Mã sản phẩm :</p>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        name="productCode"
                                                        onChange={handleInput}
                                                        value={productCode}
                                                    ></TextField>
                                                </div>

                                                <div className="name">
                                                    <p>Tên sản phẩm :</p>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        name="productName"
                                                        onChange={handleInput}
                                                        value={productName}
                                                    >
                                                    </TextField>
                                                </div>
                                            </div>

                                            <div className="price">
                                                <div className="oldPrice">
                                                    <p>Giá cũ :</p>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        name="oldPrice"
                                                        onChange={handleInput}
                                                        value={oldPrice}
                                                    ></TextField>
                                                </div>

                                                <div className="newPrice">
                                                    <p>Giá mới :</p>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        name="price"
                                                        onChange={handleInput}
                                                        value={price}
                                                    ></TextField>
                                                </div>
                                            </div>

                                            <p>Mô tả :</p>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                className="description"
                                                name="description"
                                                onChange={handleInput}
                                                value={description}
                                            ></TextField>

                                            <div className="img">
                                                <div className="img1">
                                                    <p>Ảnh1 :</p>

                                                    <input type="file" onChange={handleImageUpload} />

                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        className="description"
                                                        onChange={handleInput}
                                                        name="img1"
                                                        value={
                                                            selectedImage
                                                        }
                                                    ></TextField>

                                                </div>

                                                <div className="img2">
                                                    <p>Ảnh2 :</p>
                                                    <TextField
                                                        type="file"
                                                        name="img2"
                                                        onChange={handleInput}
                                                        value={img2}
                                                    ></TextField>
                                                </div>

                                                <div className="img3">
                                                    <p>Ảnh3 :</p>
                                                    <TextField
                                                        type="file"
                                                        name="img3"
                                                        onChange={handleInput}
                                                        value={img3}
                                                    ></TextField>
                                                </div>

                                                {/* <div className="img3">
                                                    <p>Ảnh1 :</p>
                                                    <TextField
                                                        type="file"
                                                        name="img1"
                                                        onChange={handleInput}
                                                        value={img1}
                                                    ></TextField>
                                                </div> */}
                                            </div>

                                            <div className="status__discount__rate">
                                                <div className="status">
                                                    <p>Trạng thái :</p>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        name="status"
                                                        onChange={handleInput}
                                                        value={status}
                                                    ></TextField>
                                                </div>
                                                <div className="discount">
                                                    <p>Giảm giá :</p>
                                                    <TextField fullWidth size="small" name="discount"
                                                        onChange={handleInput}
                                                        value={discount}></TextField>
                                                </div>
                                                <div className="rate">
                                                    <p>Đánh giá :</p>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        name="rate"
                                                        onChange={handleInput}
                                                        value={rate}
                                                    ></TextField>
                                                </div>
                                            </div>
                                            {/*  tự css nhé */}
                                            <button style={{ marginTop: '20px', padding: '5px 10px' }} onClick={handelSubmit}>
                                                <a
                                                    className="btn3"
                                                    href="/admin-product"
                                                >
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

export default AdminAddProduct;
