import mongoose, { Model } from 'mongoose';
import { reviewSchema } from './reviewSchema';
import { ProductDocument } from '../models/ProductDocument';

interface ProductModel extends Model<ProductDocument> {}
const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    review: [reviewSchema],
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true },
);

const Product = mongoose.model<ProductDocument, ProductModel>('Product', productSchema);

export default Product;
