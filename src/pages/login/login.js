import React from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

function Login() {
    const history = useHistory();

    const regRoute = () => {
        history.push("/signup");
    }
  return (
    <div>
      <div>
        <div>
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
        <p>
          Stay logged in<input type="checkbox"></input>
        </p>
        <div>
          <button type="submit">Log In</button>
          <button onClick={regRoute}>Register</button>
          <button>
            Guest Checkout
          </button>
          <button>Forgot Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
