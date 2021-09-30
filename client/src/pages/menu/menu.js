/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./menu.css";
import products from "../../menu.json";
// import Dropdown from "react-bootstrap"

function Menu() {
  return (
    <div className="containermenu border">
      <h1 id="menu-header">platos</h1>
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
                  var cart = [];
                  var dish = {
                    id: product.id,
                    dish: product.dish,
                    price: product.price,
                  };
                  cart = JSON.parse(localStorage.getItem("cart")) || [];
                  cart.push(dish);
                  const unique = Array.from(new Set(cart));
                  
                  localStorage.setItem("cart", JSON.stringify(unique));
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
