import React from 'react'
import Navigator from './navigator/Navigator'
import { Outlet } from 'react-router-dom'
const NonLoginLayout = () => {
  return (
    <main>
    <Navigator/>
    <Outlet />
  </main>
  )
}

export default NonLoginLayout