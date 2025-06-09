import connection from "./Config/db.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./Routes/userRoutes.js";
import productRouter from "./Routes/productRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
import cartRouter from "./Routes/cartRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//Basic Route
app.get("/", (req, res) => {
  res.send("Welcome to the Products backend API");
});

//Api Routes
app.use("/auth", authRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);
app.use("/carts", cartRouter);

// Global error handler (for learning)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error.", error: err.message });
});

const PORT = process.env.PORT || 8080;

//connect to Db first, then start server
connection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1); // Exit if DB connection fails
  });
