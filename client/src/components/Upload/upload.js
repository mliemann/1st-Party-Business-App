import React, { useRef } from "react";
import S3 from "react-aws-s3";
import "./upload.css";

function Upload() {
  const fileInput = useRef();

  const handleClick = (event) => {
    event.preventDefault();
    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name.replace(/\..+$/, "");
    const config = {
      bucketName: "bestteamproj2",
      region: "us-east-1",
      accessKeyId: process.env.REACT_APP_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_SECRET_KEY,
      s3Url: "https://bestteamproj2.s3.amazonaws.com", /* without the suffix zone added */
    };
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(file, newFileName).then((data) => {
      console.log(data);
      if (data.status === 204) {
        console.log("success");
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
