import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='Nav'>
            <div className='navLogo'>
                logo
            </div>

            <div className='navItems'>
                <Link to='/'>
                    <div className='navitem selected'>Home</div>
                </Link>
                <Link to='/about'>
                    <div className='navitem'>About Us</div>
                </Link>
                <Link to='/products'>
                    <div className='navitem'>Products</div>
                </Link>
                <Link to='/'>
                    <div className='navitem'>Our Clients</div>
                </Link>
                <Link to='/'>
                    <div className='navitem'>Gallery</div>
                </Link>
                <Link to='/'>
                    <div className='navitem'>Contact Us</div>
                </Link>
            </div>

            <div className='navSearch'>
                <input placeholder='Search' className='navInput'/>
            </div>
        </div>
    )
}

export default Nav