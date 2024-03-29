import React from 'react'
import './ShowCourse.css'
import { useState, useContext, useEffect } from 'react';
import Modal from 'react-modal';
// import Modal from "rsuite";
// import 'rsuite/dist/rsuite.min.css'
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
        closeModal(); // 关闭弹窗
        // 在这里添加返回的逻辑，比如返回上一页或者其他操作
      };

    function convertImagePath(imagePath) {
        // 假设后端服务运行在 http://localhost:8080
        const baseUrl = "http://localhost:8080";
        // 提取相对路径中的具体路径部分，即去掉 `src/main/resources/static/`
        let relativePath = imagePath.replace('src/main/resources/static/', '');
        
        // 如果结尾有逗号，则去除
        if (relativePath.endsWith(',')) {
            relativePath = relativePath.slice(0, -1);
        }

        // 构造完整的URL
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