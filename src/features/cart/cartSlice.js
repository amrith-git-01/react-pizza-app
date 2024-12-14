import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	// cart: [
	// 	{
	// 		pizzaId: 1,
	// 		name: "Margherita",
	// 		unitPrice: 15,
	// 		quantity: 2,
	// 		totalPrice: 30,
	// 	},
	// ],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action) {
			state.cart.push(action.payload);
		},
		deleteItem(state, action) {
			state.cart = state.cart.filter((item) => action.payload !== item.pizzaId);
		},
		increaseItemQuantity(state, action) {
			const item = state.cart.find((item) => item.pizzaId === action.payload);
			item.quantity++;
			item.totalPrice = item.unitPrice * item.quantity;
		},
		decreaseItemQuantity(state, action) {
			const item = state.cart.find((item) => item.pizzaId === action.payload);
			item.quantity--;
			item.totalPrice = item.unitPrice * item.quantity;

			if (item.quantity === 0) {
				cartSlice.caseReducers.deleteItem(state, action);
			}
		},
		clearCart(state) {
			state.cart = [];
		},
	},
});

export const {
	addItem,
	decreaseItemQuantity,
	deleteItem,
	clearCart,
	increaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
	state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
	state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantityById = (id) => {
	return (state) =>
		state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
};
