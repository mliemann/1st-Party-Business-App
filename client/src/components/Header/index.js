import React from "react";
import { useHistory } from "react-router-dom";
import { useUserContext, USER_LOGGED_OUT } from "../../providers/user";
import "./style.css";

function Header() {
  const history = useHistory();

  const pageRoute1 = () => {
    history.push("/login");
  };
  const pageRoute2 = () => {
    history.push("/menu");
  };
  // const pageRoute3 = () => {
  //   history.push("/");
  // };
  const pageRoute4 = () => {
    history.push("/");
  };
  const pageRoute5 = () => {
    history.push("/dashboard");
  };
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
  };
  console.log(state);
  return (
    <div className="header">
            <img
              id="logo"
              src="https://res.cloudinary.com/dl0hsgmfc/image/fetch/e_replace_color:0e1b47/https://bestteamproj2.s3.amazonaws.com/TacoTavern.png"
              alt="taco tavern logo"
              width="auto"
              height="175"
              onClick={pageRoute4}
            ></img>
            <div >
              {state.isLoggedIn ? (
                <div className="whitespace">
                  {" "}
                  <button className="btnHeaderLogin" id="logoutbtn" onClick={logUserOut}>
                    logout
                  </button>
                  <button className="btnHeaderLogin" id="cartbtn" onClick={pageRoute2}>
                    menu
                  </button>
                  {/* <button onClick={pageRoute3}>Home</button> */}
                  {/* <button className="btnHeader" id="landingbtn" onClick={pageRoute4}>
                    home
                  </button> */}
                  <button onClick={pageRoute5} className="btnHeaderLogin">dashboard</button>
                  {/* <button onClick={pageRoute6}>Menu</button> */}
                  <button className="btnHeaderLogin" id="profilesbtn" onClick={pageRoute7}>
                    profile
                  </button>
                  {/* <button onClick={pageRoute8}>Restaurant Signup</button> */}
                  <img
                    id="profilepic"
                    src={state.userData.profileUrl}
                    alt="user"
                    width="auto"
                    height="175"
                  ></img>
                </div>
              ) : (
                <div className="whitespace2">
                  <div id="idkwork">
                  <button className="btnHeaderLogin" id="loginbtn" onClick={pageRoute1}>
                    login
                  </button>
                  <button className="btnHeaderLogin" id="cartbtn" onClick={pageRoute2}>
                    menu
                  </button>
                  </div>
                  
                    {/* <h1 id="comment">taste buds ready</h1> */}
                  
                </div>
              )}
            </div>
    </div>
  );
}

export default Header;
