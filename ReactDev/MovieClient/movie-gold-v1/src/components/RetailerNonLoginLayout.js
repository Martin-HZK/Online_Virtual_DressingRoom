import React from 'react'
import RetailerNavigator from './retailerNavigator/RetailerNavigator'
import { Outlet } from 'react-router-dom'
import Loading from './Loading/Loading'
const RetailerNonLoginLayout = () => {
  return (
    <main>
    <RetailerNavigator/>
    <Outlet />
    <Loading/>
  </main>
  )
}

export default RetailerNonLoginLayout