import mongoose, { Model } from 'mongoose';
import { ReviewDocument } from '../models/ReviewDocument';

interface ReviewModel extends Model<ReviewDocument> {}
export const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Review = mongoose.model<ReviewDocument, ReviewModel>('Review', reviewSchema);

export default Review;
