import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';

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
      
      <Routes>
          <Route path="/" element={<Layout/>}>
              {/* here sets all the child route elements */}
              {/* <Route path="/" element={<Home movies={movies}/>} ></Route> */}
              <Route path="/" element={<Login/>}></Route>
              {/* <Route path="*" element = {<NotFound/>}></Route> */}

          </Route>
      </Routes>
    </div>
  );
}

export default App;
