import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import api from "../../api/axiosConfig";
import "./Login.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
const Login = () => {
  // 使用 useState 创建 state 变量来管理输入的用户名和密码
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setChecked(!checked);
  }

  // 处理用户名输入变化
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // 处理密码输入变化
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 处理登录按钮点击事件
  const handleLogin = async() => {
    // 在这里可以处理登录逻辑，使用 username 和 password 的值
    console.log("Username:", username);
    console.log("Password:", password);
    const loginInfo = {
      username: username,
      password: password
    }

    if (!checked) {
      console.log("Please confirm the Ethical issue");
      alert("Please confirm the Ethical issue!");
      return;
    }
    try{
      const response = await api.post("/api/v1/login", loginInfo);
      console.log(response.data)
      if(response.data == true) {
        console.log("Login success!Redirecting to upload image page");
        navigate("/uploadimage");
      } else {
        console.log("Login failed! Please check your username and password!");
        alert("Login failed! Please check your username and password!");
      }
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-container">
      
      <div className="input-container">
        <i className="fa-solid fa-user"></i>
        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
      </div>
      <div className="input-container">
        <i className="fa-solid fa-lock"></i>
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      </div>
      
      <div className="checkbox-container">
        <input type="checkbox" 
            checked={checked}
            onChange={handleCheckboxChange}
        />
        <label>I have read and confirm the Ethical issue.
        </label>
      </div>
      
      {/* 登录按钮，点击时触发 handleLogin 函数 */}
      <button onClick={handleLogin}>Login</button>
      <div className="login-footer">

        <div className="login-footer-left">

          <button className="login-footer-button" onClick={() => {window.location.href = 'https://g202319.github.io/project/';}}>About Us</button>
          <button className="login-footer-button">Privacy Policy</button>
        </div>


        <div className="all-rights">
        2023 GRPTeam. All Rights Reserved
        </div>

      </div>
      </div>


      
    </div>

// {/* <div className="login-container">
//   <form className="login-form">
//     <input type="text" placeholder="User Name" value={username} onChange={handleUsernameChange} />
//     <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
    
//     <button type="submit" onClick={handleLogin}>GET STARTED</button>
//     <div className="login-footer">
//       Start with your T-Mall/Taobao account?
//     </div>
//   </form>
// </div> */}
  )
}

export default Login;
