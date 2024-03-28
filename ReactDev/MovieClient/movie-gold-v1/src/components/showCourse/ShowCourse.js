import React from 'react'
import './ShowCourse.css'
import { useState } from 'react';
import Modal from 'react-modal';
// import Modal from "rsuite";
// import 'rsuite/dist/rsuite.min.css'
import { set } from 'rsuite/esm/utils/dateUtils';

const ShowCourse = ({ courses, 
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
    return (
        <div className="product-list">
            {filterCourseFunction.length === 0 ? (
                <p className="no-results">
                    Sorry Geek, No matching Product found.
                </p>
            ) : (
                filterCourseFunction.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} 
                        alt={product.name} 
                        onClick={() => openModal(product.image)}
                        />
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
                <button onClick={handleReturnButtonClick}>Close</button>
            </div>
        </Modal>
    </div>
  )
}

export default ShowCourse