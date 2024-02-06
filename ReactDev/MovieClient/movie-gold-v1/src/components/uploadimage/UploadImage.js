import { Button } from '@mui/material';
import './UploadImage.css';
import { useState, useRef } from 'react'
import React from 'react'

const UploadImage = () => {


    console.log("UploadImage component");
    
    // const uploadImage = async() => {
    //     // 在这里可以处理登录逻辑，使用 username 和 password 的值
    //     console.log("Username:", username);
    //     console.log("Password:", password);
    //     const loginInfo = {
    //       username: username,
    //       password: password
    //     }
    
    //     try{
    //       const response = await api.post("/api/v1/login", loginInfo);
    //       console.log(response.data)
    //       if(response.data == true) {
    //         console.log("Login success!Redirecting to upload image page");
    //         navigate("/uploadimage");
    //       }
    //     } catch(err) {
    //       console.log(err);
    //     }
    //   };


      const [image, setImage] = useState("");
      const inputFile = useRef(null);
    
      const uploadImage = e => {
        const { files } = e.target;
        if (files && files.length) {
          const filename = files[0].name;
    
          var parts = filename.split(".");
          const fileType = parts[parts.length - 1];
          console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.
    
          setImage(files[0]);
        }
      };
    
      const onButtonClick = () => {
        inputFile.current.click();
      };
    
      console.log("imageimage", image);











  return (
    <div>
      <input
        style={{ display: "none" }}
        // accept=".zip,.rar"
        ref={inputFile}
        onChange={uploadImage}
        type="file"
      />
      <div className="button" onClick={onButtonClick}>
        Upload
      </div>
    </div>
    
  )
}

export default UploadImage