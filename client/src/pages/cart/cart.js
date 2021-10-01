import {React, useContext }from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";
// import CartContext from "../../components/CartContext";

function Cart() {

  // const {total} = useContext(CartContext);
  const history = useHistory();

  const pageRoute12 = () => {
    history.push("/checkout");
  };

  const refreshCart = () => {
    history.push("/cart");
  };


  let products = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(products);

  var sum = 0;

  for (let i = 0; i < products.length; i++) {
    var price = Number(products[i].price);
    //Price
    sum += price;
  }


  //Tax + Price
  let tax = sum * 0.0725;
  console.log(tax);

  tax = tax.toFixed(2);
  console.log(tax);

  //Total
  let total = +tax + sum;
  total = total.toFixed(2);

  localStorage.setItem("total", total);

  console.log(total);



  return (
    <div id="cart1">
      <table className="table sortable">
        <thead>
          <tr>
            
            <th scope="col" className="columnHeader">product</th>
            <th scope="col" className="columnHeader">quantity</th>
            <th scope="col" className="columnHeader">price</th>
            <th scope="col" className="columnHeader">manage cart</th>
          </tr>
        </thead>
        {products.map((product) => {
          return (
            <tbody key={product.id}>
              <tr>
                <td data-label="Product" id="dishCart">{product.dish}</td>
                <td data-label="Quantity">1</td>
                <td data-label="Price">${product.price}</td>
                <td>
                  <button id="deleteItemBtn" 
                    onClick={() => {
                      const cart = products;
                      const newCart = cart.filter(
                        (item) => item.id !== product.id
                      ); 
                      // re-number id's to match row in cart 
                      for (var i = 0; i < newCart.length; i++ ) { 
                        newCart[i].id = i;
                      }
                      localStorage.setItem("cart", JSON.stringify(newCart))
                      refreshCart()
                    }}
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
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
