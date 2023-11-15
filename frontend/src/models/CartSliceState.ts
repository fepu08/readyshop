import { CartItem } from './CartItem';

type CartSliceState = {
  cartItems: CartItem[];
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
};

export default CartSliceState;
