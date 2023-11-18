import { JwtPayload } from 'jsonwebtoken';
import { Types } from 'mongoose';

export type JwtAuthBody = {
  userId: Types.ObjectId;
};

export type JwtAuthToken = JwtPayload & JwtAuthBody;
