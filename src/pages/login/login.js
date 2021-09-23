import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

async function loginUser(credentials) {
  return fetch('http://localhost:3001/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function Login({setUser}) {
    const history = useHistory();

    const regRoute = () => {
        history.push("/signup");
    }
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
      e.preventDefault();
      const user = await loginUser({
        email,
        password
      });
      setUser(user);
      history.push("/landing");
    }    

  return (

    <div id="formlogin">

    
      <div>
        <h2 id="login">log in</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="input"
            onChange={e => setEmail(e.target.value)}
            type="text" 
            id="email-login" 
            aria-describedby="emailHelp"
            placeholder="    enter email"
          ></input>
        </div>

        <div>
          <input
            className="input"
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
