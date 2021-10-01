import React, {useState} from "react";
import "./forgotlogin.css";
import API from "../../utils/API";

function Forgot () {
    // const [email, setEmail] = useState();

    // const resetPassword = input => {

    // }
    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const res = await API.resetPassword({
    //       email,
    //     });
    //     resetPassword();
       
    //   } 

    return (
        <div id="forgotContainer">
    
            <div>
            <h1 id="forgotlogin">forgot login</h1>
            <form  id="formForgot">
                <input
                className="inputUserEmail"
                type="text"
                id="user-email-change"
                placeholder="enter email"
                />
                <button className="btnprofile" type="submit">reset password</button>
            </form>
            </div>
   
            <div>
                <h4>you will be emailed a new password within 24hrs</h4>
            </div>
            
        </div>
           
    )
}

export default Forgot;