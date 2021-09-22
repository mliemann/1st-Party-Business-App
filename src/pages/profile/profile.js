import React from 'react';
import "./profile.css";

function Profile () {
    return (
    <div id="profilecontainer">
            <div>
                <h2 id="profile">Profile</h2>
            </div>
    
        <form>
            
                <input 
                className="input"
                type="text" 
                id="email-change" 
                placeholder="    Enter New Email" 
                />
                <button className="btnprofile" type="submit">change email</button>
          
           
                <input 
                className="input"
                type="password" 
                id="password-change" 
                placeholder="    Enter New Password" 
                ></input>
            <button className="btnprofile" type="submit">change password</button>
            
                <input
                className="input"
                type="text"
                id="phone-change"
                placeholder="    Enter New Phone Number"
                />
                <button className="btnprofile" type="submit">change phone number</button>
            
            <div>
                <button className="btnprofile" type="submit">view analytics</button>
            </div>
        </form>
    </div>
    )
}

export default Profile;