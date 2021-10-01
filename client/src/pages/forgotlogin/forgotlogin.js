import React from "react";
import "./forgotlogin.css";

function Forgot () {

    return (
        <div id="forgotContainer">
            <h1 id="forgotlogin">forgot login</h1>
            <form id="formForgot">
                <input
                className="inputUserEmail"
                type="text"
                id="user-email-change"
                placeholder="enter email"
                />
                <button className="btnprofile" type="submit">reset password</button>
            </form>
        </div>
    )
}

export default Forgot;