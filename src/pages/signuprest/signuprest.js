import React from 'react';
import "./signuprest.css";

function Signuprest () {
    return (
    <div>
        <div>
            <div>
            <h2>Sign Up</h2>
            </div>
        </div>
        <form>
            <div>
            <input 
                type="text" 
                id="name-signup" 
                placeholder="Enter Name" 
            />
            </div>
            <div>
            <input 
                type="text" 
                id="email-signup" 
                placeholder="Enter Email" 
            />
            </div>
            <div>
            <input
                type="text"
                id="phone-signup"
                placeholder="Enter Phone Number"
            />
            </div>
            <div>
            <button type="submit">Send Registration Email</button>
            </div>
        </form>
    </div>
    )
}

export default Signuprest;