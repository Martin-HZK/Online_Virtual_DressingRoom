import React, { useState, useEffect } from 'react';
import './AISlider.css'; 
const AISlider = ({ recommendation = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const extractIDs = (data) => {
    if (!data) {
      return []; // 如果 data 为 null 或者 undefined，返回一个空数组
    }
  
    const extractedIDs = data.map(item => {
      return "cloth/" + item.clothes_ID + ".jpg";
    });
  
    return extractedIDs;
  };
  
 
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
  // setNImages(extractIDs(recommendation))
  // console.log(Nimages)

  useEffect(() => {
    console.log(recommendation);
    console.log(extractIDs(recommendation))
    setNImages(extractIDs(recommendation));
    // console.log(Nimages)
  }, []);

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