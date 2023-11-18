import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler';
import { NextFunction, Request, Response } from 'express';
import User from '../schemas/userSchema';
import { MissingEnvVarError } from '../errors/MissingEnvVarError';
import { JwtAuthToken } from '../models/JwtToken';
import { NotAuthorizedError } from '../errors/NotAuthorizedError';
import { ExtendedRequest } from '../models/ExtendedRequest';
import { UserDocument } from '../models/UserDocument';
import { ForbiddenError } from '../errors/ForbiddenError';

export const protect = asyncHandler(async (req: ExtendedRequest, res: Response, next: NextFunction) => {
  let token;
  if (!process.env.JWT_SECRET) {
    throw new MissingEnvVarError('JWT Secret is missing');
  }

  token = req.cookies.jwt;
  if (!token) {
    throw401(res, 'Not authorized, no token');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtAuthToken;
    if (!decoded.userId) {
      throw new Error('Missing field in token');
    }

    req.user = (await User.findById(decoded.userId).select('-password')) as UserDocument;

    next();
  } catch (error) {
    res.status(401);
    throw new NotAuthorizedError();
  }
});

export const admin = (req: ExtendedRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    throw401(res);
  } else if (!req.user.isAdmin) {
    res.status(403);
    throw new ForbiddenError();
  }
  next();
};

function throw401(res: Response, msg?: string) {
  res.status(401);
  throw new NotAuthorizedError(msg);
}
