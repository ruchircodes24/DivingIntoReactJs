import React from 'react'
import Footer from './src/components/Footer/Footer'
import Header from './src/components/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>

    </>
  )
}

export default Layout
