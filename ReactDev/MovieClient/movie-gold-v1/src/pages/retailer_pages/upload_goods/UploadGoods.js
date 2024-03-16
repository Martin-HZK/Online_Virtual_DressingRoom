import axios from 'axios';
import React, { useState, useRef} from 'react'
import api from '../../../api/axiosConfig';
import './UploadGoods.css'
import 'rsuite/dist/rsuite.min.css'
import { Button, Modal } from "rsuite";
import RetailerShowGoods from '../../../components/retailerShowGoods/RetailerShowGoods';
import ShowCourse from '../../../components/showCourseComponent/ShowCourse';

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

    // const [courses, setCourses] = useState([]);

    // Here we need to communicate with the 
    const [courses, setCourses] = useState([
        { id: 1, 
          name: 'GFG T-shirt', 
          price: 499, 
          image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png'
        },
        { id: 2, 
          name: 'GFG Bag', 
          price: 699, 
          image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg'
        },
        { id: 3, 
          name: 'GFG Hoodie', 
          price: 799, 
          image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/gfg3.jpg'
        },
        { id: 4, 
          name: 'Test clothes', 
          price: 799, 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPren7APkmhMhZHhpgoXocDcDvhsiIqO4iog&usqp=CAU'
        },
        {
        name: 'Test clothes', 
        price: 799, 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPren7APkmhMhZHhpgoXocDcDvhsiIqO4iog&usqp=CAU'
        },
        {
          name: 'Test clothes', 
          price: 799, 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPren7APkmhMhZHhpgoXocDcDvhsiIqO4iog&usqp=CAU'
          },
          {
            name: 'Test clothes', 
            price: 799, 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPren7APkmhMhZHhpgoXocDcDvhsiIqO4iog&usqp=CAU'
            },
            {
              name: 'Test clothes', 
              price: 799, 
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPren7APkmhMhZHhpgoXocDcDvhsiIqO4iog&usqp=CAU'
              },
              {
                name: 'Test clothes', 
                price: 799, 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPren7APkmhMhZHhpgoXocDcDvhsiIqO4iog&usqp=CAU'
                }
      ]);

    

    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');

    const filterCourseFunction = courses.filter((course) =>
    course.name.toLowerCase().includes(searchCourse.toLowerCase())
  );
    // this will not be used here
    const addCourseToCartFunction = (GFGcourse) => {
        const alreadyCourses = cartCourses
                               .find(item => item.product.id === GFGcourse.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === GFGcourse.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
        }
    };

    const deleteCourseFromCartFunction = (GFGCourse) => {
        const updatedCart = cartCourses
                            .filter(item => item.product.id !== GFGCourse.id);
        setCartCourses(updatedCart);
    };
  
    const totalAmountCalculationFunction = () => {
        return cartCourses
              .reduce((total, item) => 
                          total + item.product.price * item.quantity, 0);
    };
    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };
  

    
  
  return (
      <div className='upload-container'>
            <div className='show-goods-container'>
                <RetailerShowGoods
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />
            </div>

            {/* <ShowCourse
                courses={courses}
                filterCourseFunction={filterCourseFunction}
                addCourseToCartFunction={addCourseToCartFunction}
            /> */}

            <div className='upload-goods-container' > 
                    {/* <span>Modal with Overflow </span>  */}
                    <i className="fa fa-fw fa-shopping-cart" style={{ fontSize: '1.5em' }} />
                    <Button onClick={handleOpen}>Open</Button> 

  
                    <Modal overflow={overflow} 
                         open={open} onClose={handleClose}> 
                        <Modal.Header> 
                            <Modal.Title>Upload Your Goods!</Modal.Title> 
                        </Modal.Header> 
                        <Modal.Body className='modal-body'>
                          {/* <input
                                name="file"
                                type="file"
                                style={{ display: "none" }}// accept=".zip,.rar"
                                onChange={onFileChange}
                            /> */}
                            
                            <input
                                id="fileInput"
                                name="file"
                                type="file"
                                style={{ display: "none" }}
                                accept=".zip,.rar"
                                onChange={onFileChange}
                            />
                            <button onClick={() => document.getElementById('fileInput').click()}>Select File</button>
                         
                         <div className='chunck'>
                        <label>Goods Name</label>

                            <input 
                                type="text" 
                                placeholder="Goods Name"
                                value={goodName} // 将输入框的值绑定到状态中的 inputValue
                                onChange={handleGoodsNameChange} // 当输入框的值发生变化时调用 handleChange 函数
                            />

                        </div>

                        <div className='chunck'>
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

                            <button onClick={onFileUpload}>Upload</button>

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