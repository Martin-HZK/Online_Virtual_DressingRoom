import axios from 'axios';
import React, { useState, useRef} from 'react'
import api from '../../../api/axiosConfig';
import './UploadGoods.css'
import 'rsuite/dist/rsuite.min.css'
import { Button, Modal } from "rsuite";
import RetailerShowGoods from '../../../components/retailerShowGoods/RetailerShowGoods';

const UploadGoods = () => {
  
    const [file, setFile] = useState();
    const [goodName, setGoodName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [retailer_name, setRetailerName] = useState("user3");


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
    formData.append("retailer_name", retailer_name);
    formData.append("goodName", goodName);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("brand", brand);
    try{
        const response = await api.post("/api/v1/retailer/upload_clothes", formData);
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

    const [open, setOpen] = useState(false); 
    const [overflow, setOverflow] = useState(false); 
    const handleOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false);

    const [courses, setCourses] = useState([]);

    // Here we need to communicate with the 



    
  
  return (
      <div className='upload-container'>
        
            <RetailerShowGoods
                courses={courses}/>

            <div className='upload-goods-container' > 
                    {/* <span>Modal with Overflow </span>  */}
                    <i className="fa fa-fw fa-shopping-cart" style={{ fontSize: '1.5em' }} />
                    <Button onClick={handleOpen}>Open</Button> 

  
                    <Modal overflow={overflow} 
                         open={open} onClose={handleClose}> 
                        <Modal.Header> 
                            <Modal.Title>GeeksforGeeks</Modal.Title> 
                        </Modal.Header> 
                        <Modal.Body className='modal-body'> 
                          hi this is the user body
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
                                placeholder='Brand'
                                value={brand}
                                onChange={handleGoodsBrandChange}
                            />
                        </Modal.Body> 
                        <Modal.Footer> 
                            <Button onClick={handleClose} appearance="primary"> 
                                Ok 
                            </Button> 
                            <Button onClick={handleClose} appearance="subtle"> 
                                Cancel 
                            </Button> 
                        </Modal.Footer> 
                    </Modal> 
                </div> 
      
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