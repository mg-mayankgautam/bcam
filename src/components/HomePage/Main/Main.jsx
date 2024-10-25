import React from 'react'
import './Main.css';
import img from '../../../assets/main.png';

const Main = () => {
    return (
        <div className='HomeMain'>
            <div className='mainHeader'>
                <div className='mainHeading'>
                    <strong>
                        <span className='orange'> Be</span>
                        <span className='blue'>CAM</span>
                    </strong>
                    <br />
                    Feel <strong>SAFE</strong> With Us

                </div>
                <div className='mainText'>
                    <div>BE-CAM is your trusted partner in providing innovative and reliable CCTV surveillance solutions. <br/>With over 5 years of experience, we offer customized security systems for homes, businesses, and communities. 
                    <br/>Whether you're protecting loved ones or ensuring the safety of your business, we deliver <br/>advanced, real-time monitoring solutions to meet your needs.
                    </div>

                    {/* <button className='button'>
                        Connect
                    </button> */}
                </div>
            </div>

            <div className='mainImg'>
                <img src={img} />
            </div>
        </div>
    )
}

export default Main