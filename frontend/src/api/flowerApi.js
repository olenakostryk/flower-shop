import axios from "axios";

const api = axios.create({
  baseURL: "https://flower-shop-97cd.onrender.com/api",
});

export default api;