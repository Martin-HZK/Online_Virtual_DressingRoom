import React, { useEffect, useState } from 'react'
import { set } from 'rsuite/esm/utils/dateUtils';

const SpinLoader = () => {
  
  const [text, setText] = useState('');
  const [showImage, setShowImage] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
        setShowImage(false);
        setText('I waited 3sec to be loaded');
        },10000);
    }, []);
  
    return (
    <div>
        {
            showImage ? (
                <img src='../../../public/Spinner-1s-200px.svg'/>
            ) : (
                <h3>{text}</h3>
            )
        }
    </div>
  )
}

export default SpinLoader