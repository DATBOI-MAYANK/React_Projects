import React from 'react'
import Header from "./Components/Header/Header"
import { Outlet } from "react-router-dom"
import Hero from './Components/Hero/Hero'

function Layout() {
  return (
    <>
     <Header/>
     <Outlet/>
     <Hero/>
    </>
  )
}

export default Layout