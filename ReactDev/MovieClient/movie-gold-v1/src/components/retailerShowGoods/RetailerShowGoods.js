import React, { useEffect } from 'react'
import './RetailerShowGoods.css'
import { useState,useContext } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { MyContext } from '../../pages/retailer_pages/upload_goods/UploadGoods';
const RetailerShowGoods = ({
    //  courses, 
//   filterCourseFunction, 
  addCourseToCartFunction }) => {
    const {actualGoods, setActualGoods, filterCourseFunction} = useContext(MyContext); // this is to get the actual goods list and the setGoodsList function
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
    }
    const [file, setFile] = useState();

    const onFileChange = (event) => {
        setFile(event.target.files[0]);
        console.log(file.name) // this is for testing or uploaded file
        console.log(file.name.replace(/(.*)\..+$/, "$1"));
        // console.log("selected");
    }


    // this is the part for testing yang's API

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
            
        console.log(file.name.replace(/(.*)\..+$/, "$1"))
        
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

    

    const discardGoods = async(product) => {
        console.log(product);
        try {
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        console.log('This will show the all actual goods');
        console.log(actualGoods);
    }, []);


    function convertImagePath(imagePath) {
        const baseUrl = "http://localhost:8080";
        let relativePath = imagePath.replace('src/main/resources/static/', '');

        if (relativePath.endsWith(',')) {
            relativePath = relativePath.slice(0, -1);
        }
    
 
        return `${baseUrl}/${relativePath}`;
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
                    <div className='product' key={product.link}>
                        <img src= {convertImagePath(product.link)} alt='Unknown' />
                        <h2>{product.clothes_name}</h2>
                        <p>Price: ₹{product.price}</p>
                        <button
                            className="add-to-cart-button"
                            // onClick={() => addCourseToCartFunction(product)}
                            onClick={() => discardGoods(product)}
                        >
                            Discontinued products
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

      </div>
      
)
}

export default RetailerShowGoods