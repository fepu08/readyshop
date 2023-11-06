import mongoose from 'mongoose';
import { ProductDocument } from './ProductDocument';
import ShippingAddressDocument from './ShippingAddressDocument';

export interface OrderDocument extends Document {
  user: mongoose.Types.ObjectId;
  orderItems: [
    {
      name: string;
      qty: number;
      image: string;
      price: number;
      product: ProductDocument;
    },
  ];
  shippingAddress: ShippingAddressDocument;
  paymentMethod: string;
  paymentResult: string;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt?: Date;
  isDelivered: boolean;
  deliveredAt?: Date;
}
