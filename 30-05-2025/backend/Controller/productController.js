import express from "express";
import Product from "../Model/productModel.js";

export const addProduct = async (req, res) => {
  try {
    const { name, price, about, category, brand, rating, avatar } = req.body;

    const newProduct = new Product({
      name,
      price,
      about,
      category,
      brand,
      rating,
      avatar,
    });

    await newProduct.save();
    return res
      .status(201)
      .json({ message: "Product added successfully.", product: newProduct });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error.", error: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    // Get page and limit from query parameters defaulting to 1 and 10
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const productLength = await Product.countDocuments();
    // console.log(productLength, "productLength");
    const products = await Product.find().skip(skip).limit(limit);
    return res
      .status(200)
      .json({ products, totalProductLength: productLength, page, limit });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error.", error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error.", error: error.message });
  }
};
