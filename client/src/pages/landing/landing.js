import React from "react";
import "./landing.css";
import { useHistory } from "react-router-dom";

function Landing() {
  const history = useHistory();

  const pageRoute10 = () => {
    history.push("/menu");
  };

  // const pageRoute11 = () => {
  //     history.push("/cart");
  // };

  return (
    <div className="container">
      <div className="body">
        <div className="cover">
          <div id="background1" onClick={pageRoute10}>
            <img
              id="coverimg1"
              src="https://res.cloudinary.com/dl0hsgmfc/image/upload/v1631985686/tacotavern/taco-cover-1.jpg"
              alt="A bowl of onions, guacamole, and tomatoes."
            ></img>
            <h1 id="viewmenu">view menu</h1>
          </div>
        </div>

        <div className="cover">
          <div id="background2">
            <img
              id="coverimg3"
              src="https://res.cloudinary.com/dl0hsgmfc/image/upload/v1631985686/tacotavern/taco-cover-16.jpg"
              alt="Chicken and cilantro tacos."
            ></img>
            <h1 id="placeorder">place your order</h1>
            <img
              id="coverimg2"
              src="https://res.cloudinary.com/dl0hsgmfc/image/upload/v1631985686/tacotavern/taco-cover-16.jpg"
              alt="Chicken and cilantro tacos."
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
