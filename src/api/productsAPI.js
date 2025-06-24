import axios from "axios";

const BASE_URL = "http://localhost:3001/products";

export const fetchProducts = () => axios.get(BASE_URL);

export const createProduct = (product) => axios.post(BASE_URL, product);

export const updateProduct = (product) => axios.put(`${BASE_URL}/${product.id}`, product);

export const removeProduct = (id) => axios.delete(`${BASE_URL}/${id}`);
