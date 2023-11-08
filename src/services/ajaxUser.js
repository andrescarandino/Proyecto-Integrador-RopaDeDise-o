import axios from 'axios';

export const getUsers = async () =>
	axios.get('baseURL/usuarios').then((response) => response.data);

export const getUser = async ({ id }) =>
	axios.get(`baseURL/usuarios/${id}`).then((response) => response.data);

export const createUser = async ({ user }) =>
	axios.post('baseURL/usuarios', { user }).then((response) => response.data);

export const updateUser = async ({ user }) =>
	axios.put('baseURL/usuarios', { user }).then((response) => response.data);

export const deleteUser = async ({ id }) =>
	axios.delete(`baseURL/usuarios/${id}`).then((response) => response.data);
