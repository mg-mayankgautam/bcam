import React, { useState, useRef } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import wsp from './assets/wpOrng.png'


const Layout = () => {

  return (
  
    <div className="App">
      
      <Nav/>

      <Outlet/> 

      <div className='whatsappBtnDiv'>
        <a href="https://wa.me/+919319998197?text=Hi" target='_blank'>
          <img src={wsp} />
        </a>
      </div>

      <Footer/>
    </div>
    
  )
}

export default Layout
