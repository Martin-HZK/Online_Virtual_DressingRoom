import React, { useState } from 'react';
import './AISlider.css'; 
const AISlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? Nimages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === Nimages.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const [Nimages, setNImages] = useState([
    'clothes/00259_00.jpg',
    'clothes/00260_00.jpg',
    'clothes/00261_00.jpg',
    'clothes/00272_00.jpg',
    'clothes/00273_00.jpg',
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

export default AISlider;