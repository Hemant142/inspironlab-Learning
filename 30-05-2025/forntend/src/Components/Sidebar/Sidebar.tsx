import { useSearchParams } from "react-router-dom";
import "./Sidebar.css";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = searchParams.getAll("brand");
  const initalCategory = searchParams.getAll("category");
  const initalOrder = searchParams.get("order") || "";
  const initalSearch = searchParams.get("search") || "";
  const [brand, setBrand] = useState<string[]>(initialBrand || []);
  const [order, setOrder] = useState<string>(initalOrder || "");
  const [category, setCategory] = useState<string[]>(initalCategory || []);
  const [q, setSearch] = useState<string>(initalSearch);

  useEffect(() => {
    const params: {
      category: string[];
      brand: string[];
      order: string;
      q?: string;
    } = {
      category,
      brand,
      order,
    };
    if (q) {
      params.q = q;
    }

    setSearchParams(params);
  }, [category, brand, order, q, setSearchParams]);

  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCategory = category.includes(e.target.value)
      ? category.filter((c) => c !== e.target.value)
      : [...category, e.target.value];
    setCategory(newCategory);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBrand = brand.includes(e.target.value)
      ? brand.filter((b) => b !== e.target.value)
      : [...brand, e.target.value];
    setBrand(newBrand);
  };

  const handleOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrder(e.target.value);
  };
  const handleReset = () => {
    setSearchParams({});
    setBrand([]);
    setCategory([]);
    setOrder("");
    setSearch("");
  };
  return (
    <div className="sidebar-container">
      <input
        className="sidebar-search"
        type="text"
        placeholder="Search"
        value={q}
        onChange={handleSearch}
      />

      <div className="sidebar-section">
        <h3>Filter by Category</h3>
        <div className="sidebar-checkbox-group">
          {[
            "Rings",
            "Brecelets",
            "Earrning",
            "Necklaces & Pendants",
            "Accessories",
            "Men's jewelry",
          ].map((cat) => (
            <label key={cat} className="sidebar-checkbox-label">
              <input
                type="checkbox"
                value={cat}
                onChange={handleCategory}
                checked={category.includes(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h3>Filter By Brands</h3>
        <div className="sidebar-checkbox-group">
          {[
            "Messika",
            "Cartier",
            "Garrard",
            "David Yurman",
            "John Hardy",
            "Reborto Coin",
            "Graff",
            "Mikimoto",
            "Tiffani",
          ].map((b) => (
            <label key={b} className="sidebar-checkbox-label">
              <input
                type="checkbox"
                value={b}
                onChange={handleBrand}
                checked={brand.includes(b)}
              />
              {b}
            </label>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h3>Sort By Discount</h3>
        <div className="sidebar-radio-group">
          <label className="sidebar-radio-label">
            <input
              type="radio"
              name="sort"
              value="asc"
              checked={order === "asc"}
              onChange={handleOrder}
            />
            Ascending
          </label>
          <label className="sidebar-radio-label">
            <input
              type="radio"
              name="sort"
              value="desc"
              checked={order === "desc"}
              onChange={handleOrder}
            />
            Descending
          </label>
        </div>
      </div>

      <button className="sidebar-reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
