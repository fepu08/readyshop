import { ProductType } from './Product';

export type CartItem = ProductType & { qty: number };
