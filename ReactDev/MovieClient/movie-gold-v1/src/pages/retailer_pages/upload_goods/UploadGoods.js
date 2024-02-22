import axios from 'axios';
import React, { useState, useRef} from 'react'



const UploadGoods = () => {
  // const [file, setImage] = useState(null);
  // const fileInputRef = useRef(null); // 使用ref来访问文件输入元素

  // // const [isUploading, setIsUploading] = useState(false);
  // const handleFileChange = (e) => {
  //   // const selectedFile = e.target.files[0];
  //   // setImage(selectedFile);
  //   // console.log(selectedFile);
  //   setImage({file: e.target.files[0]});
  // }

  // const triggerFileSelectPopup = () => fileInputRef.current.click();

  // const handleUpload = async() => {
    
  //  // Client ID
  //  const clientId = "d269de2d512f3cb",
  //   auth = "Client-ID " + clientId;
  //   if (!file) {
  //     alert('Please select an image');
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('file', file);

  //   try {
  //     const response = await fetch('https://api.imgur.com/3/image/', {
  //     // API endpoint
  //     method: "POST",
  //     body: formData,
  //     headers: {
  //       // Setting header
  //       Authorization: auth,
  //       Accept: 'application/json',
  //     },

  // });

  // if (!response.ok) {
  //   // Handling error
  //   throw new Error('Failed to upload image');

  //   }

  //   const data = await response.json();
  //   alert(`Image uploaded successfully`);
  // } catch (err) {
  //   alert('Failed to upload image.');
  //   console.error(err);
  // }
   


  //     // try {
  //     //   const response = await axios.post('https://api.imgur.com/3/image', formData, {
  //     //       headers: {
  //     //         'Authorization': 'Bearer afe254bbe4f2b7962a0c3dad02a4e14504e08327',
  //     //         // 'Cookie': 'IMGURSESSION=6315b6c7ffd1c3a9fdfdb749c4d1c4f6; _nc=1',
  //     //       }
  //     //     });
  //     //   alert(`Image uploaded successfully: aaa`);
  //     //   // console.log(response.data.data.link);
  //     // } catch(err) {
  //     //   console.log(err);
  //     //   alert('Failed to upload image.');
  //     // }

  //     // try {
  //     //   const response = await fetch('https://api.imgur.com/3/image', {
  //     //     method: 'POST',
  //     //     headers: {
  //     //       'Authorization': 'Bearer afe254bbe4f2b7962a0c3dad02a4e14504e08327',
  //     //       // 'Cookie': 'IMGURSESSION=6315b6c7ffd1c3a9fdfdb749c4d1c4f6; _nc=1',
  //     //       },
  //     //       body: formData,
  //     //       });
  //     //     const data = await response.json();
  //     //     alert(`Image uploaded successfully: ${data.data.link}`);
  //     //   } catch(err) {
  //     //     console.log(err);
  //     //     alert('Failed to upload image.');
  //     //   }            
    
     


  // }

  // return (
  //   <div>
  //       <input
  //         style={{ display: "none" }}
  //         // accept=".zip,.rar"
  //         ref={fileInputRef}
  //         // name='image'
  //         onChange={handleFileChange}
  //         type="file"
  //       />
        
  //       <button onClick={triggerFileSelectPopup}>Select Image</button>
  //       <button onClick={handleUpload}>Upload</button>
  //   </div>
  // )

  const [file, setFile] = useState();
  const onFileChange = (event) => {
      // Updating the state
      setFile({ file: event.target.files[0] });
  };
  const onFileUpload = async () => {
      // Client ID
      const clientId = "d269de2d512f3cb",
          auth = "Client-ID " + clientId;

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
              Authorization: "Bearer afe254bbe4f2b7962a0c3dad02a4e14504e08327",
              Cookie: "IMGURSESSION=6315b6c7ffd1c3a9fdfdb749c4d1c4f6;_nc=1",
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