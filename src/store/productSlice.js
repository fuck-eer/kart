import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
};

const productSlice = createSlice({
	initialState,
	name: "productSlice",
	reducers: {
		setProducts(state, action) {
			state.products = action.payload.products;
		},
	},
});

export default productSlice.reducer;
export const productActions = productSlice.actions;
