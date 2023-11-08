import { NextFunction, Request, Response } from 'express';
import { CastError } from 'mongoose';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === 'CastError' && (err as CastError).kind === 'ObjectId') {
    message = 'Resource not found';
    statusCode = 404;
  }

  logRequestError(err, req);
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? '🤖' : err.stack,
  });
};

const logRequestError = (error: Error, req: Request) => {
  const { method, path, params, query, body } = req;
  const message = `[${method}] ${path} - params: ${JSON.stringify(params)}, query: ${JSON.stringify(
    query,
  )}, body: ${JSON.stringify(body)}, error: ${JSON.stringify(error.message)}`;
  console.error(message);
};
