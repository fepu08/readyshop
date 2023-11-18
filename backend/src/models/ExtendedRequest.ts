import { Request } from 'express';
import { UserDocument } from './UserDocument';
import { Types } from 'mongoose';

export interface ExtendedRequest extends Request {
  user?: Omit<UserDocument, 'password'> & { _id: Types.ObjectId };
}
