import React, { useEffect } from 'react'
import './AddClothes.css'
import { useState,useContext } from 'react';
import api from '../../api/axiosConfig';
import { MyContext } from '../../pages/retailer_pages/upload_goods/UploadGoods';
import { UserContext } from '../../userContextProvider/UserContextProvider';
const AddClothes = () => {
    const [file, setFile] = useState();
    const [goodName, setGoodName] = useState("");
    const [clothes_ID, setClothesID] = useState("");
    // const [clothes_name, setClothesName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const { globUsername, setGlobUsername, globClothesID, setGlobClothesID} = useContext(UserContext);
    // const [retailer_name, setRetailerName] = useState("user3");
    const [imageUrl, setImageUrl] = useState(null);
    const [price, setPrice] = useState(0);
    const [gender, setGender] = useState("male");
    const {actualGoods, setActualGoods, fetchGoods} = useContext(MyContext); // this is to get the actual goods list and the setGoodsList function
    
    const onFileChange = (event) => {
        // Updating the state
        console.log('Image uploading...')
        setFile(event.target.files[0]);
        setClothesID(event.target.files[0].name.replace(/(.*)\..+$/, "$1"));
        setGlobClothesID(event.target.files[0].name.replace(/(.*)\..+$/, "$1"));
        
        console.log('Image uploaded successfully!')
        setImageUrl(URL.createObjectURL(event.target.files[0]));
    };

  const onFileUpload = async () => {
    const formData = new FormData();

    formData.append("file", file);
    // formData.append("retailer_name", retailer_name);
    formData.append("retailer_name", globUsername);
    // formData.append("clothes_name", clothes_name);
    formData.append("goodName", goodName);
    formData.append("clothes_ID", clothes_ID);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("brand", brand);
    formData.append("price", price);
    formData.append("gender", gender)

   

    try{
        const response = await api.post("/api/v1/retailer/upload_clothes", formData);
        console.log(response);
        alert("The file is successfully uploaded");
        setFile(null);
        setGoodName("");
        // setClothesName("");
        setClothesID("");
        setDescription("");
        setCategory("");
        setBrand("");
        setImageUrl(null);
        setPrice(0);
        setGender("");
        fetchGoods();
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
    <div className='upload-goods-container' > 
                            <div className="image-container">
                                <img src={imageUrl} alt="Upload Your Goods Here!" />
                            </div>
                            
                            <input
                                id="GoodsUpload"
                                name="file"
                                type="file"
                                style={{ display: "none" }}
                                accept=".jpg" // accepting only the jpg file
                                onChange={onFileChange}
                            />

                            <button className='select-button' onClick={() => document.getElementById('GoodsUpload').click()}>Select File</button>
                            
                         <div className='chunk'>
                        <label>Goods Name</label>

                            <input 
                                type="text" 
                                placeholder="Goods Name"
                                value={goodName} // 将输入框的值绑定到状态中的 inputValue
                                onChange={handleGoodsNameChange} // 当输入框的值发生变化时调用 handleChange 函数
                            />

                        </div>

                        <div className='chunk'>
                        <label>Description</label>
                            <input
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={handleGoodsDescriptionChange}
                            />
                        
                        </div>

                        <div className='chunk'>
                        <label>Category</label>
                            <input
                                type="text"
                                placeholder="Category"
                                value={category}
                                onChange={handleGoodsCategoryChange}
                            />
                            
                        </div>
                            
                        <div className='chunk'>
                        <label>Brand</label>
                            <input
                                type='text'
                                placeholder='Brand'
                                value={brand}
                                onChange={handleGoodsBrandChange}
                            />
                        
                        </div>

                        <div className='chunk'>
                        <label>Price</label>
                            <input
                                type='number'
                                placeholder='Price'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        <div className='chunk'>
                            <label>Recommend gender</label>
                            <input
                                type='text'
                                placeholder='male/female'
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            />
                        </div>

                            <button className='upload-button' onClick={onFileUpload}>Upload</button>

                </div> 
  )
}

export default AddClothes