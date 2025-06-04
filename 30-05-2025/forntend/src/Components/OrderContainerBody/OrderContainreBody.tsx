import "./OrderContainreBody.css";
import type { SingleOrderItem } from "../../TypeScript/constrain";

export default function OrderContainreBody({
  order,
}: {
  order: SingleOrderItem;
}) {
  // console.log(order,"ORder")
  const { purchasedAt, quantity, product } = order;

  return (
    <div className="ordercontainerbody-container">
      <div className="ordercontainerbody-image">
        <img src={product.avatar} alt={product.about} />
      </div>

      <table className="table">
        <tbody>
          <tr>
            <td>Purchase At </td>
            <td>:{purchasedAt}</td>
          </tr>
          <tr>
            <td>Product type </td>
            <td>:{product.name}</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>:{product.category}</td>
          </tr>
          <tr>
            <td>About</td>
            <td>:{product.about}</td>
          </tr>
          <tr>
            <td>Item Price</td>
            <td>:{product.price}</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>:{quantity}</td>
          </tr>
          <tr>
            <td>Total Price</td>
            <td>:{quantity * product.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
