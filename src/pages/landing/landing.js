import React from 'react';
import "./landing.css";

function Landing () {
    return (
        <div className="container">
            <div className="body">
                <div className="cover">
                    <img id="coverimg1" alt=""></img>
                    <div id="background1"></div>
                    <h1 id="viewmenu">VIEW MENU</h1>
                </div>
                <div className="cover">
                    <img id="coverimg2" alt=""></img>
                    <div id="background2"></div>
                    <h1 id="placeorder">PLACE YOUR ORDER</h1>
                </div>
                
            </div>
        </div>
    )
}

export default Landing;