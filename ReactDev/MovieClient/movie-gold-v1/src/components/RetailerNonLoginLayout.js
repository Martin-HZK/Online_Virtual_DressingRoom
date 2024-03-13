import React from 'react'
import RetailerNavigator from './retailerNavigator/RetailerNavigator'
import { Outlet } from 'react-router-dom'
const RetailerNonLoginLayout = () => {
  return (
    <main>
    <RetailerNavigator/>
    <Outlet />
  </main>
  )
}

export default RetailerNonLoginLayout