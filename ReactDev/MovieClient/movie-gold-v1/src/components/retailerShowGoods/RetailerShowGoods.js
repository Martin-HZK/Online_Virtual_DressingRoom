import React from 'react'
import './RetailerShowGoods.css'
import { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
const RetailerShowGoods = ({ courses, 
  filterCourseFunction, 
  addCourseToCartFunction }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const openModal = (product) => {
        console.log(product);
        setSelectedImage(product);
        setModalIsOpen(true);
    }
    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    }
    const handleReturnButtonClick = () => {
        closeModal(); // 关闭弹窗
        // 在这里添加返回的逻辑，比如返回上一页或者其他操作
      };
    const [file, setFile] = useState();

    const onFileChange = (event) => {
        setFile(event.target.files[0]);
        console.log(file.name) // this is for testing or uploaded file
        console.log(file.name.replace(/(.*)\..+$/, "$1"));
        // console.log("selected");
    }



    const handleClothesUpload = async() => {
        // const formData = new FormData();
        // formData.append('file', file);

        const myData = {
            "Image_Name": "Weixin_Image_20240301162842", // this file is for testing, should match the actual name!
            "Model_Type": "StableVITON",  // HRVITON ORF StableVITON
            "Clothes_ID": [
                file.name.replace(/(.*)\..+$/, "$1")
            ]
        }
            
        try {
            const response = await axios.post('http://localhost:8000/TryOns', myData, {
            headers: {
                'Content-Type': 'application/json',
            },
            });
            console.log( response.data);
        } catch (error) {
            console.error(error);
        }
    }
    const handleGet = () => {
            // StableVITON_Weixin_Image_20240301162842_00096_00
            const response = axios.get('http://localhost:8000/TryOns/', {
                headers: {
                    'Authorization': 'Bearer YOUR_TOKEN_HERE'
                }
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    // const [uploadClothesTest, setUploadClothesTest] = useState([
    //     {
    //         "Image_Name": "string",
    //         "Model_Type": "string",
    //         "Clothes_ID": [
    //           "string"
    //         ]
    //     }
    // ]);
    
return (
  <div className="product-list">
          {filterCourseFunction.length === 0 ? (
              <p className="no-results">
                  Sorry Geek, No matching Product found.
              </p>
          ) : (
               filterCourseFunction.map((product) => (
                  <div className="product" key={product.id}>
                      <img src={product.image} alt={product.name} />
                      <h2>{product.name}</h2>
                      <p>Price: ₹{product.price}</p>
                      <button
                          className="add-to-cart-button"
                          onClick={() => addCourseToCartFunction(product)}
                      >
                          Add to Shopping Cart
                      </button>
                  </div>
              ))
          )}
          <Modal className="custom-modal" isOpen={modalIsOpen} onRequestClose={closeModal}>
            <img
            src={selectedImage}
            alt="Large Image"
            onClick={closeModal}
            />
            <div className="footer-container">
            {/* 返回按钮 */}
                <button onClick={handleReturnButtonClick}>Close</button>
            </div>
        </Modal>

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

            <button onClick = {handleGet}>Get</button>

      
      </div>
      
)
}

export default RetailerShowGoods