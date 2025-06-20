import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
            quantity: { type: Number, required: true },
            purchasedAt: { type: Date, default: Date.now }
        }
    ],
    orderDate: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
