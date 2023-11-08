import mongoose from 'mongoose';
import ShippingAddressDocument from './ShippingAddressDocument';

export interface OrderDocument extends Document {
  user: mongoose.Types.ObjectId;
  orderItems: [
    {
      name: string;
      qty: number;
      image: string;
      price: number;
      product: mongoose.Types.ObjectId;
    },
  ];
  shippingAddress: ShippingAddressDocument;
  paymentMethod: string;
  paymentResult: {
    id: string;
    status: string;
    update_time: string;
    email_address: string;
  };
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt?: Date;
  isDelivered: boolean;
  deliveredAt?: Date;
}
