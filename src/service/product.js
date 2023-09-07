import axiosClient from "../lib/axios";

const productService = {
    createProduct: async (data) => {
        const res = await axiosClient.post("/product", data);
        return res;
    },
    updateProduct: async (id, data) => {
        const res = await axiosClient.patch(`/product/${id}`, data);
        return res;
    },

    getAllProduct: async () => {
        const res = await axiosClient.get("/product");
        return res.data;
    },

    getProduct: async (id) => {
        const res = await axiosClient.get(`/product/${id}`);
        return res.data;
    },

    deleteProduct: async (id) => {
        const res = await axiosClient.delete(`/product/${id}`);
        return res;
    },


};

export default productService;
