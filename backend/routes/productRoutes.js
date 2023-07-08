import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
const router = express.Router();
import Product from '../models/productModel.js';

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    if (products) {
      res.json(products);
    }
    res.status(404).json({ message: 'Products not available' });
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    }
    res.status(404).json({ message: 'Product not found' });
  })
);

export default router;
