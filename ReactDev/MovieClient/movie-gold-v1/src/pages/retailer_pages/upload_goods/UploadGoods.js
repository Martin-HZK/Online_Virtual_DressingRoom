import axios from 'axios';
import React, { useState, useRef} from 'react'



const UploadGoods = () => {
  
  const [file, setFile] = useState();
  const onFileChange = (event) => {
      // Updating the state
      setFile({ file: event.target.files[0] });
      console.log(event.target.files[0]);
  };
  const onFileUpload = async () => {
      // Client ID
    //   const clientId = "ab555a4f28006b6",
    //       auth = "Client-ID " + clientId;

      // Creating an object of formData
      const formData = new FormData();

      // Adding our image to formData
      formData.append("file", file);

      // Making the post request
      await fetch("https://api.imgur.com/3/image/", {
          // API Endpoint
          method: "POST", // HTTP Method
          body: formData, // Data to be sent
          headers: {
              // Setting header
              Authorization: "Bearer 23db9ae15428451d01f75494ba18be93cd0c2109",
              Accept: "application/json",
          },
      })
          // Handling success
          .then(
              (res) =>
                  alert("image uploaded") &&
                  console.log(res)
          )
          .catch(
              (err) => alert("Failed") && console.log(err)
          );
  };
  return (
      <>
          <input
              name="file"
              type="file"
              onChange={onFileChange}
          />
          <button onClick={onFileUpload}>Upload</button>
      </>
  );
}

export default UploadGoods