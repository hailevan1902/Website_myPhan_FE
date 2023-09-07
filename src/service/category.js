import axiosClient from "../lib/axios";

const categoryService = {
    createCategory: async (data) => {
        const res = await axiosClient.post("/category", data);
        return res.data;
    },

    getAllCategory: async () => {
        const res = await axiosClient.get("/category");
        return res.data;
    },

};

export default categoryService;
