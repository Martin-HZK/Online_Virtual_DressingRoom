import React from 'react'
import { UploadGoods } from '../retailer_pages/upload_goods/UploadGoods'
import AISlider from '../../components/AIRecommendationSlider/AISlider'
import './AIRecommendation.css'
const AIRecommendation = () => {
  return (
    <div className='aiRecommendation-container'>
      <AISlider />
      </div>
    
  )
}

export default AIRecommendation