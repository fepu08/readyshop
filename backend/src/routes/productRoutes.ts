import express from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import Product from '../schemas/productSchema';

const router = express.Router();

router.get(
  '/api/products',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  }),
);

router.get(
  '/api/products/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  }),
);

export default router;
