import './App.css';
import api from './api/axiosConfig';
import React, {useState, useEffect} from 'react';
import LoginLayout from './components/LoginLayout';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './pages/login/Login';
import UploadImage from './pages/uploadimage/UploadImage';
import Navigator from './components/navigator/Navigator';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';
import DressingRoom from './pages/dressingRoom/DressingRoom';
import BodyFeature from './pages/bodyFeature/BodyFeature';
import AIRecommendation from './pages/aiRecommendation/AIRecommendation';
import NonLoginLayout from './components/NonLoginLayout';
import Home from './pages/home/Home';
import RetailerHome from './pages/retailer_pages/retailer_home/RetailerHome';
import RetailerNonLoginLayout from './components/RetailerNonLoginLayout';
import {UploadGoods} from './pages/retailer_pages/upload_goods/UploadGoods';
import SignUp from './pages/signUp/SignUp';
import { UserContextProvider } from './userContextProvider/UserContextProvider';
// import UploadGoods from './pages/retailer_pages/upload_goods/UploadGoods';
function App() {

  const [movies, setMovies] = useState();
  const getMovies = async() => {

    // ensure better UX using try-catch block
    try{
      const response = await api.get("/api/v1/movies");
      // can add the functionality to return the status code

      console.log(response.data);
      
      setMovies(response.data);
    }catch(err) {
      console.log(err);
    }

   

      
  }

  useEffect(() => {
    getMovies();
  },[])
  
  return (
    <UserContextProvider>
    <div className="App">
      {/* <Navigator/> */}
      
        <Routes>
            <Route path="/" element={<LoginLayout/>}>
              <Route index element={<Login/>}></Route>
              <Route path="/sign_up" element={<SignUp/>}></Route>
              <Route element={<NonLoginLayout/>}>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/uploadimage" element={<UploadImage/>}></Route>
                <Route path='/bodyfeature' element={<BodyFeature/>}></Route>
                <Route path='/dressingroom' element={<DressingRoom/>}></Route>
                {/* <Route path='/shoppingcart' element={<ShoppingCart/>}></Route> */}
                <Route path='/airecommendation' element={<AIRecommendation/>}></Route>
              </Route>

            </Route>
            <Route element={<RetailerNonLoginLayout/>}>
                <Route path='/retailer/home' element={<RetailerHome/>}></Route>
                <Route path='/retailer/uploadimage' element={<UploadGoods/>}></Route>
            </Route>
        </Routes>
    </div>
    </UserContextProvider>
  );
}

export default App;
