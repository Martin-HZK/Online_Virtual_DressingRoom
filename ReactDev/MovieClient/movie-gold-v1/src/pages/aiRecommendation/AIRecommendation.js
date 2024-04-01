import React from 'react'
import { UploadGoods } from '../retailer_pages/upload_goods/UploadGoods'
import AISlider from '../../components/AIRecommendationSlider/AISlider'
import './AIRecommendation.css'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
const AIRecommendation = () => {
  const { state } = useLocation();
  const recommendation = state;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/airecommendation', { state: recommendation });
  };
  return (
    <div className='aiRecommendation-container'>
      <AISlider recommendation={recommendation}/>
      </div>
    
  )
}

export default AIRecommendation