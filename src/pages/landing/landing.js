import React from "react";
import "./landing.css";


function Landing () {
    return (
        <div className="container">

            <div className="body">
                
                <div className="cover">
                    <div id="background1">
                        <img id="coverimg1" src="https://res.cloudinary.com/dl0hsgmfc/image/upload/v1631985686/tacotavern/taco-cover-1.jpg" alt=""></img>
                        <h1 id="viewmenu">view menu</h1>
                    </div>
                </div>
                
                <div className="cover">
                    <div id="background2">
                        <h1 id="placeorder">place your order</h1>
                        <img id="coverimg2" src="https://res.cloudinary.com/dl0hsgmfc/image/upload/v1631985686/tacotavern/taco-cover-16.jpg" alt=""></img>
                    </div>
                </div>
                
            </div>
        </div>
    
  );
}

export default Landing;
