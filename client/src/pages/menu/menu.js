/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./menu.css";
import { useHistory } from "react-router-dom";
import { useUserContext, } from "../../providers/user";

function Menu() {
  const [count, setCount] = useState("");

  const itemArray = () => {
    var itemArr = JSON.parse(localStorage.getItem("cart")) || [];
    var itemCount = itemArr.length;
    return itemCount;
  };

  const cartBtnReload = () => {
    setCount([itemArray()]);
  };
  useEffect(() => {
    cartBtnReload(count);
  }, []);

  const [products, setProducts] = useState([]);
  const [state, dispatch] = useUserContext();
  const history = useHistory();

  useEffect(() => {
    API.getDishes(state.isLoggedIn? state.userData.id: 0).then((res) => {
      setProducts(res.data);
    });
  }, []);

  const pageRoute24 = () => {
    history.push("/cart");
  };
  const handleLike = async e => {
     const res = await API.doLike(e.target.dataset.dishId, {
       user_id: e.target.dataset.userId,
       action: e.target.dataset.action
    }); 
    e.target.dataset.action = res.data.userLiked? "Unlike" : "Like";
    var span = document.getElementById("num-likes-" + e.target.dataset.dishId);
    if (span) {
      span.innerHTML = res.data.likeCount;
    } 
    var Btn = document.getElementById("like-button-" + e.target.dataset.dishId);
    if (Btn) {
    
    Btn.innerText = res.data.userLiked? "Unlike" : "Like";
    }
    //
    console.log(res);
    console.log(e);
  }    
  return (
    <div className="containermenu border">

      <h1 id="menu-header">platos</h1>

      <button id="goToCheckoutBtn" onClick={pageRoute24}>
        checkout ({count})
      </button>

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
          
            {state.isLoggedIn ? (
              <div>
                <span className = "num-likes" id = {"num-likes-" + product.id}>{product.likeCount}</span>
                <button data-dish-id = {product.id} data-user-id = {state.userData.id} data-action = {product.userLiked? "Unlike": "Like" } id = {"like-button-" + product.id} onClick = {handleLike} className="btnLike"> {product.userLiked? ("Unlike"): ("Like")}</button>
               </div>
            ):(
              <span className = "num-likes">{product.likeCount} <i className="far fa-thumbs-up like"></i></span>
            ) }

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
                  const unique = Array.from(new Set(cart));

                  localStorage.setItem("cart", JSON.stringify(unique));
                  cartBtnReload();
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
