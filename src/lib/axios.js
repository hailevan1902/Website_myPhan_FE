import axios from "axios";

import { getLocalStorage } from "../util/local-storage";

const axiosClient = axios.create({
  // TODO: replace with env var url
  baseURL: "http://localhost:5000",
  responseType: "json",
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

axiosClient.interceptors.request.use((request) => {
  const accessToken = getLocalStorage("access-token");
  let accessHeader = "";
  if (accessToken) {
    accessHeader = `Bearer ${accessToken}`;
    request.headers.Authorization = accessHeader;
  }
  return request;
});

export default axiosClient;