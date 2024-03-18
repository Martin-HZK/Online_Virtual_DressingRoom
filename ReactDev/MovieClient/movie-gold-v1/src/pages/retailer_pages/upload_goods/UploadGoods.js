import axios from 'axios';
import React, { useState, useRef} from 'react'
import api from '../../../api/axiosConfig';
import './UploadGoods.css'
import 'rsuite/dist/rsuite.min.css'
import { Button, Modal } from "rsuite";
import RetailerShowGoods from '../../../components/retailerShowGoods/RetailerShowGoods';
import ShowCourse from '../../../components/showCourseComponent/ShowCourse';
import SearchBar from '../../../components/searchBar/SearchBar';
import AddClothes from '../../../components/addClothes/AddClothes';
const UploadGoods = () => {
  
    

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

        <div className='items_container'>
         <SearchBar searchCourse={searchCourse} 
                    courseSearchUserFunction={courseSearchUserFunction} />
            <div className='show-goods-container'>
                <RetailerShowGoods
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />
            </div>
        </div>

        <div className='add_container'>
            <AddClothes />
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