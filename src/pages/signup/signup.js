import React from "react";
import "./signup.css";

function Signup() {
  return (
    <div id="formsignup">

        <div>
          <h2 id="signup">Sign Up</h2>
        </div>

     
      <form>

        <div>
          <input type="text" className="input" id="name-signup" placeholder="    Enter name" />
        </div>

        <div>
          <input type="text" className="input" id="email-signup" placeholder="    Enter email" />
        </div>

        <div>
          <input
            className="input"
            type="password"
            id="password-signup"
            placeholder="    Create password"
          />
        </div>

        <div>
          <button className="btnlogin" type="submit">sign up</button>
        </div>

      </form>

    </div>
  );
}

export default Signup;
