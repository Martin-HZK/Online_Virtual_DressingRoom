import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import api from "../../api/axiosConfig";

const SearchBar = () => {
    const [myOptions, setMyOptions] = useState([]);
   function getData() {
      
      fetch("http://localhost:8080/api/v1/getAllClothes")
      .then((response) => {
         return response.json();
      })
      .then((res) => {
         // console.log(res);
         for (var i = 0; i < res.length; i++) {
            if (!myOptions.some((obj) => obj.label == res[i].clothes_name)) {
               
               // create an object with a label
               let object = {
                  label: res[i].clothes_name,
                  userName: res[i].category,
                  
               };
               myOptions.push(object);
            }
         }


         // for (var i = 0; i < res.length; i++) {
         //    if (!myOptions.some((obj) => obj.label == res[i].clothes_name)) {
               
         //       // create an object with a label
         //       let object = {
         //          label: res[i].clothes_name,
         //          category: res[i].category,
         //          brand: res[i].brand,
         //          // usersName: response.data[i].username,
         //       };
         //       myOptions.push(object);
         //    }
         // }
         // setMyOptions(myOptions);
      }); 

      
   }

   // const getData = async () => {
   //    try {
   //       const response = await api.get("api/v1/getAllClothes");

   //       for (var i = 0; i < response.data.length; i++) {
   //          if (!myOptions.some((obj) => obj.label == response.data[i].clothes_name)) {
               
   //             // create an object with a label
   //             let object = {
   //                label: response.data[i].clothes_name,
   //                category: response.data[i].category,
   //                brand: response.data[i].brand,
   //                // usersName: response.data[i].username,
   //             };
   //             myOptions.push(object);
   //          }
   //       }
         
   //       setMyOptions(myOptions);
   //    } catch (err) {
   //       console.log(err);
   //    }

   // }
   useEffect(() => getData(), [myOptions]);
  return (
      <div>
         {/* <h2>
         {" "} */}
         {/* Using the <i> Material UI Autocomplete </i> component to implement search. </h2> */}
         <Autocomplete
            Style = {{ width: 400 }}
            autoComplete
            autoHighlight
            freeSolo
            options = {myOptions}
            renderInput = {(data) => (
               <TextField {...data} variant = "outlined" label = "Search for your clothes"/>
            )}
         />
      </div>
    
  )
}

export default SearchBar