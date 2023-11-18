import { Response } from 'express';
import jwt from 'jsonwebtoken';
import { MissingEnvVarError } from '../errors/MissingEnvVarError';
import { Types } from 'mongoose';

export function setUpJwtCookie(userId: Types.ObjectId, res: Response) {
  if (!process.env.JWT_SECRET) {
    throw new MissingEnvVarError('Missing JWT secret');
  }

  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.NODE_ENV === 'production' ? '1h' : '30d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: process.env.NODE_ENV !== 'production' ? 30 * 24 * 60 * 1000 : 60000,
  });
}
