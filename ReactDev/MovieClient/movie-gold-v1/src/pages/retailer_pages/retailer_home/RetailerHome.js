import React, {useEffect, useRef, useState, useContext} from 'react'
import './RetailerHome.css'
import OriginAvatar from '../../../avatar.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import api from '../../../api/axiosConfig';
import { Modal, Form, Input, Button } from 'antd';
import { set } from 'rsuite/esm/utils/dateUtils';
import { UserContext } from '../../../userContextProvider/UserContextProvider';

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
      // caching
      console.log('Avatar cached')
      // console.log(JSON.stringify(file));
      console.log(file);
      localStorage.setItem("avatar",JSON.stringify(file)); // store the avatar in the local storage
    }
  }

  
  // get the avatar from the local storage each time the page is loaded
  // useEffect(() => {
  //   const storedAvatar = localStorage.getItem("avatar");
  //   console.log('Page loaded')
  //   if(storedAvatar) {
  //     console.log(storedAvatar);
  //     setAvatar(URL.createObjectURL(JSON.parse(storedAvatar)));
  //   } else {
  //     setAvatar("https://media.geeksforgeeks.org/img-practice/user_web-1598433228.svg");
  //   }
  // }, [])


    const [open, setOpen] = useState(false); 
    const [overflow, setOverflow] = useState(false); 
    const handleOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false);


    const [editModalVisible, setEditModalVisible] = useState(false);
    const { globUsername, setGlobUsername } = useContext(UserContext);
    const [originalUsername, setOriginalUsername] = useState(globUsername);
    // const [username, setUsername] = useState('martin');
    const [itemNumber, setItemNumber] = useState(null); // TODO: this should be fetched from the backend
    const [password, setPassword] = useState('*********');

    const handleEditProfile = () => {
      // setOriginalUsername(username);
      setOriginalUsername(globUsername);
      setEditModalVisible(true);
    };
  
    const handleSaveProfile = async() => {
      // 在这里添加保存修改的逻辑，例如发送请求到后端保存用户名和密码
      console.log('The original username is: ' + originalUsername)
      console.log('The global username is: ' + globUsername)


      try {
        const response = await api.post('/api/v1/retailer/edit_profile', {
          originalUsername: originalUsername,
          username: globUsername,
          password: password
        });

        console.log(response.data);
        if (response.data == true)
          alert('Identification changed successfully');
        else
          alert('Identification changed failed');
      } catch(error) {
        console.error(error);
      }

      // 保存完毕后关闭编辑模态框
      setEditModalVisible(false);
      // alert('Identification changed successfully');
    };
  
    const handleCancelEdit = () => {
      // 取消编辑，恢复原始用户名和密码
    
      setGlobUsername(originalUsername);
      setPassword('*********');
      setEditModalVisible(false);
    };

    // useEffect(async() => {
    //   const response = await api.get('/api/v1/retailer/get_item_number/${globUsername}');
    //   console.log(response.data)
    //   setItemNumber(response.data);
    // }, []);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await api.get(`/api/v1/retailer/get_item_number/${globUsername}`);
          console.log(response.data);
          setItemNumber(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    
      // 返回一个清理函数用于在组件卸载或更新时执行清理操作
      return () => {
        // 在这里可以执行需要的清理操作，例如取消订阅或关闭连接等
      };
    }, [globUsername]);

  return (
    <div className="profile">
      <div className="profile-container">
      <h2>Profile information</h2>
      <div className="default_circle">
          <button className="changeProfilePic" type="file" onClick={handleAvatarClick} style={{ border: '1px solid #ccc', position: 'absolute', right: 0, bottom: '8px' }}  data-position="bottom">
            <i className="fa-solid fa-pencil"></i>
          </button>
          <input type="file" className="imageFile" hidden="" onChange={handleAvatarChange} ref={hiddenFileInput} style={{display: 'none'}} />
          <img className="profile_pic" src={avatar} alt="wrong display" />
      </div>
      <article className="profile-information">
        <hr />
        <section className="profile-information-section">
          <h3>Username</h3><p>{globUsername}</p>
        </section>
        <hr />
        <section className="profile-information-section">
          <h3>Password</h3><p>{password}</p>
          </section>

        <hr />
        <section className="profile-information-section">
          <h3>Number of items</h3>
          <p>{itemNumber}</p>
        </section>
        <hr />
      </article>
              
        <section className="profile-buttons">
          <button type="button" className="active-button-style" onClick={handleEditProfile}>Edit profile</button>
        </section>
      </div>
      <Modal
        title="Edit Profile"
        visible={editModalVisible}
        onCancel={handleCancelEdit}
        footer={[
          <Button key="cancel" onClick={handleCancelEdit}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSaveProfile}>
            Save
          </Button>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item label="Username">
            <Input value={globUsername} onChange={(e) => setGlobUsername(e.target.value)} />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>



      
    </div>
  )
}

export default RetailerHome