import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Created a new store
const appStore = configureStore({
	reducer: {
		carts: cartReducer,
	},
});

export default appStore;
