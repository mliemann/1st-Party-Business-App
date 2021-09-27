/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./menu.css";
import products from "../../menu.json";
// import Dropdown from "react-bootstrap"
// import Details from "../../components/Details/details"

function Menu() {
  

  const addToCart = () => {
    const info = this.product.id
    let item = {
      dish: this.product.dish,
      ingredients: this.product.description,
      price: this.product.price
    };
    localStorage.setItem(info, JSON.stringify(item))
    // localStorage.setItem("dish", "price")
  }

  return (
    // <div className="container">
    //     <div id="menu">
    //         <div className="menuItem">
    //             <div id={"dish" + props.id} >{props.dish}</div>
    //             <div id={"description" + props.id}>{props.description}</div>
    //             <div id={"price" + props.id}>{props.price}</div>
    //             <button id="moreInfoBtn">More details</button>
    //             <button id="addCartBtn">Add to card</button>
    //         </div>
    //     </div>
    // </div>

    <div className="containermenu border">
      <h1 id="menu-header">platos</h1>
      {products.map((product) => {
        return (
          <div key={product.id} id="menu">
            <div className="menuItem">
              <div className="item" id="dish">
                {product.dish}
                <a
                  className="ui-tooltip"
                  title={product.description}
                >
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

              <button className="item" id="addCartBtn" onClick={() => {
    const info = product.id
    let item = {
      dish: product.dish,
      price: product.price
    };
    localStorage.setItem(info, JSON.stringify(item))
    // localStorage.setItem("dish", "price")
  }}>
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
