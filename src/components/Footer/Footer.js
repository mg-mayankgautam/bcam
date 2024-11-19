import React from 'react'
import './Footer.css';
import logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {

  const location = useLocation();

  return (
    <div className={location.pathname == '/' ? 'Footer home' : 'Footer'}>
      <div className='footerContent'>

        <div className='footerLogoContent'>

          <div className='footerLogo'>
            <Link to='/'>
              <img src={logo} />
            </Link>

          </div>

          <div>

            <Link to=''>
              <div>608, Sidharth Building, <br />Nehru Place, Delhi, India</div>
            </Link>
          </div>


        </div>

        <div className='footerInfo'>

          <div>
            <div className='footerTitle'>QUICK LINKS</div>
            <Link to='/about'>
              <div>About Us</div>
            </Link>
            {/* <Link to=''>
              <div>Our Clients</div>
            </Link> */}
            <Link to='/mediagallery'>
              <div>Gallery</div>
            </Link>
            <Link to='/contactus'>
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

            {/* <Link to="tel:+919319998197">
              <div>+91 93199 98197</div>
            </Link>

            <Link to="tel:+919319998196">
              <div>
                +91 93199 98196
              </div>
            </Link> */}
            <div>
              <Link to="tel:+919319998197">
                +91 93199 98197 ,{' '}
              </Link>

              <Link to="tel:+919319998196">
                +91 93199 98196
              </Link>
            </div>

            <Link to='mailto:sales@becam.in'>
              <div>sales@becam.in</div>
            </Link>
            <Link to='mailto:technicalsupport@becam.in'>
              <div>technicalsupport@becam.in</div>
            </Link>

            <Link to="https://wa.me/+919319998197?text=Hi" target='_blank'>
              <div>
                Whatsapp
              </div>
            </Link>
          </div>

        </div>

      </div>

      <div className='footerCopyright'>
        <div>©️ BE-CAM TECH INDIA PVT LTD 2024. All Rights Reserved.</div>
        <Link to='https://www.thefuelmedia.co/' target='_blank'>
          <strong style={{ textTransform: 'uppercase' }}><div>Designed & Developed by The Fuel Media</div></strong>
        </Link>
      </div>
    </div >
  )
}

export default Footer