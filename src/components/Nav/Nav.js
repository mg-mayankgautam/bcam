import React, { useState } from 'react'
import './Nav.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Nav = () => {

    const location = useLocation();

    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        const inputValue = e.target.value;
        setSearchInput(inputValue);

        const filteredResults = categories.filter(category =>
            category.toLowerCase().includes(inputValue.toLowerCase())
        );

        setSearchResults(filteredResults);

    };

    const handleSelect = (match) => {
        navigate(`/products/${match}`);
        setSearchInput('');
        setSearchResults([]);
    };


    return (
        <div className='Nav'>
            <div className='navLogo'>
                <Link to='/'>
                    <img src={logo} />
                </Link>
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
                <Link to='/products/Wi-Fi%20Camera'>
                    <div className={`navitem ${location.pathname.includes('/products') ? 'selected' : ''}`}>
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
                <input
                    type="text"
                    placeholder='Search'
                    className='navInput'
                    value={searchInput}
                    onChange={handleSearchChange}
                />
            </div>


            {(searchResults.length > 0 && searchInput) && (
                <div className='Navdropdown'>
                    {searchResults.map((match, index) => (
                        <div
                            key={index}
                            className='dropdown-item'
                            onClick={() => handleSelect(match)}
                        >
                            {match}
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default Nav

const categories = [
    "Wi-Fi Camera",
    "4G Camera",
    "IP Camera",
    "Analog Camera",
    "NVR",
    "DVR",
    "PoE Switch",
    "4G Router",
    "Rack",
    "Power Supply",
    "Accessories"
];