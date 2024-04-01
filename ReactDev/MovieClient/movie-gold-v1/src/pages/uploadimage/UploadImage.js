import { Button } from '@mui/material';
import './UploadImage.css';
import { useState, useRef } from 'react'
import React from 'react'

const UploadImage = () => {
    console.log("UploadImage component");
  
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












  return (
    <div className='home-container'>
      <div className='container'>
        <form className='uploadimage-container'>
        <WebCam/>
        </form>
      </div>
    </div>

  )
}



export default UploadImage