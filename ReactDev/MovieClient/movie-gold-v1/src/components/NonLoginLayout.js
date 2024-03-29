import React from 'react'
import Navigator from './navigator/Navigator'
import { Outlet } from 'react-router-dom'
import Loading from './Loading/Loading'
const NonLoginLayout = () => {
  return (
    <main>
    <Navigator/>
    <Outlet />
    <Loading/>
  </main>
  )
}

export default NonLoginLayout