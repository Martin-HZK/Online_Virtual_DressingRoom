import axios from 'axios';
import React, { useState, useRef, useEffect, createContext, useContext} from 'react'
import api from '../../../api/axiosConfig';
import './UploadGoods.css'
import 'rsuite/dist/rsuite.min.css'
import { Button, Modal } from "rsuite";
import RetailerShowGoods from '../../../components/retailerShowGoods/RetailerShowGoods';
import ShowCourse from '../../../components/showCourse/ShowCourse';
import SearchBar from '../../../components/searchBar/SearchBar';
import AddClothes from '../../../components/addClothes/AddClothes';
import SpinLoader from '../../../components/spinLoader/SpinLoader';
import {ProgressBar} from 'react-loader-spinner';
import { UserContext } from '../../../userContextProvider/UserContextProvider';

const MyContext = createContext();

const UploadGoods = () => {
  
    const { globUsername, setGlobUsername } = useContext(UserContext);

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
    
    const [actualGoods, setActualGoods] = useState([]);
    // const [retailer_name, setRetailerName] = useState(globUsername) // we set it to the global username

    // the useEffect in the parent component is used for generating the goods once
    // the child component's useEffect is used for updating the goods list
   

  
    const addClothes = (clothes) => {
      setActualGoods([...actualGoods, clothes]);
    }

    // const filterCourseFunction = courses.filter((course) =>
    //   course.name.toLowerCase().includes(searchCourse.toLowerCase())
    // );
    const filterCourseFunction = actualGoods.filter((course) =>
      course.clothes_name.toLowerCase().includes(searchCourse.toLowerCase())
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
  

    useEffect(() => {

      const fetchData = async () => {
        try {
          console.log('useEffect');
          console.log('This is the retailer' + globUsername);
          const response = await api.get(`/api/v1/getAllClothesByRetailer/${globUsername}`);
          setActualGoods(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData(); 
    }, []);
    
  
  return (
      <div className='upload-container'>
          <MyContext.Provider value={{actualGoods, setActualGoods,filterCourseFunction}}>

          <div className='items_container'>
          <SearchBar searchCourse={searchCourse} 
                      courseSearchUserFunction={courseSearchUserFunction} />
              <div className='show-goods-container'>
                  {/* <RetailerShowGoods
                      courses={courses}
                      filterCourseFunction={filterCourseFunction}
                      addCourseToCartFunction={addCourseToCartFunction}
                  /> */}
                  <RetailerShowGoods
                      // courses={actualGoods}
                      // filterCourseFunction={filterCourseFunction}
                      addClothes={addClothes}
                  />
              </div>
          </div>

          <div className='add_container'>
              <AddClothes />
              <ProgressBar
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
              {/* <SpinLoader /> */}

          </div>

        </MyContext.Provider>

      </div>
      
    
  );
}

export { MyContext, UploadGoods };
// export default UploadGoods