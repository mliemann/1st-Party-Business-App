import React from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

function Login() {
  const history = useHistory();

  const regRoute = () => {
    history.push("/signup");
  };
  return (
    <div className="log-container">
      <div className="sub-form">
        <div>
          <div id="title">
            <h2>Log In</h2>
          </div>
        </div>

        <form>
          <div>
            <input
              type="text"
              id="email-login"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
          </div>
          <div>
            <input
              type="password"
              id="password-login"
              placeholder="Password"
            ></input>
          </div>
          <p id="checkbox">
            <input type="checkbox"></input> Keep me logged in
          </p>
          <div>
            <button id="login" type="submit">
              Log In
            </button>
            <button className="register" onClick={regRoute}>
              Register
            </button>
            <button className="register1">Guest Checkout</button>
            <button id="forgot">Forgot Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
