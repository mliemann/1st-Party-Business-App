import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";
import products from "../../menu.json";


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

// DO NOT DELETE. THIS IS HOW WE'LL PUSH THE CORRECT MAPPING LATER....let products = JSON.parse(localStorage.getItem("product"));
console.log(products);

let product = products.dish;
console.log(product);

let price = products.price;
console.log(price);

var i = 0;
var x = price;

let subtotal = x + i++;


// if (product !== null) {
//   document.getElementsByTagName("td") = product
// }

// let product = JSON.parse(localStorage.getItem("product"));
// console.log(product);
// if (product !== null) {
//   document.getElementById("ProductCart") = product.dish
// }


// eslint-disable-next-line no-lone-blocks
{products.map(() => {
  return(
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
          <td data-label="Product" id="ProductCart">{product}</td>
          <td data-label="Quantity">1</td>
          <td data-label="Price">{price}</td>
        </tr>
      </tbody>
    </table>
    <div id= "pricetable"> 
    <table className="table sortable" >
      <tbody >
        <tr>
          <th data-field="subtotal">subtotal</th>
          <td>{subtotal}</td>
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
  )
})}
<button className="checkoutbtn" onClick={pageRoute12} >checkout</button>


}

export default Cart;
