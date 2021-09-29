import React from "react";
import "./profile.css";
import Upload from "../../components/Upload/upload";

function Profile() {
  return (
    <div id="profilecontainer">
      <div>
        <h2 id="profile">profile</h2>
      </div>

      <form id="formprofile">
        <input
          className="inputProfile"
          type="text"
          id="email-change"
          placeholder="    enter new email"
        />
        <button className="btnprofile" type="submit">
          change email
        </button>

        <input
          className="inputProfile"
          type="password"
          id="password-change"
          placeholder="    enter new password"
        ></input>
        <button className="btnprofile" type="submit">
          change password
        </button>

        <input
          className="inputProfile"
          type="text"
          id="phone-change"
          placeholder="    enter new phone number"
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
  );
}

export default Profile;
