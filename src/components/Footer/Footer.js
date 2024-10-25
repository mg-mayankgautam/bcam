import React from 'react'
import './Footer.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='footerContent'>

        <div className='footerLogoContent'>

          <div className='footerLogo'>
            <Link to='/'>
              <img src={logo} />
            </Link>

          </div>

          <div>

            <Link to=''>
              <div>608, Sidharth Building,<br /> Nehru Place, Delhi <br/> India</div>
            </Link>
          </div>


        </div>

        <div className='footerInfo'>

          <div>
            <div className='footerTitle'>QUICK LINKS</div>
            <Link to='/about'>
              <div>About Us</div>
            </Link>
            <Link to=''>
              <div>Our Clients</div>
            </Link>
            <Link to=''>
              <div>Gallery</div>
            </Link>
            <Link to=''>
              <div>Contact Us</div>
            </Link>
          </div>

          <div>
            <div className='footerTitle'>POLICIES</div>
            <Link to='/termsandconditions'>
              <div>Terms & Conditions</div>
            </Link>
            <Link to='/privacypolicy'>
              <div>Privacy Policy</div>
            </Link>
          </div>

          <div>
            <div className='footerTitle'>CONTACT US</div>
            <Link to=''>
              <div>+91XXXXXXXXXX</div>
            </Link>
            <Link to=''>
              <div>sales@becam.in</div>
            </Link>
          </div>

        </div>

      </div>

      <div className='footerCopyright'>
        <div>©️BE-CAM TECH INDIA PVT LTD 2024. All Rights Reserved.</div>
        <Link to='https://www.thefuelmedia.co/' target='_blank'>
          <div>Designed & Developed by The Fuel Media</div>
        </Link>
      </div>
    </div>
  )
}

export default Footer