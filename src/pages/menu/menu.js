import React from 'react';
import "./menu.css";

function Menu () {
    return (

        <div className="container">
            <div id="menu">
                <div className="menuItem">
                    <h1 className="dish">Menu item</h1>
                    <p1 className="description">Description</p1>
                    <p1 className="price">Price</p1>
                    <button className="moreInfoBtn">More details</button>
                    <button className="addCartBtn">Add to card</button>
                </div>
            </div>
        </div>
    )
}

export default Menu;