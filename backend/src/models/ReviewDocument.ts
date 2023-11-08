import mongoose from 'mongoose';

export interface ReviewDocument extends Document {
  user: mongoose.Types.ObjectId;
  name: string;
  rating: string;
  comment: string;
}
