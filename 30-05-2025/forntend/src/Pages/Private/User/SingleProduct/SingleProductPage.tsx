import { useEffect, useState } from "react";
import type { ProductData } from "../../../../TypeScript/constrain";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./SingleProductPage.css"; 
import {
  addToCart,
  fetchSingleProduct,

} from "../../../../Store/features/Product/productThunks";
import type { AppDispatch } from "../../../../Store/store";


export default function SingleProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector(
    (state: { products: { singleProduct: ProductData } }) =>
      state.products.singleProduct
  );

  const [quantity, setQuantity] = useState<number>(1);
  const token = useSelector(
    (state: { auth: { token: string } }) => state.auth.token
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleProduct({ token, id }));
    }
  }, [id, token,dispatch]);

  const saveToCart = async () => {
    try {
      if (!product) throw new Error("Product not loaded");
      const cartData = {
        product: product,
        quantity: quantity,
      };

      const resultAction = dispatch(addToCart({ token, cartData }));
      if (addToCart.fulfilled.match(resultAction)) {
        alert(
          resultAction.payload.message || "Product added to cart successfully."
        );
      } else {
        throw new Error("Order placement failed");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleAddCart = async () => {
    await saveToCart();
  };

  const handleBuyNow = async () => {
    await saveToCart();

      navigate("/cart");
 
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="single-product-root">
      <div className="single-product-img">
        <img src={product.avatar} alt={product.name} />
      </div>
      <div className="single-product-details">
        <h2>{product.about}</h2>
        <p className="single-product-about">{product.name}</p>
        <p className="single-product-desc">
          Elegance Redefined, Precious Charms Jewelry. Timeless Beauty,
          Captivating Hearts. Embrace Luxury, Cherish Forever.
        </p>
        <div className="single-product-meta">
          <span>Category: {product.category}</span>
          <span>Brand: {product.brand}</span>
          <span>Rating: {product.rating}⭐</span>
        </div>
        <div className="single-product-price">Price: ₹{product.price}</div>
        <div className="single-product-qty">
          Quantity:{" "}
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="qty-btn"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            style={{ width: "60px", textAlign: "center" }}
          />
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="qty-btn"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <div className="single-product-actions">
          <button onClick={handleBuyNow}>Buy Now</button>
          <button onClick={handleAddCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
