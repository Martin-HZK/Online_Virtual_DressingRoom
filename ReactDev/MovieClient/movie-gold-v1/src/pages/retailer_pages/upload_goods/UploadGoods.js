import axios from 'axios';
import React, { useState, useRef} from 'react'
import api from '../../../api/axiosConfig';
import './UploadGoods.css'


const UploadGoods = () => {
  
    const [file, setFile] = useState();
    const [goodName, setGoodName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");


    const onFileChange = (event) => {
        // Updating the state
        
        setFile(event.target.files[0]);
        console.log(event.target.files[0]);
    //   setFile({ file: event.target.files[0] });
    //   console.log(event.target.files[0]);
    };

  const onFileUpload = async () => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("goodName", goodName);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("brand", brand);
    try{
        const response = await api.post("/api/v1/upload_goods", formData);
        console.log(response);
    } catch(err) {
        console.log(err);
        alert("Failed to upload goods");
    }
};

    const handleGoodsNameChange = async(event) => {
        setGoodName(event.target.value);
    }

    const handleGoodsDescriptionChange = async(event) => {
        setDescription(event.target.value);
    }

    const handleGoodsCategoryChange = async(event) => {
        setCategory(event.target.value);
    }
    
    const handleGoodsBrandChange = async(event) => {
        setBrand(event.target.value);
    }



    
  
  return (
      <div className='upload-container'>
        <input
            name="file"
            type="file"
            onChange={onFileChange}
        />
        <button onClick={onFileUpload}>Upload</button>

        <input 
            type="text" 
            placeholder="Goods Name"
            value={goodName} // 将输入框的值绑定到状态中的 inputValue
            onChange={handleGoodsNameChange} // 当输入框的值发生变化时调用 handleChange 函数
        />

        <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleGoodsDescriptionChange}
        />

        <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={handleGoodsCategoryChange}
        />

        <input
            type='text'
            placeholder="Brand"
            value={brand}
            onChange={handleGoodsBrandChange}
        />
            

      </div>
//     <div>
//         <input
//             style={{ display: "none" }}// accept=".zip,.rar"
//             ref={inputFile}
//             onChange={onFileChange}
//             type="file"
//         />
//         <div className="button" onClick={onFileUpload}>
//             Upload
//         </div>
//   </div>
    
  );
}

export default UploadGoods