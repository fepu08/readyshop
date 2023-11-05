import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import products from './data/products';

dotenv.config();
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

app.get('/api/products', (req, res) => {
  console.log('Get Products');
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  console.log(`Get Product with id ${req.params.id}`);
  res.json(products.find((p) => p._id === req.params.id));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
