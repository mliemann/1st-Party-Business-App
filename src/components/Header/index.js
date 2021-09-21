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
      <img
        src="https://bestteamproj2.s3.amazonaws.com/TacoTavern.png"
        alt="taco tavern logo"
        width="230"
        height="auto"
      ></img>
      <img
        src="https://bestteamproj2.s3.amazonaws.com/images/Pictureofme.jpg"
        alt="taco tavern logo"
        width="150"
        height="auto"
      ></img>
      <button onClick={pageRoute1}>Login</button>
      <button onClick="">Cart</button>
      {/* <button onClick={pageRoute2}>Cart</button> */}
      {/* <button onClick={pageRoute3}>Home</button> */}
      <button onClick={pageRoute4}>Landing</button>
      {/* <button onClick={pageRoute5}>Dashboard</button> */}
      {/* <button onClick={pageRoute6}>Menu</button> */}
      {/* <button onClick={pageRoute7}>Profile</button> */}
      {/* <button onClick={pageRoute8}>Restaurant Signup</button> */}
    </div>
  );
}

export default Header;
