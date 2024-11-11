import React, { useEffect } from 'react'
import './ContactUs.css'
import { Link } from 'react-router-dom'
import call from '../../assets/icons/call.svg'
import mail from '../../assets/icons/mail.svg'
import map from '../../assets/icons/location.svg'

const ContactUs = () => {

    return (
        <div className='ContactUs'>
            <div className='TP_head black'>
                <span className='orange'>Contact </span> Us
            </div>

            <div className='CU_Container'>

                <div className='CU_infoDiv'>
                    <div className='CU_flex'>
                        <div className='CU_icon'>
                            <img src={call} />
                        </div>
                        <div>
                            <Link to="tel:+919319998197">+91 93199 98197</Link> ,
                            <Link to="tel:+919319998196"> +91 93199 98196</Link>
                        </div>

                    </div>
                    <Link to='mailto:sales@becam.in' className='CU_flex'>
                        <div className='CU_icon'>
                            <img src={mail} />
                        </div>
                        <div>sales@becam.in</div>
                    </Link>

                    <div className='CU_flex'>
                        <div className='CU_icon'>
                            <img src={map} />
                        </div>
                        <div>
                            <div>BE-CAM TECH INDIA PVT LTD</div>
                            <div>608, Sidharth Building, <br />Nehru Place, Delhi, India</div>
                        </div>
                    </div>

                    <div className='iframeDiv map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7208511062445!2d77.252055!3d28.548109099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3cf89f0b829%3A0xce322a0ae76bef63!2sSiddharth%20Building%2C%20Nehru%20Pl%20Market%20Rd%2C%20Nehru%20Place%2C%20New%20Delhi%2C%20Delhi%20110019%2C%20India!5e0!3m2!1sen!2shk!4v1731278103232!5m2!1sen!2shk" width="600" height="250" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>

                <div className='iframeDiv googleform'>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfEqPSTqe4IahxEROUhcyU5Ub4kk3a9Laag-pN8HfE7ptem-Q/viewform?embedded=true" width="" height="" style={{ height: '100%', width:'100%' }} frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>

                <div className='googleformMobile'>
                    <div>
                        Have a query? <br />
                        <Link to='https://forms.gle/C4NbEVKxn3n5WKcW7' className='orange bold'>Click here!</Link>
                    </div>

                </div>

            </div>
        </div>)

}

export default ContactUs