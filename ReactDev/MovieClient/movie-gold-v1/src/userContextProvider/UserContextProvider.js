import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [globUsername, setGlobUsername] = useState('');

  return (
    <UserContext.Provider value={{globUsername, setGlobUsername}}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContextProvider, UserContext }