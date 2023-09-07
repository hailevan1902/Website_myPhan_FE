import axios from "axios";

const getTokenFromLS = () => {
  const access = localStorage.getItem("accessToken");
  return access;
};

const instance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const accessToken = getTokenFromLS();
    const headers = {
      ...config.headers,
    };
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }
    return { ...config, headers };
  },
  (error) => Promise.reject(error),
);

export default instance;