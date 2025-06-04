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


app.get("/", (req, res) => {
    res.send("Welcome to the Products backend API");
});
app.use("/auth",authRouter)
app.use("/products", productRouter)
app.use("/orders", orderRouter)
app.use("/carts",cartRouter)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    connection();
    console.log(`Server is running on port ${PORT}`);
});
