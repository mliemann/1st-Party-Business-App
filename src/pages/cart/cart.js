import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";

function Cart(props) {
  return (
    <table className="table sortable">
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => {
          return (
            <tr key={user.id}>
              <td data-label="Product">{user.product}</td>
              <td data-label="Quantity">{user.quantity}</td>
              <td data-label="Price">{user.price}</td>
            </tr>
          );
        })}
        <thead>
          <tr>
            <th data-field="subtotal">Subtotal</th>
            <th data-field="tax">Tax</th>
            <th data-field="total">Total</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td>Subtotal</td>
            <td>Tax</td>
            <td>Total</td>
          </tr>
        </tfoot>
      </tbody>
    </table>
  );
}

export default Cart;
