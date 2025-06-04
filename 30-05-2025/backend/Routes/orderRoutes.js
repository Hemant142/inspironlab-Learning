import express from 'express';
import { placeOrder, getMyOrders } from '../Controller/orderController.js';
import authMiddleware from '../Middleware/authMiddleware.js';

const router = express.Router();

// Place order (user must be logged in)
router.post('/place', authMiddleware, placeOrder);

// Get user's orders (user must be logged in)
router.get('/my', authMiddleware, getMyOrders);

export default router;
