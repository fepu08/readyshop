import { createSlice } from '@reduxjs/toolkit';
import CartSliceState from '../models/CartSliceState';
import { getFormattedNumber } from '../utils';
import { SHIPPING_PRICE_IN_DOLLARS, TAX } from '../constants';

const initialState: CartSliceState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart')!)
  : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x._id === item._id);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) => (x._id === existItem._id ? item : x));
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      state.itemsPrice = getFormattedNumber(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));
      // Apply any shipping policy, in this case it will be: over $100 is free otherwise $10
      state.shippingPrice = getFormattedNumber(state.itemsPrice > 100 ? 0 : SHIPPING_PRICE_IN_DOLLARS);
      state.taxPrice = getFormattedNumber(state.itemsPrice * TAX);
      state.totalPrice = getFormattedNumber(state.itemsPrice + state.shippingPrice + state.taxPrice);

      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
