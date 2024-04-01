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
import './ThreeDDemo.css'
const ThreeDDemo = () => {
    
    return (
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

}

export default ThreeDDemo