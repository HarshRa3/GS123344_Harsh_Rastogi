import React from 'react'
import NavDrawer from './components/Drawer'
import {Outlet} from 'react-router-dom'
export const App:React.FC = () => {
  return (
  <NavDrawer children={<Outlet/>} />
  )
}
