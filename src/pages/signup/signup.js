import React from "react";
import "./signup.css";

function Signup() {
  return (
    <div id="formsignup">

        <div>
          <h2 id="signup">sign up</h2>
        </div>

     
      <form>

        <div>
          <input type="text" className="input" id="name-signup" placeholder="    enter name" />
        </div>

        <div>
          <input type="text" className="input" id="email-signup" placeholder="    enter email" />
        </div>

        <div>
          <input
            className="input"
            type="password"
            id="password-signup"
            placeholder="    create password"
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
