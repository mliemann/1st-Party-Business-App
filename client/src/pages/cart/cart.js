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
            <th scope="col">product</th>
            <th scope="col">quantity</th>
            <th scope="col">price</th>
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
            <th data-field="subtotal">subtotal</th>
            <td>subtotal</td>
          </tr>

          <tr>
            <th data-field="tax">tax</th>
            <td>tax</td>
          </tr>
          <tr>
            <th data-field="total">total</th>
            <td>total</td>
          </tr>
        </tbody>
        </table>
        <button className="checkoutbtn" onClick={pageRoute12} >checkout</button>
        </div>
    </div>
  );
}

export default Cart;
