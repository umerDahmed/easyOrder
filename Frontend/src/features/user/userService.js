import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const register = async (userData) => {
	const response = await axios.post(`${base_url}user/register`, userData);
	if (response.data) {
		return response.data;
	}
};

const login = async (userData) => {
	const response = await axios.post(`${base_url}user/login`, userData);

	if (response.data) {
		localStorage.setItem("customer", JSON.stringify(response.data));
	}
	return response.data;
};

const addToCart = async (cartData) => {
	const response = await axios.post(`${base_url}user/cart`, cartData, config);
	if (response.data) {
		return response.data;
	}
};

const getCart = async (data) => {
	const response = await axios.get(`${base_url}user/cart`, data);
	if (response.data) {
		return response.data;
	}
};

const removeProductFromCart = async (data) => {
	const response = await axios.delete(
		`${base_url}user/delete-product-cart/${data.id}`,

		data.config2
	);
	if (response.data) {
		return response.data;
	}
};

const updateProductFromCart = async (cartDetail) => {
	const response = await axios.delete(
		`${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`,
		config
	);
	if (response.data) {
		return response.data;
	}
};

const createOrder = async (orderDetail) => {
	const response = await axios.post(
		`${base_url}user/cart/create-order/`,
		orderDetail,
		config
	);
	console.log("res", response);
	if (response) {
		return orderDetail;
	}
};

const getUserOrders = async () => {
	const response = await axios.get(`${base_url}user/getmyorders`, config);

	if (response.data) {
		return response.data;
	}
};

const updateUser = async (data) => {
	const response = await axios.put(
		`${base_url}user/edit-user`,
		data.data,
		data.config2,
		config
	);

	if (response.data) {
		return response.data;
	}
};

const emptyCart = async (data) => {
	const response = await axios.delete(`${base_url}user/empty-cart`, data);

	if (response.data) {
		return response.data;
	}
};

export const authService = {
	register,
	login,
	addToCart,
	getCart,
	removeProductFromCart,
	updateProductFromCart,
	createOrder,
	getUserOrders,
	updateUser,
	emptyCart,
};
