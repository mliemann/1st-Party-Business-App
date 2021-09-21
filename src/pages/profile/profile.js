import React from 'react';
import "./profile.css";

function Profile () {
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
                id="email-change" 
                placeholder="Enter New Email" 
                />
                <button type="submit">Change Email</button>
            </div>
            <div>
                <input 
                type="password" 
                id="password-change" 
                placeholder="Enter New Password" 
                />
                <button type="submit">Change Password</button>
            </div>
            <div>
                <input
                type="text"
                id="phone-change"
                placeholder="Enter New Phone Number"
                />
                <button type="submit">Change Phone Number</button>
            </div>
            <div>
                <button type="submit">View Analytics</button>
            </div>
        </form>
    </div>
    )
}

export default Profile;