import express from 'express';
import dotenv from 'dotenv';
import products from './data/products';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  res.json(products.find((p) => p._id === req.params.id));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
