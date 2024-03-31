import React from 'react'
// import vidoe from '../../../public/ThreeDDemo.mp4'
import './ThreeDDemo.css'
const ThreeDDemo = () => {
    
    return (
        // <div>
        //     <video width="320" height="240" controls>
        //         <source src="/ThreeDDemo.mp4" type="video/mp4" />
        //         {/* <source src="movie.ogg" type="video/ogg" /> */}
        //         您的浏览器不支持 Video 标签。
        //     </video>
        // </div>
        <div className="showcase-container">
      <h1 className="main-title">Welcome to the Future of Fashion</h1>
      <div className="videos-container">
        <div className="video-item">
          <video controls>
            <source src="/OriginThreeD.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="video-description">Original Video</p>
        </div>

        <div className="video-item">
          <video controls>
            <source src="/ThreeDDemo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="video-description">Transformed Video - Witness the transformation.</p>
        </div>
      </div>
    </div>
    )
    // return <div>3DDemo</div>
}

export default ThreeDDemo