import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    about: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true },
    avatar: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

export default Product;