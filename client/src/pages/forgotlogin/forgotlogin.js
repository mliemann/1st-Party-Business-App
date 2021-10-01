import React from "react";
import "./forgotlogin.css";

function Forgot () {

    return (
        <div>
            <h1>forgot login</h1>
            <form id="formForgot">
                <input
                className="inputUserEmail"
                type="text"
                id="user-email-change"
                placeholder="enter email"
                />
                <button className="btnprofile" type="submit">
                change email
                </button>
            </form>
        </div>
    )
}

export default Forgot;