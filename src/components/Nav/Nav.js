import React, { useEffect, useState } from 'react'
import './Nav.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/icons/search.png'

const Nav = () => {

    const location = useLocation();

    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [openMobileNav, setOpenMobileNav] = useState(false);

    const navigate = useNavigate();

    // const handleSearchChange = (e) => {
    //     const inputValue = e.target.value;
    //     setSearchInput(inputValue);

    //     const normalizedInput = inputValue.toLowerCase().replace(/[-\s]/g, '');

    //     const filteredResults = categories.filter(category => {
    //         const normalizedCategory = category.name.toLowerCase().replace(/[-\s]/g, '');
    //         return normalizedCategory.includes(normalizedInput) ||
    //             category.codes.some(code =>
    //                 code.toLowerCase().replace(/[-\s]/g, '').includes(normalizedInput)
    //             );
    //     });

    //     setSearchResults(filteredResults);
    // };

    const handleSearchChange = (e) => {
        const inputValue = e.target.value;
        setSearchInput(inputValue);

        const normalizedInput = inputValue.toLowerCase().replace(/[-\s]/g, '');

        // Filter categories based on category name or code
        const filteredResults = categories.filter(category => {
            const normalizedCategory = category.name.toLowerCase().replace(/[-\s]/g, '');
            return normalizedCategory.includes(normalizedInput) ||
                category.codes.some(code =>
                    code.toLowerCase().replace(/[-\s]/g, '').includes(normalizedInput)
                );
        });

        // Additionally, show product codes as direct matches
        const directCodeMatches = categories.flatMap(category =>
            category.codes.filter(code =>
                code.toLowerCase().replace(/[-\s]/g, '').includes(normalizedInput)
            )
        );

        // Combine the results (categories with matching codes and exact product code matches)
        const allResults = filteredResults.map(category => ({
            ...category,
            directCodeMatches: category.codes.filter(code =>
                code.toLowerCase().replace(/[-\s]/g, '').includes(normalizedInput)
            )
        }));

        setSearchResults({ allResults, directCodeMatches });
    };













    const handleSelect = (match) => {
        navigate(`/products/${match}`);
        setSearchInput('');
        setSearchResults([]);

    };

    const handleCloseNav = (e) => {
        if (e.target.className === 'mobileNavContainer') {
            setOpenMobileNav(false);
        }
    };

    useEffect(() => {
        setOpenMobileNav(false);
        setSearchInput('');
        setSearchResults([]);
    }, [location.pathname]);



    // const [openMobileCategories, setOpenMobileCategories] = useState(false);


    return (
        <div className='NavContainer'>

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
                    {/* <Link to='/'>
                    <div className='navitem'>Our Clients</div>
                </Link> */}
                    <Link to='/mediagallery'>
                        <div className={`navitem ${location.pathname === '/mediagallery' ? 'selected' : ''}`}>
                            Gallery
                        </div>
                    </Link>
                    <Link to='/contactus'>
                        <div className={`navitem ${location.pathname === '/contactus' ? 'selected' : ''}`}>
                            Contact Us
                        </div>
                    </Link>
                </div>

                {/* <div className='navSearch'>
                    <input
                        type="text"
                        placeholder='Search'
                        className='navInput'
                        value={searchInput}
                        onChange={handleSearchChange}
                    />

                    <div className='searchIcon'>
                        <img src={search} />
                    </div>

                    {(searchResults.length > 0 && searchInput) && (
                        <div className='Navdropdown'>
                            {searchResults.map((category, index) => (
                                <div key={index}>
                                    <div
                                        className='dropdown-item'
                                        onClick={() => handleSelect(category.name)}
                                    >
                                        {category.name}
                                    </div>
                                 
                                    <ul className='product-codes'>
                                        {category.codes.map((code, idx) => (
                                            <li key={idx}>{code}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}


                 
                </div> */}

                <div className='navSearch'>
                    <input
                        type="text"
                        placeholder='Search'
                        className='navInput'
                        value={searchInput}
                        onChange={handleSearchChange}
                    />
                    <div className='searchIcon'>
                        <img src={search} />
                    </div>

                    {(searchResults?.allResults?.length > 0 || searchResults?.directCodeMatches?.length > 0) && searchInput && (
                        <div className='Navdropdown'>
                            {/* Show Category Matches */}
                            {searchResults.allResults.map((category, index) => (
                                <div key={index}>
                                    <div
                                        className='dropdown-item'
                                        onClick={() => handleSelect(category.name)}
                                    >
                                        {category.name}
                                    </div>

                                    {/* <Link to='/contactus'>
                                        <div className={`navitem ${location.pathname === '/contactus' ? 'selected' : ''}`}>
                                            Contact Us
                                        </div>
                                    </Link> */}

                                    {category.directCodeMatches.map((code, idx) => (
                                        //  <Link to={`products/${category.name}/${code}`} className='product-codes'>
                                        // <div key={idx}>{code}</div>
                                        // </Link>
                                        <Link to={`products/${category.name}/${code}`} className='product-codes'>
                                            <div key={idx}>{code}</div>
                                        </Link>
                                    ))}

                                </div>
                            ))}



                        </div>
                    )}
                </div>


                <div className='hamburgerNav'
                    onClick={() => setOpenMobileNav(true)}
                >
                    ≡
                </div>


                {openMobileNav && (
                    <div className='mobileNavContainer' onClick={handleCloseNav}>
                        <div className='mobileNav'>
                            <div className='closeNavBtn' onClick={() => setOpenMobileNav(false)}>
                                ×
                            </div>

                            <div className='mobilenavItems'>
                                <Link to='/'>
                                    <div className={`mobilenavitem ${location.pathname === '/' ? 'selected' : ''}`}>
                                        Home
                                    </div>
                                </Link>
                                <Link to='/about'>
                                    <div className={`mobilenavitem ${location.pathname === '/about' ? 'selected' : ''}`}>
                                        About Us
                                    </div>
                                </Link>
                                <Link to='/products/Wi-Fi%20Camera'>
                                    <div className={`mobilenavitem ${location.pathname.includes('/products') ? 'selected' : ''}`}
                                    >
                                        Products
                                    </div>

                                </Link>
                                {/* <Link to='/'>
                                <div className='mobilenavitem'>Our Clients</div>
                            </Link> */}
                                <Link to='/mediagallery'>
                                    <div className={`mobilenavitem ${location.pathname === '/mediagallery' ? 'selected' : ''}`}>
                                        Gallery
                                    </div>
                                </Link>
                                <Link to='/contactus'>
                                    <div className={`mobilenavitem ${location.pathname === '/contactus' ? 'selected' : ''}`}>
                                        Contact Us
                                    </div>
                                </Link>
                            </div>

                            <div className='mobilenavSearch'>
                                <input
                                    type="text"
                                    placeholder='Search'
                                    className='navInput'
                                    value={searchInput}
                                    onChange={handleSearchChange}
                                />
                                <div className='searchIcon'>
                                    <img src={search} />
                                </div>

                                {(searchResults?.allResults?.length > 0 || searchResults?.directCodeMatches?.length > 0) && searchInput && (
                                    <div className='Navdropdown'>
                                        {/* Show Category Matches */}
                                        {searchResults.allResults.map((category, index) => (
                                            <div key={index}>
                                                <div
                                                    className='dropdown-item'
                                                    onClick={() => handleSelect(category.name)}
                                                >
                                                    {category.name}
                                                </div>

                                                {/* <Link to='/contactus'>
                                        <div className={`navitem ${location.pathname === '/contactus' ? 'selected' : ''}`}>
                                            Contact Us
                                        </div>
                                    </Link> */}

                                                {category.directCodeMatches.map((code, idx) => (
                                                    //  <Link to={`products/${category.name}/${code}`} className='product-codes'>
                                                    // <div key={idx}>{code}</div>
                                                    // </Link>
                                                    <Link to={`products/${category.name}/${code}`} className='product-codes'>
                                                        <div key={idx}>{code}</div>
                                                    </Link>
                                                ))}

                                            </div>
                                        ))}

                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                )}


            </div>
        </div>
    )
}

export default Nav


const categories = [
    {
        name: "Wi-Fi Camera",
        codes: [
            "BEC-Wi-Fi-WL01",
            "BEC-Wi-Fi-WL03-D",
            "BEC-Wi-Fi-WL04PT-D",
            "BEC-Wi-Fi-WL04-OTW",
            "BEC-WL05-MB",
            "BEC-Wi-Fi-WL06VC",
            "BEC-Wi-Fi-WL06PN",
            "BEC-Wi-Fi-WL08-BT"
        ]
    },
    {
        name: "4G Camera",
        codes: [
            "BEC-4G-B-3.0-A-S-SL-TWA",
            "BEC-4G-D-3.0MP-A-SL-TWA",
            "BEC-4G-B-3.0-PT",
            "BEC-4G-PT SL"
        ]
    },
    {
        name: "IP Camera",
        codes: [
            "BEC-IP-B-5.0MP-A-SL",
            "BEC-IP-B-5.0MP-A-SL (plastic body)",
            "BEC-IP-B-5.0MP-A-SL-Fisheye",
            "BEC-IP-D-5.0MP-A-SL",
            "BEC-IP-B-4.0MP-A-SL",
            "BEC-IP-B-4.0MP-A-SL (6mm)",
            "BEC-IP-D-4.0MP-A-SL-4AR",
            "BEC-IP-B-8.0MP-A-SL",
            "BEC-IP-D-8.0MP-A-SL"
        ]
    },
    {
        name: "Analog Camera",
        codes: [
            "BEC-HD-B-2.4MP-SL",
            "BEC-HD-D-2.4MP-SL",
            "BEC-HD-D-3.0MP-SL-A",
            "BEC-HD-B-3.0MP-SL-A"
        ]
    },
    {
        name: "NVR",
        codes: [
            "BEC-NVR-1008-S1",
            "BEC-NVR-1608-S1",
            "BEC-NVR-3208-S2"
        ]
    },
    {
        name: "DVR",
        codes: [
            "BEC-XVR-4005-S1",
            "BEC-XVR-8005-S1",
            "BEC-XVR-1605-S2"
        ]
    },
    {
        name: "PoE Switch",
        codes: [
            "BEC-PoE-0402FE",
            "BEC-PoE-0802FE",
            "BEC-PoE-0802-UPG",
            "BEC-PoE-0802-FG",
            "BEC-PoE-1602UPGF1",
            "BEC-PoE-2402UPGF1"
        ]
    },
    {
        name: "4G Router",
        codes: [
            "BEC-RT-01-4G-5G",
            "BEC-RT-03A",
            "BEC-RT-03-4G-5G",
            "BEC-RT-02-4G-5G"
        ]
    },
    {
        name: "Rack",
        codes: [
            "BEC-RACK 2U",
            "BEC-RACK 4U"
        ]
    },
    {
        name: "Power Supply",
        codes: [
            "BEC-PS04-12",
            "BEC-PS08-12",
            "BEC-PS16-12"
        ]
    },
    {
        name: "Accessories",
        codes: [
            "BNC Cable",
            "DC Pin Cable",
            "Cat6 Cable",
            "3+1 CCTV Cable",
            "HDMI Cable",
            "Micro SD Card",
            "SGA60E12-P1J"
        ]
    }
];



// const categories = [
//     "Wi-Fi Camera",
//     "4G Camera",
//     "IP Camera",
//     "Analog Camera",
//     "NVR",
//     "DVR",
//     "PoE Switch",
//     "4G Router",
//     "Rack",
//     "Power Supply",
//     "Accessories"
// ];