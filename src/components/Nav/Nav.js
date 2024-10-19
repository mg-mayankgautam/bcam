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
                <Link to='/'>
                    <div className='navitem'>Home</div>
                </Link>
                <Link to='/'>
                    <div className='navitem'>Home</div>
                </Link>
                <Link to='/'>
                    <div className='navitem'>Home</div>
                </Link>
                <Link to='/'>
                    <div className='navitem'>Home</div>
                </Link>
                <Link to='/'>
                    <div className='navitem'>Home</div>
                </Link>
            </div>

            <div className='navSearch'>
                <input placeholder='search' className='navInput'/>
            </div>
        </div>
    )
}

export default Nav