/*
 * GPL License
 * Version 3, 29 June 2007
 *
 * Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 * Author: Zhikai Hu
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import api from "../../api/axiosConfig";
import "./SearchBar.css";

const SearchBar = ({ searchCourse, courseSearchUserFunction }) => {
  return (
         <header className="App-header">
             <h1>Select Your Clothes!</h1>
             <div className="search-bar">
                 <input
                     placeholder="Search for GFG Products..."
                     type="text"
                     value={searchCourse}
                     onChange={courseSearchUserFunction}
                 />
             <i className="fa fa-search" aria-hidden="true"></i>

             </div>
         </header>
  )
}

export default SearchBar