import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  useUserContext,
  USER_LOGGED_OUT,
  USER_LOGGED_IN,
} from "../../providers/user";
import "./style.css";

function Header() {
  const history = useHistory();

  const pageRoute1 = () => {
    history.push("/login");
  };
  const pageRoute2 = () => {
    history.push("/menu");
  };
  const pageRoute4 = () => {
    history.push("/");
  };
  const pageRoute5 = () => {
    history.push("/dashboard");
  };
  const pageRoute7 = () => {
    history.push("/profile");
  };

  const [state, dispatch] = useUserContext();

  useEffect(() => {
    try {
      const userData = JSON.parse(window.localStorage.getItem("user data"));
      if (userData.user) {
        dispatch({
          type: USER_LOGGED_IN,
          userData: userData.user,
        });
      }
    } catch {}
  }, [dispatch]);

  const logUserOut = () => {
    dispatch({
      type: USER_LOGGED_OUT,
    });
    window.localStorage.setItem("user data", null)

    history.push("/");
  };

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
      <div>
        {state.isLoggedIn ? (
          <div>
            {" "}
            <div id="pleasework">
             
              <button
                className="btnHeaderLogin pleaseWorkBtn"
                id="cartbtn"
                onClick={pageRoute2}
              >
                menu
              </button>
         
              <button onClick={pageRoute5} className="btnHeaderLogin pleaseWorkBtn">
                dashboard
              </button>

              <button
                className="btnHeaderLogin pleaseWorkBtn"
                id="logoutbtn"
                onClick={logUserOut}
              >
                sign out
              </button>

              <img
              onClick={pageRoute7}
              id="profilepic"
              src={state.userData.profileUrl}
              alt="user"
              width="auto"
              height="175"
            ></img>
          
            </div>
            
          </div>
        ) : (
          <div>
            <div id="idkWork">
              <button
                className="btnHeaderLogin"
                id="loginbtn idkWorkBtn"
                onClick={pageRoute1}
              >
                log in
              </button>
              <button
                className="btnHeaderLogin"
                id="cartbtn idkWorkBtn"
                onClick={pageRoute2}
              >
                menu
              </button>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
