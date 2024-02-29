import React from 'react'
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const SearchBar = () => {
    const [myOptions, setMyOptions] = useState([]);
   function getData() {
      
      // fetch data
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
         return response.json();
      })
      .then((res) => {
         for (var i = 0; i < res.length; i++) {
            if (!myOptions.some((obj) => obj.label == res[i].name)) {
               
               // create an object with a label
               let object = {
                  label: res[i].name,
                  usersName: res[i].username,
               };
               myOptions.push(object);
            }
         }
         setMyOptions(myOptions);
      }); 
   }
   useEffect(() => getData(), [myOptions]);
  return (
    <div>
         <h2>
         {" "}
         Using the <i> Material UI Autocomplete </i> component to implement search. </h2>
         <Autocomplete
            Style = {{ width: 400 }}
            autoComplete
            autoHighlight
            freeSolo
            options = {myOptions}
            renderInput = {(data) => (
               <TextField {...data} variant = "outlined" label = "Search Box"/>
            )}
         />
      </div>
  )
}

export default SearchBar