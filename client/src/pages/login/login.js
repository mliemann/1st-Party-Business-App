/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext, USER_LOGGED_IN, } from "../../providers/user";
import API from "../../utils/API";
import "./login.css";

async function loginUser(credentials) {
  return fetch('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function Login() {
    const [state, dispatch] = useUserContext();
    
    const logUserIn = userData => {
      dispatch({
        type: USER_LOGGED_IN,
        userData: userData.user
      });
    };

    const history = useHistory();

    const regRoute = () => {
        history.push("/signup");
    }
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
      e.preventDefault();
      const res = await API.loginUser({
        email,
        password
      });
      logUserIn(res.data);
      history.push("/");
    }    

  return (

    <div id="formlogin">

    
      <div>
        <h2 id="login">log in</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="inputLogin"
            onChange={e => setEmail(e.target.value)}
            type="text" 
            id="email-login" 
            aria-describedby="emailHelp"
            placeholder="    enter email"
          ></input>
        </div>

        <div>
          <input
            className="inputLogin"
            onChange={e => setPassword(e.target.value)}
            type="password"
            id="password-login"
            placeholder="    password"
          ></input>
        </div>

        <p id="loggedin">
          stay logged in?<input type="checkbox"></input>
        </p>

        <div>
          <button className="btnLogin" type="submit">log in</button>
          <button className="btnLogin" onClick={regRoute}>register</button>
          <button className="btnLogin">
            guest checkout
          </button>
          <button className="btnLogin">forgot login</button>
        </div>

      </form>


    </div>
  );
}

export default Login;
