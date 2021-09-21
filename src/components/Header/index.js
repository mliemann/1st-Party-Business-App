import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function Header() {
  const history = useHistory();

  const pageRoute1 = () => {
    history.push("/login");
  };
  // const pageRoute2 = () => {
  //   history.push("/cart");
  // };
  // const pageRoute3 = () => {
  //   history.push("/");
  // };
  const pageRoute4 = () => {
    history.push("/landing");
  };
  // const pageRoute5 = () => {
  //   history.push("/dashboard");
  // };
  // const pageRoute6 = () => {
  //   history.push("/menu");
  // };
  // const pageRoute7 = () => {
  //   history.push("/profile");
  // };
  // const pageRoute8 = () => {
  //   history.push("/restsignup");
  // };



  return (
    <div className="header">
      
        <img id="background"
            src="https://res.cloudinary.com/dl0hsgmfc/image/upload/v1631985686/tacotavern/taco-cover-0.jpg" 
            alt="Wooden background"
            width="100%"
            height="300px"
        ></img>
        <div>
        <img id="logo"
            src="https://res.cloudinary.com/dl0hsgmfc/image/fetch/e_replace_color:3f85d9/https://bestteamproj2.s3.amazonaws.com/TacoTavern.png"
            alt="taco tavern logo"
            width="auto"
            height="200"
        ></img>
        <button id="loginbtn" onClick={pageRoute1}>Login</button>
        <button id="cartbtn" onClick="">Cart</button>
        {/* <button onClick={pageRoute2}>Cart</button> */}
        {/* <button onClick={pageRoute3}>Home</button> */}
        <button id="landingbtn" onClick={pageRoute4}>Landing</button>
        {/* <button onClick={pageRoute5}>Dashboard</button> */}
        {/* <button onClick={pageRoute6}>Menu</button> */}
        {/* <button onClick={pageRoute7}>Profile</button> */}
        {/* <button onClick={pageRoute8}>Restaurant Signup</button> */}
      </div>
    </div>
  );
}

export default Header;
