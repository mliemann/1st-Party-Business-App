/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./menu.css";

function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.getDishes().then((res) => {
      setProducts(res.data);
    });
  }, []);
  
  return (
    <div className="containermenu border">
      <h1 id="menu-header">platos</h1>
      {/* <button id="goToCheckoutBtn">checkout</button> */}
      {products.map((product) => {
        return (
          <div key={product.id} id="menu">
            <div className="menuItem">
              <div className="item" id="dish">
                {product.dish}
                <a className="ui-tooltip" title={product.description}>
                  <span style={{ cursor: "pointer" }}>
                    <i className="fas fa-info-circle"></i>
                  </span>
                </a>
              </div>
              <div className="item" id="description">
                {product.ingredients}
              </div>
              <div className="item" id="price">
                ${product.price}
              </div>
              {/* <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    details
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item>{product.description}</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}

              {/* <button className="item" id="moreInfoBtn">More details</button> */}
              
              <button
                className="item"
                id="addCartBtn"
                onClick={() => {
                  var cart = JSON.parse(localStorage.getItem("cart")) || [];
                  var dish = {
                    id: cart.length, // set id equal to row in cart
                    product: product.id,
                    dish: product.dish,
                    price: product.price,
                  };
                  cart.push(dish);
                  localStorage.setItem("cart", JSON.stringify(cart));
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
