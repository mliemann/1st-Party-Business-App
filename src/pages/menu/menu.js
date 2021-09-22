import React from 'react';
import "./menu.css";
import "../../menu.json";

function Menu (props) {
    return (
        <div className="container">
            <div id="menu">
                <div className="menuItem">
                    <div id={"dish" + props.id} >{props.dish}</div>
                    <div id={"description" + props.id}>{props.description}</div>
                    <div id={"price" + props.id}>{props.price}</div>
                    <button id="moreInfoBtn">More details</button>
                    <button id="addCartBtn">Add to card</button>
                </div>
            </div>
        </div>
    )
}

export default Menu;