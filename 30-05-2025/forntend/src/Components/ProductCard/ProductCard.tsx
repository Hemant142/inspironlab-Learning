import { Link } from "react-router-dom";
import type { ProductData } from "../../TypeScript/constrain";
import "./ProductCard.css";

export default function ProductCard({ product }: { product: ProductData }) {
  return (
    <Link to={`/product/${product._id}`} className="product-card-link">
      <div className="product-card">
        <img
          src={product.avatar}
          alt={product.name}
          className="product-avatar"
        />
        <h4>
          {product.about.length <= 10
            ? product.about
            : `${product.about.substring(0, 12)}...`}
        </h4>
        <p className="product-about">{product.name}</p>
        <div className="product-details">
          <span>Category: {product.category}</span>
          <span>Brand: {product.brand}</span>
        </div>
        <div className="product-meta">
          <span>Price: ₹{product.price}</span>
          <span>Rating: {product.rating}⭐</span>
        </div>
      </div>
    </Link>
  );
}
