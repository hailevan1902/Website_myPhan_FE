import axiosClient from "../lib/axios";

const userService = {
    createUser: async (data) => {
        const res = await axiosClient.post("/user", data);
        return res;
    },

    updateUser: async (id, data) => {
        const res = await axiosClient.patch(`/user/${id}`, data);
        return res;
    },

    getAllUser: async () => {
        const res = await axiosClient.get("/user");
        return res.data;
    },

    getUser: async (id) => {
        const res = await axiosClient.get(`/user/${id}`);
        return res.data;
    },
    deleteUser: async (id) => {
        const res = await axiosClient.delete(`/user/${id}`);
        return res;
    },


};

export default userService;