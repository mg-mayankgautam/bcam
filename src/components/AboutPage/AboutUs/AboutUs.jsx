import React from 'react'
import './AboutUs.css'
import img from '../../../assets/aboutimg.png'

const AboutUs = () => {
    return (
        <div className='AboutUs'>
            <div className='aboutUsBox'>
                <div className='aboutUsContent'>
                    <div className='aboutHead'>
                        Vision & Mission
                    </div>
                    <div>
                        To be a global leader in innovative and reliable surveillance solutions, empowering businesses, homes, and communities with state-of-the-art technology to create safer environments for everyone.
                    </div>

                    <div>
                        To provide high-quality, affordable, and customized CCTV solutions that meet the unique security needs of our clients. We are committed to leveraging the latest technologies and delivering exceptional service to ensure peace of mind, real-time monitoring, and long-term safety for all.
                    </div>
                    <div className='aboutHead'>
                        About Us
                    </div>
                    <div>
                        BE-CAM is a leading provider of innovative and reliable CCTV surveillance solutions, dedicated to ensuring the safety and security of businesses, homes, and communities. With over 5 years of experience in the security industry, we have built a reputation for delivering high-quality products and exceptional service.
                    </div>
                    <div>
                        Our extensive range of CCTV systems, including IP cameras, DVR, NVR, Analog cameras, and advanced video management software, is designed to meet the diverse needs of our clients. From small businesses to large enterprises, we provide customized solutions that offer maximum protection, peace of mind, and real-time monitoring.
                    </div>
                    <div>
                        BE-CAM, we believe that security should be both effective and affordable. Our team of experienced professionals is committed to staying ahead of the latest industry trends and technologies to provide our customers with cutting-edge solutions tailored to their specific needs.
                    </div>
                </div>

                <div className='aboutUsImg'>
                    <img src={img} />
                </div>
            </div>
        </div>
    )
}

export default AboutUs