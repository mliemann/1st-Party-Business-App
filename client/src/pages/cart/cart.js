import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";
import Menu from "../menu/menu.js";

function Cart(props) {

  const history = useHistory();

  const pageRoute12 = () => {
    history.push("/checkout");
  };

  // const renderCart = () => {
  //   const item = this.product.id;
  //   let item = {
  //     product: this.product.product,
  //     quantity: this.p
  //   }
  // }

  // let product = window.localStorage.getItem('dish')

let product = JSON.parse(localStorage.getItem("product"));
console.log(product);
if (product !== null) {
  document.getElementById("ProductCart") = product.dish
}


  
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
         
          <tr>
            <td data-label="Product" id="ProductCart"></td>
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
