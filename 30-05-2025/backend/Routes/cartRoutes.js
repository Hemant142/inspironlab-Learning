

import express from "express";
import authMiddleware from "../Middleware/authMiddleware.js";
import { cartAdded, deleteCarts, getMyCarts, updateCartsQuantity } from "../Controller/cartController.js";

const cartRouter= express.Router();
cartRouter.post('/place',authMiddleware,cartAdded)

cartRouter.get('/my',authMiddleware,getMyCarts)
cartRouter.patch("/update/:id",authMiddleware,updateCartsQuantity)
cartRouter.delete("/delete/:id",authMiddleware,deleteCarts)

export default cartRouter