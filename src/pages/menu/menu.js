import React from 'react';
import "./menu.css";
import "../../menu.json";

function Menu (props) {
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

        <div className="containermenu">
        <div id="menu">
            
            <div className="menuItem">
            <h1>platos</h1>
                <div className="item" id="dish" >Dish</div>
                <div className="item" id="description">rhgkrjh, oeuhfiweuh, woefhowufeh, owuefbwm, oweufweh, woufwb</div>
                <div className="item" id="price">21</div>
                <button className="item" id="moreInfoBtn">More details</button>
                <button className="item" id="addCartBtn">Add to card</button>
            </div>
        </div>
    </div>
    )
}

export default Menu;