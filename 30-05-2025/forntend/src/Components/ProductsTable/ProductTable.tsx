import { useNavigate } from "react-router-dom";
import type { ProductData } from "../../TypeScript/constrain";
import "./ProductTable.css";
export default function ProductTable({
  products,
}: {
  products: ProductData[];
}) {
  console.log(products, "Products");
  const navigate = useNavigate();
  return (
    <div className="product-table-container">
      <table className="product-table ">
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Rating ⭐</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((ele, index) => (
              <tr key={ele._id} onClick={() => navigate(`/product/${ele._id}`)}>
                <td>{index + 1}</td>
                <td>
                  <img
                    className="table-image"
                    src={ele.avatar}
                    alt={ele.about}
                  />
                </td>
                <td>{ele.about}</td>
                <td>{ele.category}</td>
                <td>{ele.brand}</td>
                <td>{ele.rating}</td>
                <td>{ele.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="no-data">
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
