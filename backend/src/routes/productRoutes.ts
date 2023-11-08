import express from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import Product from '../schemas/productSchema';

const productRouter = express.Router();

productRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  }),
);

productRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error('Resource not found');
    }
    res.json(product);
  }),
);

export default productRouter;
