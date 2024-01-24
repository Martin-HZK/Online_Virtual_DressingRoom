import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';

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
      
    </div>
  );
}

export default App;
