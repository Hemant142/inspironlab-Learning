import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Public/Login/Login";
import Signup from "../Pages/Public/Signup/Signup";
import Dashboard from "../Pages/Public/Dashboard/Dashboard";
import ProductPage from "../Pages/Public/Product/ProductPage";
import SingleProductPage from "../Pages/Private/User/SingleProduct/SingleProductPage";
import PrivateRoutes from "./PrivateRoutes";
import Cart from "../Pages/Private/User/Cart/Cart";
import Order from "../Pages/Private/User/Orders/Order";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<ProductPage />} />
        <Route
          path="/product/:id"
          element={
            <PrivateRoutes>
              <SingleProductPage />
            </PrivateRoutes>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoutes>
              <Cart />
            </PrivateRoutes>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoutes>
              <Order />
            </PrivateRoutes>
          }
        />
      </Routes>
    </div>
  );
}
