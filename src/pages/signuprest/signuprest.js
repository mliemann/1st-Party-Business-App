import React from 'react';
import "./signuprest.css";

function Signuprest () {
    return (
    <div>
        <div id="formsignupres">
            <div>
            <h2 id="signup">sign up!</h2>
            </div>
        <form>
            <div>
            <input
                className="input" 
                type="text" 
                id="name-signup" 
                placeholder="    enter name" 
            />
            </div>
            <div>
            <input 
                className="input" 
                type="text" 
                id="email-signup" 
                placeholder="     enter email" 
            />
            </div>
            <div>
            <input
                className="input" 
                type="text"
                id="phone-signup"
                placeholder="    enter phone number"
            />
            </div>
            <div>
            <button className="btnlogin" type="submit">send registration email</button>
            </div>
        </form>
        </div>
    </div>
    )
}

export default Signuprest;