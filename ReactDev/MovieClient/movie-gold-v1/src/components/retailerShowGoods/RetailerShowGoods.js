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
        closeModal();
   
    }
    const [file, setFile] = useState();

    const onFileChange = (event) => {
        setFile(event.target.files[0]);
        console.log(file.name) // this is for testing or uploaded file
        console.log(file.name.replace(/(.*)\..+$/, "$1"));
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
        // console.log(imagePath);
        // const baseUrl = "http://localhost:8080";
        // let relativePath = imagePath.replace('src/main/resources/static/', '');

        // if (relativePath.endsWith(',')) {
        //     relativePath = relativePath.slice(0, -1);
        // }

    //     const matches = /\/([^\/]+)\.jpg,$/.exec(imagePath);
    //     if (matches && matches[1]) {
    //         console.log('cloth/' + matches[1] + '.jpg');
    //         return 'cloth/' + matches[1] + '.jpg';
    //     }
    //    return ''

        const fullFilename = imagePath.split('/').pop();

        const match = fullFilename.match(/(\d+_\d+)\.jpg/);

        return  match ? "cloth/" + match[1] + ".jpg" : '';
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
                <button onClick={handleReturnButtonClick}>Close</button>
            </div>
        </Modal>

      </div>
      
)
}

export default RetailerShowGoods