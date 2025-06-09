import { useEffect, useState } from "react";
import "./ProductPage.css";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../../../Components/ProductCard/ProductCard";
import type { ProductData } from "../../../TypeScript/constrain";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../../../Store/features/Product/productThunks";
import type { AppDispatch } from "../../../Store/store";
import ProductTable from "../../../Components/ProductsTable/ProductTable";

export default function ProductPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [isChecked, setIsChecked] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const productData = useSelector(
    (state: { products: { products: Array<ProductData> } }) =>
      state.products.products
  );

  console.log(productData, "productData");
  const [searchParams] = useSearchParams();
  const category = searchParams.getAll("category");
  const brand = searchParams.getAll("brand");
  const order = searchParams.get("order") || "";
  const q = searchParams.get("q") || "";
  console.log(page, "page");
  useEffect(() => {
    setLoading(true);
    // Check if there are more products to load
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(fetchProducts({ page, limit: 10 })).then((action: any) => {
      setLoading(false);
      if (action.payload && action.payload.products.length < 10) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    });
  }, [dispatch, page]);
  // Infinite scroll handler

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
          document.documentElement.offsetHeight &&
        hasMore &&
        !loading
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

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

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="product-page-root">
      <Sidebar />

      <div className="product-page-container">
        <h2>All Products</h2>
        <label className="switch">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
          <span className="slider"></span>
        </label>
        {!isChecked ? (
          <div className="product-list">
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map((product: ProductData) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p>No products found.</p>
            )}
            {loading && <p>Loading more products...</p>}
            {!hasMore && <p>No more products to load.</p>}
          </div>
        ) : (
          <div>
            <ProductTable products={filteredProducts} />
          </div>
        )}
      </div>
    </div>
  );
}
