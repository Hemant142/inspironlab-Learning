import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import type { CartsItem } from "../../../../TypeScript/constrain";
import {
  deleteCarts,
  getCarts,
  myOrderPlaced,
} from "../../../../Store/features/Product/productThunks";
import type { AppDispatch } from "../../../../Store/store";

export default function Cart() {
  const token = useSelector(
    (state: { auth: { token: string } }) => state.auth.token
  );
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const cart = useSelector(
    (state: { products: { carts: CartsItem[] } }) => state.products.carts
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      await dispatch(getCarts({ token }));
      setLoading(false);
    };
    fetchCart();
  }, [token, dispatch]);

  const handleDelete = async (id: string) => {
    await dispatch(deleteCarts({ token, id }));
    //  await  dispatch(getCarts({ token }));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    if (!token) {
      alert("Please login to place order");
      return;
    }

    try {
      const productsForOrder = cart.map((item) => ({
        _id: item._id,
        product: item.product,
        quantity: item.quantity,
      }));

      const resultAction = await dispatch(
        myOrderPlaced({ token, productsForOrder })
      );

      if (myOrderPlaced.fulfilled.match(resultAction)) {
        alert(resultAction.payload.message || "Order placed successfully!");

        navigate("/");
      } else {
        throw new Error("Order placement failed");
      }
    } catch (err) {
      console.error(err);
      alert("Order failed");
    }
  };

  if (loading) return <div className="cart-loading">Loading...</div>;
  if (!cart.length)
    return <div className="cart-empty">Your cart is empty.</div>;

  return (
    <div className="cart-root">
      <div className="cart-items">
        <h2>Your Cart</h2>
        {cart.map((item) => (
          <div key={item._id} className="cart-item">
            <img
              src={item.product.avatar}
              alt={item.product.name}
              className="cart-item-img"
            />
            <div className="cart-item-info">
              <div>
                <b>{item.product.about}</b>
              </div>
              <div>Brand: {item.product.brand}</div>
              <div>Category: {item.product.category}</div>
              <div>Price: ₹{item.product.price}</div>
              <div>Quantity: {item.quantity}</div>
            </div>
            <button
              className="cart-delete-btn"
              onClick={() => {
                if (typeof item.product._id == "string") {
                  handleDelete(item.product._id);
                }
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {/* Bill & Place Order */}
      <div className="cart-bill">
        <h3>Bill Details</h3>
        <div className="cart-bill-list">
          {cart.map((item) => (
            <div key={item.product._id} className="cart-bill-row">
              <span>
                {item.product.name} x {item.quantity}
              </span>
              <span>₹{item.product.price * item.quantity}</span>
            </div>
          ))}
          <hr />
          <div className="cart-bill-total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
        <button onClick={handlePlaceOrder} className="cart-place-order-btn">
          Place Order
        </button>
      </div>
    </div>
  );
}
