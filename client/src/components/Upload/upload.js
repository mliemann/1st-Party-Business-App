import React, { useRef } from "react";
import S3 from "react-aws-s3";
import { useUserContext, USER_UPDATED, } from "../../providers/user";
import crypto from "crypto"
import "./upload.css";


async function updateProfilePic(userid, profileUrl) {
  return fetch('/api/user/profile/' + userid, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({profileUrl: profileUrl})
  })
    .then(data => data.json())
 }

function Upload() {
  const fileInput = useRef();
  const [state, dispatch] = useUserContext();
  const updateUser = userData => {
    dispatch({
      type: USER_UPDATED,
      userData: userData
    });
  };

let test = crypto.randomBytes(12).toString('hex');
console.log(test)



  const handleClick = (event) => {
    event.preventDefault();
    let file = fileInput.current.files[0];
    // let newFileName = fileInput.current.files[0].name.replace(/\..+$/, "");
    let newFileName = crypto.randomBytes(12).toString('hex');

    const config = {
      bucketName: "bestteamproj2",
      region: "us-east-1",
      accessKeyId: process.env.REACT_APP_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_SECRET_KEY,
      s3Url: "https://bestteamproj2.s3.amazonaws.com", /* without the suffix zone added */
    };
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(file, newFileName).then( async (data) => {
      if (data.status === 204) {
        console.log("success");
        const updated = await updateProfilePic(state.userData.id, data.location);
        var newUser = state.user;
        newUser = updated.profileUrl;
        updateUser(newUser);
      } else {
        console.log("fail");
      }
    });
  };

  return (
    <>
      <form className="upload-steps" onSubmit={handleClick}>
        <label>
         
          <input type="file" id="choosefile" ref={fileInput} />
        </label>
       
        <button type="submit" className="btnupload" >upload</button>
      </form>
    </>
  );
}

export default Upload;
