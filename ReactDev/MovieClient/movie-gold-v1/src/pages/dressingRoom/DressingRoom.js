import React , {useEffect, useState} from 'react'
import './DressingRoom.css'
import SearchBar from '../../components/searchBar/SearchBar'
import UserCart from '../../components/userCart/UserCart'
import ShowCourse from '../../components/showCourse/ShowCourse'
import 'rsuite/dist/rsuite.min.css'
import { Button, Modal } from "rsuite";
import { UserContext } from '../../userContextProvider/UserContextProvider'

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

  const filterCourseFunction = courses.filter((course) =>
      course.name.toLowerCase().includes(searchCourse.toLowerCase())
  );


  const [open, setOpen] = useState(false); 
    const [overflow, setOverflow] = useState(false); 
    const handleOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false);


  const [personImage, setPersonImage] = useState('https://cdn.pixabay.com/photo/2023/05/30/08/34/apple-8027938_1280.jpg');






  return (
    <div className="dressingroom_container">
      <div className='items_container'>
            <SearchBar searchCourse={searchCourse} 
                             courseSearchUserFunction=
                                 {courseSearchUserFunction} />
            <main className="App-main">
                <ShowCourse
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
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
        <img className= 'ClothesChanged_image' src={personImage}></img>
      </div>
    </div>
  )
}

export default DressingRoom