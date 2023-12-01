import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import cookieParser from 'cookie-parser';
import { errorHandler, notFound } from './middlewares/errorMiddleware';
import productRouter from './routes/productRoutes';
import userRouter from './routes/userRoutes';

dotenv.config();
connectDB();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://127.0.0.1:3000',
  }),
);
app.use(cookieParser());

app.get('/', (req, res) => {
  console.log();
  res.send('API is running...');
});

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));

process.on('unhandledRejection', (reason) => {
  console.error('unhandledRejection', reason);
});

process.on('uncaughtException', (err) => {
  console.error('UncaughtException:', err.message);
  console.error(err);
  process.exit(1);
});
