import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import productRoutes from './routes/productRoutes';
import { errorHandler, notFound } from './middlewares/errorMiddleware';

dotenv.config();
connectDB();
const port = process.env.PORT || 5000;

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.get('/', (req, res) => {
  console.log();
  res.send('API is running...');
});

app.use('/api/products', productRoutes);

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
