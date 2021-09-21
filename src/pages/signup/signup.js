import React from "react";
import "./signup.css";

function Signup() {
  return (
    <div>
      <div>
        <div>
          <h2>Sign Up</h2>
        </div>
      </div>
      <form>
        <div>
          <input type="text" id="name-signup" placeholder="Enter name" />
        </div>
        <div>
          <input type="text" id="email-signup" placeholder="Enter email" />
        </div>
        <div>
          <input
            type="password"
            id="password-signup"
            placeholder="Create password"
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
