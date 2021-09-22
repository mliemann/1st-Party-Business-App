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
    <div>
      <div>
        <div>
          <h2>Log In</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={e => setEmail(e.target.value)}
            type="text" 
            id="email-login" 
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
        </div>
        <div>
          <input
            onChange={e => setPassword(e.target.value)}
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
