import { Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import Product from '../schemas/productSchema';

export default class ProductController {
  /**
   * @desc 	Fetch all products
   * @route GET /api/products
   * @access Public
   */
  static getProducts = asyncHandler(async (req: Request, res: Response) => {
    const products = await Product.find({});
    res.json(products);
  });

  /**
   * @desc 	Fetch product by id
   * @route GET /api/products/:id
   * @access Public
   */
  static getProductById = asyncHandler(async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error('Resource not found');
    }
    res.json(product);
  });
}
