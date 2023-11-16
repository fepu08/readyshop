import mongoose, { Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { UserDocument } from '../models/UserDocument';

interface UserModel extends Model<UserDocument> {}
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

userSchema.methods.matchPassword = async function (inputPw: string): Promise<boolean> {
  return await bcrypt.compare(inputPw, this.password);
};

const User = mongoose.model<UserDocument, UserModel>('User', userSchema);

export default User;
