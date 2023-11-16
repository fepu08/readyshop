import mongoose from 'mongoose';

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  matchPassword: (inputPw: string) => Promise<boolean>;
}
