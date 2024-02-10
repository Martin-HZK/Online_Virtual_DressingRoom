import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam';
import './WebCam.css'

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
  };

const WebCam = () => {
    const [image, setImage] = useState();
    const webcamRef = useRef(null);
    const capture = useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc);
        }
    )





  return (
    <div>
        <div className="webcam">
            {image==''?<Webcam
                audio={false}
                height={200}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={220}
                videoConstraints={videoConstraints}
            />:<img src={image} />}
        </div>
        <div>
            {
                image!=''?
                <button onClick={(e) => {
                    e.preventDefault(); // prevent the default form submission
                    setImage('');
                }}
                className='webcam-btn'>Retake Image</button>:
                <button onClick={(e) => {
                    e.preventDefault(); // prevent the default form submission
                    capture();
                }}
                className='webcam-btn'>Capture</button>

            }
        </div>
    </div>
  )
}

export default WebCam