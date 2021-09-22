import React from 'react';
import "./signuprest.css";

function Signuprest () {
    return (
    <div>
        <div id="form">
            <div>
            <h2 id="signup">Sign Up</h2>
            </div>
        <form>
            <div>
            <input
                className="input" 
                type="text" 
                id="name-signup" 
                placeholder="    Enter Name" 
            />
            </div>
            <div>
            <input 
                className="input" 
                type="text" 
                id="email-signup" 
                placeholder="     Enter Email" 
            />
            </div>
            <div>
            <input
                className="input" 
                type="text"
                id="phone-signup"
                placeholder="    Enter Phone Number"
            />
            </div>
            <div>
            <button className="btnlogin" type="submit">Send Registration Email</button>
            </div>
        </form>
        </div>
    </div>
    )
}

export default Signuprest;