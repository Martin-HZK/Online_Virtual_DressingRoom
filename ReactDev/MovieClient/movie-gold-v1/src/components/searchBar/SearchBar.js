import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import api from "../../api/axiosConfig";
import "./SearchBar.css";

const SearchBar = ({ searchCourse, courseSearchUserFunction }) => {
   //  const [myOptions, setMyOptions] = useState([]);
   // function getData() {
      
   //    fetch("http://localhost:8080/api/v1/getAllClothes")
   //    .then((response) => {
   //       return response.json();
   //    })
   //    .then((res) => {
   //       // console.log(res);
   //       for (var i = 0; i < res.length; i++) {
   //          if (!myOptions.some((obj) => obj.label == res[i].clothes_name)) {
               
   //             // create an object with a label
   //             let object = {
   //                label: res[i].clothes_name,
   //                userName: res[i].category,
                  
   //             };
   //             myOptions.push(object);
   //          }
   //       }

   //    }); 

      
   // }
   // useEffect(() => getData(), [myOptions]);
  return (
      // <div>
      //    <Autocomplete
      //       Style = {{ width: 400 }}
      //       autoComplete
      //       autoHighlight
      //       freeSolo
      //       options = {myOptions}
      //       renderInput = {(data) => (
      //          <TextField {...data} variant = "outlined" label = "Search for your clothes"/>
      //       )}
      //    />
      // </div>

      
         <header className="App-header">
             <h1>GeeksforGeeks Shopping Cart</h1>
             <div className="search-bar">
                 <input
                     type="text"
                     placeholder="Search for GFG Products..."
                     value={searchCourse}
                     onChange={courseSearchUserFunction}
                 />
             <i class="fa fa-search" aria-hidden="true"></i>

             </div>
         </header>
     
    
  )
}

export default SearchBar