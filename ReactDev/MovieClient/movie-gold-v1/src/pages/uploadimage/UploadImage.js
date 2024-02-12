import { Button } from '@mui/material';
import './UploadImage.css';
import { useState, useRef } from 'react'
import React from 'react'
import WebCam from '../../components/webCam/WebCam';
import { useNavigate } from 'react-router';
const UploadImage = () => {
    console.log("UploadImage component");
  
  const [image, setImage] = useState("");
  const inputFile = useRef(null);
  const navigate = useNavigate();

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

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submitForm");
    // TODO: submit the form

    navigate("/bodyfeature");
  }












  return (
    <div className='home-container'>
      <div className='container'>
        <form className='uploadimage-container'>
        <WebCam/>
        {/* <input
          style={{ display: "none" }}
          // accept=".zip,.rar"
          ref={inputFile}
          onChange={uploadImage}
          type="file"
        />
        <div className="button" onClick={onButtonClick}>
          Upload
        </div> */}
        <button type='submit' id='login-button' onClick={(e) => submitForm(e)}>Submit</button>
        </form>
      </div>
    </div>

  )
}



export default UploadImage