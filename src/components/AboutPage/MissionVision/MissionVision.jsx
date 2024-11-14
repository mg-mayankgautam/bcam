import React from 'react'
import './MissionVision.css'
import expertise from '../../../assets/icons/Expertise.png'
import customised from '../../../assets/icons/Customized Solutions.png'
import support from '../../../assets/icons/24_7 Support.png'
import afford from '../../../assets/icons/Affordable Pricing.png'
import custsatis from '../../../assets/icons/Customer Satisfaction.png'

const MissionVision = () => {
    return (
        <div className='MissionVision'>
            <div className='MV_head'>
                Why Choose Us?
            </div>

            <div className='WCU_card'>
                <div className='WCU_img'>
                    <img src={expertise} />
                </div>
                <div className='WCU_content'>
                    <div className='WCU_head'>Expertise</div>
                    <div className='WCU_text'>
                        Our team of security experts has in-depth knowledge of the latest CCTV technologies and best practices.
                    </div>
                </div>
            </div>


            <div className='WCU_card right'>
                <div className='WCU_content right'>
                    <div className='WCU_head'>Customized Solutions</div>
                    <div className='WCU_text'>
                        We tailor our CCTV systems to suit the unique security requirements of each client.
                    </div>
                </div>
                <div className='WCU_img'>
                    <img src={customised} />
                </div>
            </div>

            <div className='WCU_card'>
                <div className='WCU_img'>
                    <img src={support} />
                </div>
                <div className='WCU_content'>
                    <div className='WCU_head'>Technical Support</div>
                    <div className='WCU_text'>
                        We offer round-the-clock technical support and maintenance services to ensure your system operates flawlessly.
                    </div>
                </div>
            </div>


            <div className='WCU_card right'>
                <div className='WCU_content right'>
                    <div className='WCU_head'>Affordable Pricing</div>
                    <div className='WCU_text'>
                        We provide competitive pricing without compromising on quality or performance.
                    </div>
                </div>
                <div className='WCU_img'>
                    <img src={afford} />
                </div>
            </div>

            <div className='WCU_card'>
                <div className='WCU_img'>
                    <img src={custsatis} />
                </div>
                <div className='WCU_content'>
                    <div className='WCU_head'>Customer Satisfaction</div>
                    <div className='WCU_text'>
                        Our top priority is to deliver solutions that exceed our customers' expectations and ensure their complete satisfaction
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MissionVision