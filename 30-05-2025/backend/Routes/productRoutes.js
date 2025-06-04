import express from 'express';
import authMiddleware from '../Middleware/authMiddleware.js';
import { addProduct, getProductById, getProducts } from '../Controller/productController.js';

const productRouter= express.Router();

productRouter.post("/",authMiddleware, addProduct);
productRouter.get("/", getProducts);
productRouter.get("/:id", authMiddleware, getProductById);

export default productRouter;
