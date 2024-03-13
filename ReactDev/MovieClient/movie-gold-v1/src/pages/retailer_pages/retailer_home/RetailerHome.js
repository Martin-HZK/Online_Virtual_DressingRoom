import React, {useEffect, useRef, useState} from 'react'
import './RetailerHome.css'
import OriginAvatar from '../../../avatar.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button, Modal } from "rsuite";

const RetailerHome = () => {
  const hiddenFileInput = useRef(null);
  const [avatar, setAvatar] = useState("https://media.geeksforgeeks.org/img-practice/user_web-1598433228.svg");

  const handleAvatarClick = (e) => {
    hiddenFileInput.current.click();
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]; // TODO: this image should send an post request to the backend!!!

    alert("Would you like to take a photo or choose one from the gallery?");
    if(file) {
      console.log(file);
      // handle the changed avatar
      setAvatar(URL.createObjectURL(file));
    }
  }

  // useEffect(() => {
  //   console.log("Home component");
  // },[])

  const [open, setOpen] = useState(false); 
    const [overflow, setOverflow] = useState(false); 
    const handleOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false);



  return (
    <div className="profile">
      <div className="profile-container">
      <h2>Profile information</h2>
      {/* <img src={OriginAvatar} alt= 'user image' /> */}
      {/* <h2 className="flex items-end justify-center gap-4">Hi, I'm Alpay<span className="wave text-7xl"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" color="var(--orange)" style="color:var(--orange)" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M213.27,104l-18-31.18a20,20,0,0,0-34.64,20l-28-48.5A20,20,0,0,0,98,64.31L90,50.46a20,20,0,0,0-34.64,20l12,20.83-1.17,1A20,20,0,0,0,36.7,118.17L74.7,184a80,80,0,0,0,138.57-80Zm-57.59,60.64.17-.1.14.24Z" opacity="0.2"></path><path d="M220.2,100l-18-31.18a28,28,0,0,0-47.3-1.92L139.56,40.31a28,28,0,0,0-48.12-.63,28,28,0,0,0-43,34.78l3.34,5.79a28,28,0,0,0-22,41.92l38,65.82a87.46,87.46,0,0,0,53.43,41,88.56,88.56,0,0,0,22.92,3A88,88,0,0,0,220.2,100Zm-6.67,62.63A72,72,0,0,1,81.63,180l-38-65.82a12,12,0,0,1,20.79-12l22,38.1a8,8,0,1,0,13.85-8l-38-65.81a12,12,0,0,1,13.5-17.59,11.9,11.9,0,0,1,7.29,5.59l34,58.89a8,8,0,0,0,13.85-8l-26-45h0a12,12,0,0,1,20.78-12L160,107.78a48.08,48.08,0,0,0-11,61,8,8,0,0,0,13.86-8,32,32,0,0,1,11.71-43.71,8,8,0,0,0,2.93-10.93l-10-17.32a12,12,0,0,1,20.78-12l18,31.18A71.49,71.49,0,0,1,213.53,162.62ZM184.27,29.93a8,8,0,0,1,9.8-5.66c15.91,4.27,29,14.11,36.86,27.73a8,8,0,0,1-13.86,8c-5.72-9.92-15.36-17.12-27.14-20.27A8,8,0,0,1,184.27,29.93ZM80.91,237a8,8,0,0,1-11.24,1.33c-11-8.69-20.11-19.58-28.6-34.28a8,8,0,0,1,13.86-8c7.44,12.88,15.27,22.32,24.65,29.72A8,8,0,0,1,80.91,237Z"></path></svg></span></h2> */}
      {/* <p>Personal details and application</p> */}
      <div className="default_circle">
          <button className="changeProfilePic" type="file" onClick={handleAvatarClick} style={{ border: '1px solid #ccc', position: 'absolute', right: 0, bottom: '8px' }}  data-position="bottom">
            {/* <i className="material-icons">edit</i> */}
            <i className="fa-solid fa-pencil"></i>
          </button>
          <input type="file" className="imageFile" hidden="" onChange={handleAvatarChange} ref={hiddenFileInput} style={{display: 'none'}} />
          <img className="profile_pic" src={avatar} alt="samsnottq5m4" />
      </div>

      {/* <button class="changeProfilePic" style="border:1px solid #ccc;position: absolute;right: 0; bottom: 8px;" data-position="bottom"><i class="material-icons">edit</i></button> */}

      <article className="profile-information">
        <hr />
        <section className="profile-information-section">
          <h3>Email</h3><p>samsnottingham4@gmail.com</p>
        </section>
        <hr />
        <section className="profile-information-section">
          <h3>Password</h3><p>*********</p>
          </section>
        <hr />
        <section className="profile-information-section">
          <h3>Fullname</h3>
          <p>Martin</p>
        </section>
        <hr />
        <section className="profile-information-section">
          <h3>Address</h3>
          <p>N/A</p></section>
        <hr />
        <section className="profile-information-section">
          <h3>Name of Your Shop</h3>
          <p>N/A</p></section>
          <hr />
      </article>
              
        <section className="profile-buttons">
          <button type="button" className="active-button-style">Edit profile</button>
          <button type="button" className="passive-button-style">Delete account</button>
        </section>
      </div>




      <Modal overflow={overflow} 
            open={open} onClose={handleClose}> 
          <Modal.Header> 
              <Modal.Title>GeeksforGeeks</Modal.Title> 
          </Modal.Header> 
          <Modal.Body> 
            This is the place to place the photo taker!
          </Modal.Body> 
          <Modal.Footer> 
              <Button onClick={handleClose} appearance="primary"> 
                  Ok 
              </Button> 
              <Button onClick={handleClose} appearance="subtle"> 
                  Cancel 
              </Button> 
          </Modal.Footer> 
      </Modal> 
    </div>
  )
}

export default RetailerHome