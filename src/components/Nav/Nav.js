import React from 'react'
import './Nav.css'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Nav = () => {

    const location = useLocation();


    return (
        <div className='Nav'>
            <div className='navLogo'>
                <img src={logo} />
            </div>

            <div className='navItems'>
                <Link to='/'>
                    <div className={`navitem ${location.pathname === '/' ? 'selected' : ''}`}>
                        Home
                    </div>
                </Link>
                <Link to='/about'>
                    <div className={`navitem ${location.pathname === '/about' ? 'selected' : ''}`}>
                        About Us
                    </div>
                </Link>
                <Link to='/products'>
                    <div className={`navitem ${location.pathname === '/products' ? 'selected' : ''}`}>
                        Products
                    </div>
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
                <input placeholder='Search' className='navInput' />
            </div>
        </div>
    )
}

export default Nav