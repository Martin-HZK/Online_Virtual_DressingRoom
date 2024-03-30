import React from 'react'
import './UserCart.css'
import axios from 'axios'
import {useState, useContext} from 'react'
import { UserContext } from '../../userContextProvider/UserContextProvider'
const UserCart = ({
    cartCourses,
    deleteCourseFromCartFunction,
    totalAmountCalculationFunction,
    setCartCourses,
})  => {
    const { globClothesID, setGlobClothesID } = useContext(UserContext);
    console.log(globClothesID);
    console.log('hi')
    // console.log(cartCourses);
    const ids = cartCourses.map(item => item.product.clothes_ID);
    // const ids = cartCourses.map(item => item.clothes_ID);
    // console.log(ids[0])
    console.log(ids);

    // console.log(cartCourses.map(item => item.clothes_ID || 'ID not found'));

    // const [file, setFile] = useState(null);

    const onFileChange = (event) => {
        setFile(event.target.files[0]);
        console.log("selected");
    }


    // testing yang's API
    // const handleClothesUpload = async() => {
    //     const formData = new FormData();
    //     formData.append('file', file);
            
    //     try {
    //         const response = await axios.post('http://localhost:8000/uploadImage', formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //         },
    //         });
    //         console.log( response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    const handleClothesUpload = async() => {
        // const formData = new FormData();
        // formData.append('file', file);

        const myData = {
            // "Image_Name": globClothesID, // this file is for testing, should match the actual name!
            "image_name": "20240329-213620", // this file is for testing, should match the actual name!
            "model_type": "StableVITON",  // HRVITON ORF StableVITON
            "clothes_ids": ids
            // "Image_Name": "20240329-213620", // this file is for testing, should match the actual name!
            // "Model_Type": "StableVITON",  // HRVITON ORF StableVITON
            // "Clothes_ID": ids
        }
            
        // console.log(file.name.replace(/(.*)\..+$/, "$1"))
        
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
        // 发送GET请求
            const response = await axios.get(url, { responseType: 'blob' });
        } catch (error) {
            console.error(error);
        }
        
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
                            <img src={item.product.image} 
                                 alt={item.product.name} />
                        </div>
                        <div className="item-details">
                            <h3>{item.product.name}</h3>
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
                            <div className="quantity">
                                <button style={{ margin: "1%" }} 
                                    onClick={(e) => {
                                    setCartCourses((prevCartCourses) => {
                                        const updatedCart = prevCartCourses.map(
                                        (prevItem) =>
                                          prevItem.product.id === item.product.id
                                                ? { ...prevItem, quantity: 
                                                item.quantity + 1 }
                                                : prevItem
                                        );
                                        return updatedCart;
                                    })
                                }}>+</button>
                                <p className='quant'>{item.quantity} </p>
                                <button 
                                    onClick={(e) => {
                                    setCartCourses((prevCartCourses) => {
                                        const updatedCart = prevCartCourses.map(
                                        (prevItem) =>
                                        prevItem.product.id === item.product.id
                                                ? { ...prevItem, quantity:
                                                Math.max(item.quantity - 1, 0) }
                                                : prevItem
                                        );
                                        return updatedCart;
                                    })
                                }}>-</button>
                            </div>
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
        <button
            className="checkout-button"
            disabled={cartCourses.length === 0 || 
            totalAmountCalculationFunction() === 0}
        >
            Proceed to Payment
        </button>

        <input
            id="fileInput"
            name="fileInput"
            type="file"
            style={{ display: "none" }}
            accept=".jpg" // accepting only jpg
            onChange={onFileChange}
            ></input>

        <button
            className="select-button"
            onClick={() => {
                document.getElementById("fileInput").click();
            }}
            >Select file</button>
        <button
            className="upload-button"
            onClick={handleClothesUpload}
            >Upload</button>


    </div>
</div>
            )}
</div>
  )
}

export default UserCart