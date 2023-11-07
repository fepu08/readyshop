import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import productRoutes from './routes/productRoutes';

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
  res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
