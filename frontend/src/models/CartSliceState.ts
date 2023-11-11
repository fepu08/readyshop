import { ProductType } from './Product';

type CartSliceState = {
  cartItems: Array<ProductType & { qty: number }>;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
};

export default CartSliceState;
