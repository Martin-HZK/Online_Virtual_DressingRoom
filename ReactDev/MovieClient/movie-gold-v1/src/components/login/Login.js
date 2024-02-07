import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import api from "../../api/axiosConfig";

const Login = () => {
  // 使用 useState 创建 state 变量来管理输入的用户名和密码
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
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

    try{
      const response = await api.post("/api/v1/login", loginInfo);
      console.log(response.data)
      if(response.data == true) {
        console.log("Login success!Redirecting to upload image page");
        navigate("/uploadimage");
      }
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div>
      <label>
        Username:
        {/* 输入框，value 和 onChange 用于绑定输入的值和处理输入变化的函数 */}
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        {/* 密码框，同样使用 value 和 onChange */}
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      {/* 登录按钮，点击时触发 handleLogin 函数 */}
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login;
