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
import React from 'react'
import './UserCart.css'
import axios from 'axios'
import {useState, useContext} from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import { UserContext } from '../../userContextProvider/UserContextProvider'

const UserCart = ({
    cartCourses,
    deleteCourseFromCartFunction,
    totalAmountCalculationFunction,
    setCartCourses,
})  => {
    const { globClothesID, setGlobClothesID } = useContext(UserContext);
    const navigate = useNavigate();
    console.log(globClothesID);
    console.log('hi')
    const ids = cartCourses.map(item => item.product.clothes_ID);
    console.log(ids);
    const onFileChange = (event) => {
        setFile(event.target.files[0]);
        console.log("selected");
    }


    // testing yang's API
    const handleClothesUpload = async() => {
        // const formData = new FormData();
        // formData.append('file', file);

        const myData = {
            // "Image_Name": globClothesID, // this file is for testing, should match the actual name!
            "image_name": "20240331_150720", // this file is for testing, should match the actual name!
            "model_type": "StableVITON",  // HRVITON ORF StableVITON
            // "clothes_ids": ids
            "clothes_ids": ['00006_00']
            // "Image_Name": "20240329-213620", // this file is for testing, should match the actual name!
            // "Model_Type": "StableVITON",  // HRVITON ORF StableVITON
            // "Clothes_ID": ids
        }
            
        
        try {
            const response = await axios.post('http://localhost:8000/TryOns/', myData, {
            headers: {
                'Content-Type': 'application/json',
            },
            });
            console.log( response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const getSwappwedClothes = async() => {

        try {
            const url = `http://localhost:8000/TryOns/${id}`;
            const response = await axios.get(url, { responseType: 'blob' });
        } catch (error) {
            console.error(error);
        }
        
    }

    function convertImagePath(imagePath) {
        const baseUrl = "http://localhost:8080";
        let relativePath = imagePath.replace('src/main/resources/static/', '');
        
        if (relativePath.endsWith(',')) {
            relativePath = relativePath.slice(0, -1);
        }

        return `${baseUrl}/${relativePath}`;
    }



    
  return (
    <div className={`cart ${cartCourses.length > 0 ? 'active' : ''}`}>
    <h2>My Cart</h2>
    {cartCourses.length === 0 ? (
    <p className="empty-cart">Geek, your cart is empty.</p>
    ) : (
<div>
    <ul>
        {cartCourses.map((item) => (
            <li key={item.product.id} className="cart-item">
                <div>
                    <div className="item-info">
                        <div className="item-image">
                            <img src={convertImagePath(item.product.link)} 
                                 alt={item.product.clothes_name} />
                        </div>
                        <div className="item-details">
                            <h3>{item.product.clothes_name}</h3>
                            <p>Price: ₹{item.product.price}</p>
                        </div>
                    </div>
                    <div>
                        <div className="item-actions">
                            <button
                                className="remove-button"
                                onClick={() => 
                                deleteCourseFromCartFunction(item.product)}>
                                Remove Product
                            </button>

                        </div>
                    </div>
                </div>
            </li>
        ))}
    </ul>
    <div className="checkout-section">
        <div className="checkout-total">
            <p className="total">Total Amount: 
                ₹{totalAmountCalculationFunction()}
            </p>
        </div>
        <div className="checkout-buttons">
        <button className="upload-button" onClick={() => {navigate('/airecommendation')}}>AI Recommendation</button>
        <button
            className="upload-button"
            onClick={handleClothesUpload}
            >Upload for Swapping!</button>
            
        </div>


    </div>
</div>
            )}
</div>
  )
}

export default UserCart