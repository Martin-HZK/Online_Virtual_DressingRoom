/*
 * GPL License
 * Version 3, 29 June 2007
 *
 * Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 * Author: Zhikai Hu
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import React , {useEffect, useState} from 'react'
import './DressingRoom.css'
import SearchBar from '../../components/searchBar/SearchBar'
import UserCart from '../../components/userCart/UserCart'
import ShowCourse from '../../components/showCourse/ShowCourse'
import 'rsuite/dist/rsuite.min.css'
import { Button, Modal } from "rsuite";
import ImageSlider from '../../components/imageSlider/ImageSlider'
import api from '../../api/axiosConfig'
import { UserContext } from '../../userContextProvider/UserContextProvider'

const UserMyContext = React.createContext();

const DressingRoom = () => {

  // these are the tests image
  //TODO: link the images from the database
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

  // const filterCourseFunction = courses.filter((course) =>
  //     course.name.toLowerCase().includes(searchCourse.toLowerCase())
  // );
  const filterCourseFunction = actualGoods.filter((course) =>
      course.clothes_name.toLowerCase().includes(searchCourse.toLowerCase())
  );


  const [open, setOpen] = useState(false); 
    const [overflow, setOverflow] = useState(false); 
    const handleOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false);


  // const [personImage, setPersonImage] = useState('https://cdn.pixabay.com/photo/2023/05/30/08/34/apple-8027938_1280.jpg');

  // below are the connection to Yang's clothes swapping backend

  const getSwappwedClothes = () => {
    // StableVITON_Weixin_Image_20240301162842_00096_00
    const response = axios.get('http://localhost:8000/TryOns/', {
        headers: {
            'Authorization': 'Bearer YOUR_TOKEN_HERE'
        }
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
}




  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await api.get('api/v1/getAllClothes');
        setActualGoods(response.data);
        console.log(response.data);
      } catch (error) {
        console.log('Error fetching goods:', error);
      }
    };

    fetchData();
  }, []);






  return (
    <div className="dressingroom_container">
      <UserMyContext.Provider value={{actualGoods, setActualGoods, filterCourseFunction}}>
      <div className='items_container'>
            <SearchBar searchCourse={searchCourse} 
                             courseSearchUserFunction=
                                 {courseSearchUserFunction} />
            <main className="App-main">
                {/* <ShowCourse
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                /> */}
                <ShowCourse
                    // courses={actualGoods}
                    // filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />
 
              

            </main>

            <div className='Shopping-venue' > 
                    {/* <span>Modal with Overflow </span>  */}
                    <i className="fa fa-fw fa-shopping-cart" style={{ fontSize: '1.5em' }} />
                    <Button onClick={handleOpen}>Open</Button> 

  
                    <Modal overflow={overflow} 
                         open={open} onClose={handleClose}> 
                        <Modal.Header> 
                            <Modal.Title>Shopping Cart</Modal.Title> 
                        </Modal.Header> 
                        <Modal.Body> 
                          <UserCart
                            cartCourses={cartCourses}
                            deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                            totalAmountCalculationFunction={
                                totalAmountCalculationFunction
                            }
                            setCartCourses={setCartCourses}
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

      <div className='model_container'>
        {/* <img className= 'ClothesChanged_image' src={personImage}></img> */  }
        {/* <button onClick = {getSwappwedClothes}>Get</button> */}

        <ImageSlider images={courses.map(course => course.image)} />
      </div>

      </UserMyContext.Provider>
    </div>
  )
}

export {DressingRoom, UserMyContext} 