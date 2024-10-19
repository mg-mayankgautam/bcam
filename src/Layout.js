import React, { useState, useRef } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';


const Layout = () => {

  return (
  
    <div className="App">
      
      <Nav/>

      <Outlet/> 

      <Footer/>
    </div>
    
  )
}

export default Layout
