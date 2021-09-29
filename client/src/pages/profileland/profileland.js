import React from "react";
import "./profileland.css";
import { useHistory } from "react-router-dom";

function ProfileLand() {
  const history = useHistory();

  const editProfile = () => {
    history.push("/profile");
  };

  return (
    <div>
      <button className="btn" id="landingbtn" onClick={editProfile}>
        edit profile
      </button>
    </div>
  );
}

export default ProfileLand;
