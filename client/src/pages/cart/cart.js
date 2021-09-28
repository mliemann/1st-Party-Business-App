/* eslint-disable no-lone-blocks */
import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";
// import contents from "../menu/menu.js";


function Cart(props) {
  var contents = [] 
  const history = useHistory();
  const load = () => {
  contents = []
   for (var i = 0, len = localStorage.length; i < len; ++i) {
     contents.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
   }
  console.log(contents)
 }
load()

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

  // // let products = JSON.parse(localStorage.getItem("product"));
  // console.log(products);

  // // for (var i=0; i < products.length; i++) {
  // //   var product = products[i]
  // // }

  // console.log(dish);

  // console.log(price);

  // var i = 0;
  // var x = contents.price;

  // let subtotal = x + i++;

  // var y = 0.0725 * subtotal;

  // let total = subtotal + y;
  // total = total.toFixed(2);

  // let tax = total - subtotal;
  // tax = tax.toFixed(2);

  // if (contents == null) {
  //   contents.price = "none selected";
  //   contents.dish = "none selected";
  // }

  // let product = JSON.parse(localStorage.getItem("product"));
  // console.log(product);
  // if (product !== null) {
  //   document.getElementById("ProductCart") = product.dish
  // }
  return (
    <div>
      <div>
        {contents.map((content) => {
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
                <tbody>
                  <tr>
                    <td data-label="Product" id="ProductCart">
                      {content.dish}
                    </td>
                    <td data-label="Quantity">1</td>
                    <td data-label="Price">{content.price}</td>
                  </tr>
                </tbody>
              </table>
              <div id="pricetable">
                <table className="table sortable">
                  <tbody>
                    <tr>
                      <th data-field="subtotal">subtotal</th>
                      {/* <td>{subtotal}</td> */}
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
              </div>
            </div>
          );
        })}
      </div>
      <button className="checkoutbtn" onClick={pageRoute12}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
