import React from 'react'
import './DressingRoom.css'
import SearchBar from '../../components/searchBar/SearchBar'

const DressingRoom = () => {
  return (
        
    <div className='dressingroom_container'>
      <div className='items_container'>
        <SearchBar/>
        </div>

      <div className='model_container'>This is model</div>
    </div>
  )
}

export default DressingRoom