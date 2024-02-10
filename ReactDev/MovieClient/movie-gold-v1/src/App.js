import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/home/Home';
import Login from './pages/login/Login';
import UploadImage from './pages/uploadimage/UploadImage';
import Navigator from './components/navigator/Navigator';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';
import DressingRoom from './pages/dressingRoom/DressingRoom';
import BodyFeature from './pages/bodyFeature/BodyFeature';
import AIRecommendation from './pages/aiRecommendation/AIRecommendation';
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
    <div className="App">
      <Navigator/>
      <h1>React routing base</h1>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Login/>}></Route>
              <Route path="/uploadimage" element={<UploadImage/>}></Route>
              <Route path='/bodyfeature' element={<BodyFeature/>}></Route>
              <Route path='/dressingroom' element={<DressingRoom/>}></Route>
              <Route path='/shoppingcart' element={<ShoppingCart/>}></Route>
              <Route path='/airecommendation' element={<AIRecommendation/>}></Route>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
