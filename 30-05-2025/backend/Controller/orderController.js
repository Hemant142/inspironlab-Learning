import express from 'express';
import Order from '../Model/orderModel.js';
import Product from '../Model/productModel.js';

// Place this middleware in your authMiddleware.js and use it to get req.user._id
// For now, assuming req.user._id is available after authentication

export const placeOrder = async (req, res) => {
    try {
        const userId = req.user._id;
        const { products } = req.body; // [{ product: productId, quantity: number }]

        console.log("User ID:", userId);
        console.log("Products:", products);
        if (!products || !Array.isArray(products) || products.length === 0) {
            return res.status(400).json({ message: "No products to order." });
        }

        // Optionally, validate product IDs and quantities
        for (const item of products) {
            const prod = await Product.findById(item.product);
            if (!prod) {
                return res.status(404).json({ message: `Product not found: ${item.product}` });
            }
        }

        const order = new Order({
            user: userId,
            products: products.map(item => ({
                product: item.product,
                quantity: item.quantity,
                purchasedAt: new Date()
            })),
            orderDate: new Date()
        });

        await order.save();
        return res.status(201).json({ message: "Order placed successfully.", order });
    } catch (error) {
        return res.status(500).json({ message: "Server error.", error: error.message });
    }
};

export const getMyOrders = async (req, res) => {
    try {
        const userId = req.user._id;
        const orders = await Order.find({ user: userId }).populate('products.product');
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ message: "Server error.", error: error.message });
    }
};
