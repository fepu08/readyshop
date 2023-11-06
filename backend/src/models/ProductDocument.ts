import mongoose from 'mongoose';
import { ReviewDocument } from './ReviewDocument';

export interface ProductDocument extends Document {
  user: mongoose.Types.ObjectId;
  name: string;
  image: string;
  description?: string;
  category?: string;
  price: number;
  countInStock: number;
  rating: number;
  reviews: ReviewDocument[];
  numReviews: number;
}
