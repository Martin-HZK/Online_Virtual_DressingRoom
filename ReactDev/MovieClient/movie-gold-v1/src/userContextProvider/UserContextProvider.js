import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'

const UserContext = createContext();

// const UserContextProvider = ({children}) => {
//     const [globUsername, setGlobUsername] = useState('');

//   return (
//     <UserContext.Provider value={{globUsername, setGlobUsername}}>
//       {children}
//     </UserContext.Provider>
//   )
// }
const UserContextProvider = ({ children }) => {
  const [globUsername, setGlobUsername] = useState(() => {
    const savedGlobUsername = localStorage.getItem('globUsername');
    return savedGlobUsername || ""; // 如果localStorage中没有，则默认为空字符串
  });

  const [globClothesID, setGlobClothesID] = useState(() => {
    const savedGlobClothesID = localStorage.getItem('globClothesID');
    return savedGlobClothesID || ""; // 如果localStorage中没有，则默认为空字符串
  });


  useEffect(() => {
    // 每当 globUsername 更新时，将其保存到 localStorage
    localStorage.setItem('globUsername', globUsername);
  }, [globUsername]);

  useEffect(() => {
    // 每当 globClothesID 更新时，将其保存到 localStorage
    localStorage.setItem('globClothesID', globClothesID);
  }, [globClothesID]);

  return (
    <UserContext.Provider value={{ globUsername, setGlobUsername, globClothesID, setGlobClothesID}}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext }