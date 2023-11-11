import { Draft } from '@reduxjs/toolkit';
import { SHIPPING_PRICE_IN_DOLLARS, TAX } from '../constants';
import { getFormattedNumber } from './numberUtils';
import CartSliceState from '../models/CartSliceState';

export function updateCart(state: Draft<CartSliceState>) {
  state.itemsPrice = getFormattedNumber(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));
  // Apply any shipping policy, in this case it will be: over $100 is free otherwise $10
  state.shippingPrice = getFormattedNumber(state.itemsPrice > 100 ? 0 : SHIPPING_PRICE_IN_DOLLARS);
  state.taxPrice = getFormattedNumber(state.itemsPrice * TAX);
  state.totalPrice = getFormattedNumber(state.itemsPrice + state.shippingPrice + state.taxPrice);
}
