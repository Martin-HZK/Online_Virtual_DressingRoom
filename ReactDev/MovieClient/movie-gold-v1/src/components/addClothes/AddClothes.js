import React from 'react'
import './AddClothes.css'
import { useState } from 'react';
import api from '../../api/axiosConfig';

const AddClothes = () => {
    const [file, setFile] = useState();
    const [goodName, setGoodName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [retailer_name, setRetailerName] = useState("user3");
    const [imageUrl, setImageUrl] = useState(null);


    const onFileChange = (event) => {
        // Updating the state
        
        setFile(event.target.files[0]);
        setImageUrl(URL.createObjectURL(event.target.files[0]));
        console.log(event.target.files[0]);
    //   setFile({ file: event.target.files[0] });
    //   console.log(event.target.files[0]);
    };

  const onFileUpload = async () => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("retailer_name", retailer_name);
    formData.append("goodName", goodName);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("brand", brand);
    try{
        const response = await api.post("/api/v1/retailer/upload_clothes", formData);
        console.log(response);
        alert("The file is successfully uploaded");
        setFile(null);
        setGoodName("");
        setDescription("");
        setCategory("");
        setBrand("");
        setImageUrl(null);
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
                    {/* <span>Modal with Overflow </span>  */}
                    {/* <i className="fa fa-fw fa-shopping-cart" style={{ fontSize: '1.5em' }} />
                    <Button onClick={handleOpen}>Open</Button>  */}

  
                    {/* <Modal overflow={overflow} 
                         open={open} onClose={handleClose}> 
                        <Modal.Header> 
                            <Modal.Title>Upload Your Goods!</Modal.Title> 
                        </Modal.Header> 
                        <Modal.Body className='modal-body'> */}
                          {/* <input
                                name="file"
                                type="file"
                                style={{ display: "none" }}// accept=".zip,.rar"
                                onChange={onFileChange}
                            /> */}
                            <div className="image-container">
                                <img src={imageUrl} alt="Upload Your Goods Here!" />
                            </div>
                            
                            <input
                                id="fileInput"
                                name="file"
                                type="file"
                                style={{ display: "none" }}
                                accept=".PNG,.JPG,.JPEG,.GIF,.BMP,.TIFF,.SVG,.PSD,.PDF,.EPS,.AI,.INDD,.RAW,.NEF,.CR2,.SR2,.ORF,.RW2,.RAF,.PEF,.X3F,.ARW,.DNG,.CRW"
                                onChange={onFileChange}
                            />
                            <button className='select-button' onClick={() => document.getElementById('fileInput').click()}>Select File</button>
                         
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

                            <button className='upload-button' onClick={onFileUpload}>Upload</button>

                        {/* </Modal.Body> 
                        <Modal.Footer> 
                            <Button onClick={handleClose} appearance="primary"> 
                                Ok 
                            </Button> 
                            <Button onClick={handleClose} appearance="subtle"> 
                                Cancel 
                            </Button> 
                        </Modal.Footer> 
                    </Modal>  */}
                </div> 
  )
}

export default AddClothes