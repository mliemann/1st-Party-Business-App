import React from "react";
import "./profile.css";
import Upload from "../../components/Upload/upload";
import { useUserContext } from "../../providers/user";
import Login from "../login/login"




function Profile() {

  const emailUpdate = async (e, userid) => {
    e.preventDefault();

  
    const email = document.getElementById("email-change").value.trim();
    

    console.log(email);

    if (userid, email) {
      const response = await fetch("/api/user/profile/email/" + userid , {
        method: "PUT",
        body: JSON.stringify({email}),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert(response.statusText);
      }
    }
  };

  const passwordUpdate = async (e, userid) => {
    e.preventDefault();

  
    const password = document.getElementById("password-change").value.trim()
    

    console.log(password);

    if (userid, password) {
      const response = await fetch("/api/user/profile/password/" + userid , {
        method: "PUT",
        body: JSON.stringify({password}),
        
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert(response.statusText);
      }
    }
  };

  const [state] = useUserContext();



  return (
    <div>
    {state.isLoggedIn ? (
    <div id="profilecontainer">
      <div>
        <h2 id="profile">profile</h2>
      </div>

      <form id="formprofile">
        <input
          className="inputProfile"
          type="text"
          id="email-change"
          placeholder="enter new email"
        />
        <button className="btnprofile" type="submit" onClick={(e) => emailUpdate(e, state.userData.id)}>
          change email
        </button>

        <input
          className="inputProfile"
          type="password"
          id="password-change"
          placeholder="enter new password"
        ></input>
        <button className="btnprofile" type="submit" onClick={(e) => passwordUpdate(e, state.userData.id)}>
          change password
        </button>

        <input
          className="inputProfile"
          type="text"
          id="phone-change"
          placeholder="enter new phone number"
        />
        <button className="btnprofile" type="submit">
          change phone number
        </button>

        {/* <div>
                <button className="btnprofile" type="submit">view analytics</button>
            </div> */}
      </form>
      <Upload />
    </div>
    ) : (
      <Login />
      )}
      </div>
  );
}

export default Profile;
