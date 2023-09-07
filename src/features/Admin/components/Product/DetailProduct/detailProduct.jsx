import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../../../../../service/product";
import {
    Container,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
} from "@mui/material";
import "./styles.scss";
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

function AdminDetailProduct(props) {
    const [product, setProduct] = useState();
    const [isUpdate, setIsUpdate] = useState(true);

    // const params = useParams();
    const { id } = useParams();

    const handleInput = (e) => {
        let { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const updateProduct = async () => {
        try {
            const response = await productService.updateProduct(id, product);
            console.log("response", response);
        } catch (error) {
            console.log(error);
        }
    };

    const handelSubmit = () => {
        updateProduct(id, product);
        console.log(product);
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const responseData = await productService.getProduct(id);
                setProduct(responseData);
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
                            <h1>Chi tiết sản phẩm</h1>
                        </div>

                        <div className="detail-website">
                            <div className="admin-detail-product">
                                <Container className="container">
                                    <div className="main">
                                        <form action="">
                                            <div className="code__name">
                                                <div className="code">
                                                    <p>Mã sản phẩm :</p>
                                                    <TextField
                                                        disabled={isUpdate}
                                                        value={product?.productCode}
                                                        fullWidth
                                                        size="small"
                                                        name="productCode"
                                                        onChange={handleInput}
                                                    ></TextField>
                                                </div>

                                                <div className="name">
                                                    <p>Tên sản phẩm :</p>
                                                    <TextField
                                                        disabled={isUpdate}
                                                        value={product?.productName}
                                                        fullWidth
                                                        size="small"
                                                        name="productName"
                                                        onChange={handleInput}
                                                    ></TextField>
                                                </div>
                                            </div>

                                            <div className="price">
                                                <div className="oldPrice">
                                                    <p>Giá cũ :</p>
                                                    <TextField
                                                        disabled={isUpdate}
                                                        value={product?.oldPrice}
                                                        fullWidth
                                                        size="small"
                                                        name="oldPrice"
                                                        onChange={handleInput}
                                                    ></TextField>
                                                </div>

                                                <div className="newPrice">
                                                    <p>Giá mới :</p>
                                                    <TextField
                                                        disabled={isUpdate}
                                                        value={product?.price}
                                                        fullWidth
                                                        size="small"
                                                        name="price"
                                                        onChange={handleInput}
                                                    ></TextField>
                                                </div>
                                            </div>

                                            <p>Mô tả :</p>
                                            <TextField
                                                disabled={isUpdate}
                                                value={product?.description}
                                                fullWidth
                                                size="small"
                                                className="description"
                                                name="description"
                                                onChange={handleInput}
                                            ></TextField>

                                            <div className="img">
                                                <div className="img1">
                                                    <p>Ảnh1 :</p>
                                                    <TextField
                                                        type="file"
                                                        name="img1"
                                                        onChange={handleInput}
                                                    ></TextField>
                                                </div>

                                                <div className="img2">
                                                    <p>Ảnh2 :</p>
                                                    <TextField
                                                        type="file"
                                                        name="img2"
                                                        onChange={handleInput}
                                                    ></TextField>
                                                </div>

                                                <div className="img3">
                                                    <p>Ảnh3 :</p>
                                                    <TextField
                                                        type="file"
                                                        name="img3"
                                                        onChange={handleInput}
                                                    ></TextField>
                                                </div>
                                            </div>

                                            <div className="status__discount__rate">
                                                <div className="status">
                                                    <p>Trạng thái :</p>
                                                    <TextField
                                                        disabled={isUpdate}
                                                        fullWidth
                                                        value={product?.status}
                                                        size="small"
                                                        name="status"
                                                        onChange={handleInput}
                                                    ></TextField>
                                                </div>

                                                <div className="discount">
                                                    <p>Giảm giá :</p>
                                                    <TextField
                                                        disabled={isUpdate}
                                                        fullWidth
                                                        value={product?.discount}
                                                        size="small"
                                                        name="discount"
                                                        onChange={handleInput}
                                                    ></TextField>
                                                </div>

                                                <div className="rate">
                                                    <p>Đánh giá :</p>
                                                    <TextField
                                                        disabled={isUpdate}
                                                        fullWidth
                                                        value={product?.rate}
                                                        size="small"
                                                        name="rate"
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
                                                href="/admin-product"
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

export default AdminDetailProduct;
