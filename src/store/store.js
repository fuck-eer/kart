import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
const store = configureStore({
	reducer: { productSlice, cartSlice },
});

export default store;
