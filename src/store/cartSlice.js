import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	numberOfItems: 0,
	totalPrice: 0,
	cartItems: [],
};
const countItems = (ci) => {
	let quant = ci.reduce((acc, e) => {
		acc += e.quantity;
		return acc;
	}, 0);

	let totPrice = ci.reduce((acc, e) => {
		acc += e.quantity * parseInt(e.price);
		return acc;
	}, 0);

	return [quant, totPrice];
};

const cartSlice = createSlice({
	initialState,
	name: "cartSlice",
	reducers: {
		getCart(state, action) {
			state.cartItems = action.payload.items || [];
			const [qt, tp] = countItems(state.cartItems);
			state.numberOfItems = qt;
			state.totalPrice = tp;
		},
		addToCart(state, action) {
			const id = action.payload.product.id;
			const indx = state.cartItems.findIndex((e) => e.id === id);
			if (indx === -1) {
				state.cartItems.push({ ...action.payload.product, quantity: 1 });
				const [qt, tp] = countItems(state.cartItems);
				state.numberOfItems = qt;
				state.totalPrice = tp;
				return state;
			} else {
				state.cartItems[indx].quantity += 1;
				const [qt, tp] = countItems(state.cartItems);
				state.numberOfItems = qt;
				state.totalPrice = tp;
				return state;
			}
		},
		removeFromCart(state, action) {
			const id = action.payload.id;
			const indx = state.cartItems.findIndex((e) => e.id === id);
			if (indx === -1) {
				return state;
			} else {
				state.cartItems = state.cartItems.filter((e) => e.id !== id);
				const [qt, tp] = countItems(state.cartItems);
				state.numberOfItems = qt;
				state.totalPrice = tp;
			}
		},
		clearCart(state) {
			state.cartItems = [];
			state.numberOfItems = 0;
			state.totalPrice = 0;
		},
	},
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
