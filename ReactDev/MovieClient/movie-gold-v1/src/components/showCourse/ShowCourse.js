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
import './ShowCourse.css'
import { useState, useContext, useEffect } from 'react';
import Modal from 'react-modal';
import { set } from 'rsuite/esm/utils/dateUtils';
import { UserMyContext } from '../../pages/dressingRoom/DressingRoom';
const ShowCourse = ({ 
    // courses, 
    // filterCourseFunction, 
    addCourseToCartFunction }) => {
    const {actualGoods, setActualGoods, filterCourseFunction} = useContext(UserMyContext); // this is to get the actual goods list and the setGoodsList function
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

      };

    function convertImagePath(imagePath) {
        const baseUrl = "http://localhost:8080";
        let relativePath = imagePath.replace('src/main/resources/static/', '');

        if (relativePath.endsWith(',')) {
            relativePath = relativePath.slice(0, -1);
        }

        return `${baseUrl}/${relativePath}`;
    }

    useEffect(() => {
        console.log('This will show the all actual goods');
        console.log(actualGoods);
    }, []);

    return (
        <div className="product-list">
            {filterCourseFunction.length === 0 ? (
                <p className="no-results">
                    Sorry Geek, No matching Product found.
                </p>
            ) : (
                filterCourseFunction.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={convertImagePath(product.link)} 
                            alt='Unknown'
                            // onClick={() => openModal(product.image)}
                            onClick = {() => openModal(convertImagePath(product.link))}
                        />
                        <h2>{product.clothes_name}</h2>
                        <p>Price: ₹{product.price}</p>
                        <button
                            className="add-to-cart-button"
                            onClick={() => addCourseToCartFunction(product)}
                        >
                            Add to Cart
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