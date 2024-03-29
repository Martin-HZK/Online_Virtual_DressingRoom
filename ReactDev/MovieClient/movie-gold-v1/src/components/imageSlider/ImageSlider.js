import React, { useState } from 'react';
import './ImageSlider.css'; // 确保你创建了一个对应的CSS文件

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

  return (
    <div className="slider">
      <button onClick={goToPrevious}>&lt;</button>
      <img src={images[currentIndex]} alt="slider-img" />
      <button onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default ImageSlider;