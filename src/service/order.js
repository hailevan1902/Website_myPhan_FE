import axiosClient from "../lib/axios";

const orderService = {

    createorder: async (data) => {
        const res = await axiosClient.post("/order", data);
        return res.data;
    },

    getAllOrder: async () => {
        const res = await axiosClient.get("/order");
        return res.data;
    },

    getOrder: async (id) => {
        const res = await axiosClient.get(`/order/${id}`);
        return res.data;
    },

};

export default orderService;
