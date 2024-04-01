import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import api from "../../api/axiosConfig";
import "./Login.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { UserContext } from "../../userContextProvider/UserContextProvider";

const Login = () => {
  const { setGlobUsername } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setChecked(!checked);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async() => {
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
        navigate("/home", { state: { propToPass: username} });
        setGlobUsername(username);
      } else {
        console.log("Login failed! Please check your username and password!");
        alert("Login failed! Please check your username and password!");
      }
    } catch(err) {
      console.log(err);
    }
  };

  const handleRetailerLogin = async() => {
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
      const response = await api.post("/api/v1/retailer/login", loginInfo);
      console.log(response.data)
      if(response.data == true) {
        console.log("Login success!Redirecting to upload image page");
        navigate("/retailer/home", { state: { propToPass: username} });
        setGlobUsername(username);
      } else {
        console.log("Login failed! Please check your username and password!");
        alert("Login failed! Please check your username and password!");
      }
    }
    catch(err) {
      console.log(err);
    }
  }



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
      
      <div className="login-button-container">
        <button onClick={handleLogin}>User Login</button>
        <button onClick={handleRetailerLogin}>Retailer Login</button>
      </div>

      <div className="login-footer">
        <div className="login-footer-left">

          <button className="login-footer-button" onClick={() => navigate("/")}>Home</button>
          <button className="login-footer-button" onClick={() => {window.location.href = 'https://g202319.github.io/project/';}}>About Us</button>
          <button className="login-footer-button">Privacy Policy</button>
          <button className="login-footer-button" onClick={() => {navigate("/sign_up")}}>Sign Up</button>
        </div>
        <div className="all-rights">
        2023 GRPTeam. All Rights Reserved
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login;
