import React from "react";
import { useHistory } from "react-router-dom";
import { useUserContext, USER_LOGGED_OUT, } from "../../providers/user";
import "./style.css";

function Header() {
  const history = useHistory();

  const pageRoute1 = () => {
    history.push("/login");
  };
  const pageRoute2 = () => {
    history.push("/cart");
  };
  // const pageRoute3 = () => {
  //   history.push("/");
  // };
  const pageRoute4 = () => {
    history.push("/");
  };
  // const pageRoute5 = () => {
  //   history.push("/dashboard");
  // };
  // const pageRoute6 = () => {
  //   history.push("/menu");
  // };
  const pageRoute7 = () => {
    history.push("/profile");
  };
  // const pageRoute8 = () => {
  //   history.push("/restsignup");
  // };

  const [state, dispatch] = useUserContext();

  const logUserOut = () => {

    dispatch({
      type: USER_LOGGED_OUT,
    });

    history.push("/");
  }

  return (
    <div className="header">
        <img id="logo"
            src="https://res.cloudinary.com/dl0hsgmfc/image/fetch/e_replace_color:0e1b47/https://bestteamproj2.s3.amazonaws.com/TacoTavern.png"
            alt="taco tavern logo"
            width="auto"
            height="175"
        ></img>
        <div id="whitespace">
        
        { state.isLoggedIn ? 
        <div>  <button className="btn" id="logoutbtn" onClick={logUserOut}>logout</button><button className="btn" id="cartbtn"  onClick={pageRoute2}>cart</button>
    {/* <button onClick={pageRoute3}>Home</button> */}
    <button className="btn" id="landingbtn" onClick={pageRoute4}>home</button>
    {/* <button onClick={pageRoute5}>Dashboard</button> */}
    {/* <button onClick={pageRoute6}>Menu</button> */}
    <button className="btn" id="landingbtn" onClick={pageRoute7}>profile</button>
    {/* <button onClick={pageRoute8}>Restaurant Signup</button> */}
    <img id="profilepic"
        src=" https://res.cloudinary.com/dl0hsgmfc/image/fetch/c_crop,g_face,h_200,w_200/c_scale,w_200/https://bestteamproj2.s3.amazonaws.com/images/Pictureofme.jpg"
        alt="taco tavern logo"
        width="auto"
        height="175"
    ></img> </div>
          : 
          <div><button className="btn" id="loginbtn" onClick={pageRoute1}>login</button>  <button className="btn" id="cartbtn"  onClick={pageRoute2}>cart</button>
          {/* <button onClick={pageRoute3}>Home</button> */}
          <button className="btn" id="landingbtn" onClick={pageRoute4}>home</button>
          {/* <button onClick={pageRoute5}>Dashboard</button> */}
          {/* <button onClick={pageRoute6}>Menu</button> */}
          <button className="btn" id="landingbtn" onClick={pageRoute7}>profile</button>
          {/* <button onClick={pageRoute8}>Restaurant Signup</button> */}</div>
          }
        
       
        </div>
    </div>
  );
}

export default Header;