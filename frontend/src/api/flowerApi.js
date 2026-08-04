import axios from "axios";

const api = axios.create({
  baseURL: "https://flower-shop-hl1q.onrender.com",
});

export default api;