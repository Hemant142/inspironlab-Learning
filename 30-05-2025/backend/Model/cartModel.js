import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "User", require: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require: true,
  },
  quantity: { type: Number },
  cartDate: { type: Date, default: Date.now()},
});

const Cart= mongoose.model("Cart",cartSchema)
export default Cart