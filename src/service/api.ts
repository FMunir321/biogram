import axios from "axios";

const api = axios.create({
  baseURL: "http://3.111.146.115:5000",
  // baseURL: "http://localhost:5000",
  withCredentials: true,
});

export default api;
