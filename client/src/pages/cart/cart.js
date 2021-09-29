import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";
// import Menu from "../menu/menu.js";

function Cart() {
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

  let products = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(products);

  // let product = products.dish;
  // console.log(product);

  // let price = products.price;
  // console.log(price);

  var sum = 0;

  for (let i = 0; i< products.length; i++) {
   
    var price = products[i].price;
    //Price
    sum += price

  }

  // var y = .0725 * sum;

  //Tax + Price
  let tax = sum * .0725;
  console.log(tax);

  tax = tax.toFixed(2);
  console.log(tax);

  //Total
  let total =+ tax + sum;
  total = total.toFixed(2);
  
  console.log(total);

  

  // if (product !== null) {
  //   document.getElementsByTagName("td") = product
  // }

  // let product = JSON.parse(localStorage.getItem("product"));
  // console.log(product);
  // if (product !== null) {
  //   document.getElementById("ProductCart") = product.dish
  // }

  return (
    <div id="cart1">
      <table className="table sortable">
        <thead>
          <tr>
            <th scope="col">product</th>
            <th scope="col">quantity</th>
            <th scope="col">price</th>
          </tr>
        </thead>
        {products.map((product) => {
          return (
            <tbody key={product.id}>
              <tr>
                <td data-label="Product">{product.dish}</td>
                <td data-label="Quantity">1</td>
                <td data-label="Price">${product.price}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div id="pricetable">
        <table className="table sortable">
          <tbody>
            <tr>
              <th data-field="subtotal">subtotal</th>
              <td>${sum}</td>
            </tr>

            <tr>
              <th data-field="tax">tax</th>
              <td>${tax}</td>
            </tr>
            <tr>
              <th data-field="total">total</th>
              <td>${total}</td>
            </tr>
          </tbody>
        </table>
        <button className="checkoutbtn" onClick={pageRoute12}>
          checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
