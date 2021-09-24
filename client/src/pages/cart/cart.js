import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";

function Cart(props) {

  const history = useHistory();

  const pageRoute12 = () => {
    history.push("/checkout");
  };
  
  return (
    <div id="cart1">
      <table className="table sortable"  >
        <thead >
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {/* {props.users.map((user) => {
          return (
            <tr key={user.id}>
              <td data-label="Product">{user.product}</td>
              <td data-label="Quantity">{user.quantity}</td>
              <td data-label="Price">{user.price}</td>
            </tr>
          );
        })} */}
          <tr>
            <td data-label="Product">Product Test</td>
            <td data-label="Quantity">27</td>
            <td data-label="Price">All the money in your wallet</td>
          </tr>
        </tbody>
      </table>
      <div id= "pricetable"> 
      <table className="table sortable" >
        <tbody >
          <tr>
            <th data-field="subtotal">Subtotal</th>
            <td>Subtotal</td>
          </tr>

          <tr>
            <th data-field="tax">Tax</th>
            <td>Tax</td>
          </tr>
          <tr>
            <th data-field="total">Total</th>
            <td>Total</td>
          </tr>
        </tbody>
        </table>
        <button className="checkoutbtn" onClick={pageRoute12} >checkout</button>
        </div>
    </div>
  );
}

export default Cart;
