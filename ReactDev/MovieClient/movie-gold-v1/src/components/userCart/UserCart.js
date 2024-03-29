import React from 'react'
import './UserCart.css'
import axios from 'axios'
import {useState} from 'react'
const UserCart = ({
    cartCourses,
    deleteCourseFromCartFunction,
    totalAmountCalculationFunction,
    setCartCourses,
})  => {


    const [file, setFile] = useState(null);

    const onFileChange = (event) => {
        setFile(event.target.files[0]);
        console.log("selected");
    }

    // testing yang's API
    const handleClothesUpload = async() => {
        const formData = new FormData();
        formData.append('file', file);
            
        try {
            const response = await axios.post('http://localhost:8000/uploadImage', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            });
            console.log( response.data);
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