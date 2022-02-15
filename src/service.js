import axios from "axios";

const baseUrl =
	"https://firedemo-simple-default-rtdb.asia-southeast1.firebasedatabase.app";

export const getAllProducts = () => {
	return axios.get(`${baseUrl}/products.json`);
};

export const getCartItems = () => {
	return axios.get(`${baseUrl}/cart.json`);
};

export const addincart = (product) => {
	return axios.get(`${baseUrl}/cart.json`).then((e) => {
		const items = e.data || [];
		const indx = items.findIndex((e) => e.id === product.id);
		if (indx === -1) {
			items.push({ ...product, quantity: 1 });
		} else {
			items[indx].quantity += 1;
		}
		return axios.put(`${baseUrl}/cart.json`, items);
	});
};
export const delfromcart = (id) => {
	return axios.get(`${baseUrl}/cart.json`).then((e) => {
		let items = e.data || [];
		items = items.filter((e) => e.id !== id);
		return axios.put(`${baseUrl}/cart.json`, items);
	});
};
export const clearCart = () => {
	return axios.put(`${baseUrl}/cart.json`, []);
};
