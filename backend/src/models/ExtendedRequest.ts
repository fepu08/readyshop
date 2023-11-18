import { Request } from 'express';
import { UserDocument } from './UserDocument';

export interface ExtendedRequest extends Request {
  user?: Omit<UserDocument, 'password'>;
}
