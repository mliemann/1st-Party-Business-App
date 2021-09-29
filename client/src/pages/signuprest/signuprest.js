import React from 'react';
import "./signuprest.css";

function Signuprest () {
    return (
    <div>
        <div id="formsignupres">
            <div>
            <h2 id="signupRest">sign up!</h2>
            </div>
        <form>
            <div>
            <input
                className="inputRest" 
                type="text" 
                id="name-signup" 
                placeholder="    enter name" 
            />
            </div>
            <div>
            <input 
                className="inputRest" 
                type="text" 
                id="email-signup" 
                placeholder="     enter email" 
            />
            </div>
            <div>
            <input
                className="inputRest" 
                type="text"
                id="phone-signup"
                placeholder="    enter phone number"
            />
            </div>
            <div>
            <button className="btnloginRest" type="submit">send registration email</button>
            </div>
        </form>
        </div>
    </div>
    )
}

export default Signuprest;