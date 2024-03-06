import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
			console.log("Action: ", action);
			console.log("State: ", state);
			state.items.push(action.payload);
		},
		removeItem: (state) => {
			state.items.pop();
		},
		clearCart: (state) => {
			state.items.splice(0);
		},
	},
});

//  cartSlice example value
// cartSlice = {actions: {}, reducer}

console.log("CART SLICE: ", cartSlice);

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
