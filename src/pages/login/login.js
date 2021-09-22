import React from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

function Login() {
    const history = useHistory();

    const regRoute = () => {
        history.push("/signup");
    }
  return (
    <div id="formlogin">

    
      <div>
        <h2 id="login">log in</h2>
      </div>

      <form>

        <div>
          <input 
            className="input"
            type="text"
            id="email-login"
            aria-describedby="emailHelp"
            placeholder="    enter email"
          ></input>
        </div>

        <div>
          <input 
            className="input"
            type="password"
            id="password-login"
            placeholder="    password"
          ></input>
        </div>

        <p id="loggedin">
          stay logged in?<input type="checkbox"></input>
        </p>

        <div>
          <button className="btnlogin" type="submit">log in</button>
          <button className="btnlogin" onClick={regRoute}>register</button>
          <button className="btnlogin">
            guest checkout
          </button>
          <button className="btnlogin">forgot login</button>
        </div>

      </form>

    </div>
  );
}

export default Login;
