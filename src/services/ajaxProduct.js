import axios from 'axios';

export const getProducts = async () =>
	axios.get('baseURL/productos').then((response) => response.data);

export const getProduct = async ({ id }) =>
	axios.get(`baseURL/productos/${id}`).then((response) => response.data);

export const createProduct = async ({ product }) =>
	axios
		.post('baseURL/productos', { product })
		.then((response) => response.data);

export const updateProduct = async ({ product }) =>
	axios
		.put('baseURL/productos', { product })
		.then((response) => response.data);

export const deleteProduct = async ({ id }) =>
	axios.delete(`baseURL/productos/${id}`).then((response) => response.data);
