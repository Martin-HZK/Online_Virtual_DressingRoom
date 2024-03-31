import React, { useState } from 'react';
import './ImageSlider.css'; 
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const [Nimages, setNImages] = useState([
    'Images/1_768x1024_08015_00.png',
    'Images/1_768x1024_08015_00.png',
    'Images/1_768x1024_11001_00.png',
    'Images/1_768x1024_13973_00.png',  
    'Images/1_768x1024_13987_00.png',
    'Images/1_768x1024_14096_00.png'
    
  ]);


  return (
    // <div className="slider">
    //   <button onClick={goToPrevious}>&lt;</button>
    //   {/* <img src={images[currentIndex]} alt="slider-img" /> */}
    // <img src={Nimages[currentIndex]} alt="slider-img" />
    //   <button onClick={goToNext}>&gt;</button>
    // </div>
      <div className="slider">
        <img src={Nimages[currentIndex]} alt="slider-img" />
        <div className="slider-controls">
          <button onClick={goToPrevious}>&lt;</button>
          <button onClick={goToNext}>&gt;</button>
        </div>
      </div>
    );
};

export default ImageSlider;