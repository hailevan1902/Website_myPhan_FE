import axiosClient from "../lib/axios";

const newsService = {

    createnews: async (data) => {
        const res = await axiosClient.post("/news", data);
        return res.data;
    },

    getAllNews: async () => {
        const res = await axiosClient.get("/news");
        return res.data;
    },

};

export default newsService;
