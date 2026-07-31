import api from "../api/flowerApi";

export const getFlowers = async (params = {}) => {
  const response = await api.get("/flowers/", { params });
  return response.data;
};

export const getFeaturedFlowers = async () => {
  return getFlowers({ featured: true });
};

export const getSaleFlowers = async () => {
  return getFlowers({ sale: true });
};

export const getFlowersByCategory = async (category) => {
  return getFlowers({ category });
};

export const searchFlowers = async (search) => {
  return getFlowers({ search });
};

export const getFlower = async (slug) => {
  const response = await api.get(`/flowers/${slug}/`);
  return response.data;
};
export const createOrder = async (orderData) => {
  const response = await api.post("/orders/", orderData);
  return response.data;
};