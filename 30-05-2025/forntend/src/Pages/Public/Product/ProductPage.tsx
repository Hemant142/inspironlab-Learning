import { useEffect } from "react";
import "./ProductPage.css";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../../../Components/ProductCard/ProductCard";
import type { ProductData } from "../../../TypeScript/constrain";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../../../Store/features/Product/productThunks";
import type { AppDispatch } from "../../../Store/store";

export default function ProductPage() {
  const dispatch = useDispatch<AppDispatch>();

  const productData = useSelector(
    (state: { products: { products: Array<ProductData> } }) =>
      state.products.products
  );

  const [searchParams] = useSearchParams();
  const category = searchParams.getAll("category");
  const brand = searchParams.getAll("brand");
  const order = searchParams.get("order") || "";
  const q = searchParams.get("q") || "";

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = productData
    .filter((p: ProductData) => {
      const query = q.toLowerCase();
      return (
        p.about.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    })
    .filter((p: ProductData) =>
      category.length ? category.includes(p.category) : true
    )
    .filter((p: ProductData) =>
      brand.length ? brand.includes(p.brand) : true
    );

  if (order === "asc")
    filteredProducts.sort(
      (a: { price: number }, b: { price: number }) => a.price - b.price
    );
  if (order === "desc")
    filteredProducts.sort(
      (a: { price: number }, b: { price: number }) => b.price - a.price
    );

  return (
    <div className="product-page-root">
      <Sidebar />

      <div className="product-page-container">
        <h2>All Products</h2>
        <div className="product-list">
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product: ProductData) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
