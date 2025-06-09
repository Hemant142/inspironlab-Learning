import "./Dashboard.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchProducts,
  getMyOrder,
} from "../../../Store/features/Product/productThunks";
import type { AppDispatch, RootState } from "../../../Store/store";

export default function Dashboard() {
  const productLength = useSelector(
    (state: { products: { productLength: number } }) =>
      state.products?.productLength ?? 0
  );

  const orderedProducts = useSelector(
    (state: RootState) => state.products?.orderedProducts ?? []
  );

  const token = useSelector((state: RootState) => state.auth.token);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  console.log(token, "token");
  useEffect(() => {
    dispatch(fetchProducts({ page: 1, limit: 10 }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMyOrder({ token }));
  }, [dispatch, token]);

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h3>Number of Products</h3>
        <p className="dashboard-count">{productLength}</p>
        <button onClick={() => navigate("/products")}>View Products</button>
      </div>

      <div className="dashboard-card">
        {token ? (
          <div>
            <h3>Orders</h3>
            <p className="dashboard-count">{orderedProducts.length}</p>
            <button onClick={() => navigate("/orders")}>View Orders</button>
          </div>
        ) : (
          <div>
            <h3>You are not Logged In</h3>
            <button onClick={() => navigate("/login")}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
}
