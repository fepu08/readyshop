import express from 'express';
import ProductController from '../controllers/productController';

const productRouter = express.Router();

productRouter.get('/', ProductController.getProducts);
productRouter.get('/:id', ProductController.getProductById);

export default productRouter;
